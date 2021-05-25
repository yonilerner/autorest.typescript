// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

export function generateRollupConfig(project: Project) {
  const { generateMetadata } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const rollupFile = project.createSourceFile("rollup.config.js", undefined, {
    overwrite: true
  });

  rollupFile.addStatements(
    `import nodeResolve from "@rollup/plugin-node-resolve";
    import cjs from "@rollup/plugin-commonjs";
    import sourcemaps from "rollup-plugin-sourcemaps";
    import multiEntry from "@rollup/plugin-multi-entry";
    import json from "@rollup/plugin-json";
    
    import nodeBuiltins from "builtin-modules";
    
    /**
     * Gets the proper configuration needed for rollup's commonJS plugin for @opentelemetry/api.
     *
     * NOTE: this manual configuration is only needed because OpenTelemetry uses an
     * __exportStar downleveled helper function to declare its exports which confuses
     * rollup's automatic discovery mechanism.
     *
     * @returns an object reference that can be \`...\`'d into your cjs() configuration.
     */
    export function openTelemetryCommonJs() {
      const namedExports = {};
    
      for (const key of [
        "@opentelemetry/api",
        "@azure/core-tracing/node_modules/@opentelemetry/api"
      ]) {
        namedExports[key] = [
          "SpanKind",
          "TraceFlags",
          "getSpan",
          "setSpan",
          "SpanStatusCode",
          "getSpanContext",
          "setSpanContext"
        ];
      }
    
      const releasedOpenTelemetryVersions = ["0.10.2", "1.0.0-rc.0"];
    
      for (const version of releasedOpenTelemetryVersions) {
        namedExports[
          // working around a limitation in the rollup common.js plugin - it's not able to resolve these modules so the named exports listed above will not get applied. We have to drill down to the actual path.
          \`../../../common/temp/node_modules/.pnpm/@opentelemetry/api@\${version}/node_modules/@opentelemetry/api/build/src/index.js\`
        ] = [
            "SpanKind",
            "TraceFlags",
            "getSpan",
            "setSpan",
            "StatusCode",
            "CanonicalCode",
            "getSpanContext",
            "setSpanContext"
          ];
      }
    
      return namedExports;
    }
    
    // #region Warning Handler
    
    /**
     * A function that can determine whether a rollupwarning should be ignored. If
     * the function returns \`true\`, then the warning will not be displayed.
     */
    
    function ignoreNiseSinonEvalWarnings(warning) {
      return (
        warning.code === "EVAL" &&
        (warning.id && ((warning.id.includes("node_modules/nise")) ||
          warning.id.includes("node_modules/sinon")) === true)
      );
    }
    
    function ignoreChaiCircularDependencyWarnings(warning) {
      return (
        warning.code === "CIRCULAR_DEPENDENCY" &&
        (warning.importer && warning.importer.includes("node_modules/chai") === true)
      );
    }
    
    const warningInhibitors = [
      ignoreChaiCircularDependencyWarnings,
      ignoreNiseSinonEvalWarnings
    ];
    
    /**
     * Construct a warning handler for the shared rollup configuration
     * that ignores certain warnings that are not relevant to testing.
     */
    function makeOnWarnForTesting() {
      return (warning, warn) => {
        // If every inhibitor returns false (i.e. no inhibitors), then show the warning
        if (warningInhibitors.every(inhib => !inhib(warning))) {
          warn(warning);
        }
      };
    }
    
    // #endregion
    
    function makeBrowserTestConfig() {
      const config = {
        input: {
          include: ["dist-esm/test/**/*.spec.js"],
          exclude: ["dist-esm/test/**/node/**"]
        },
        output: {
          file: \`dist-test/index.browser.js\`,
          format: "umd",
          sourcemap: true
        },
        preserveSymlinks: false,
        plugins: [
          multiEntry({ exports: false }),
          nodeResolve({
            mainFields: ["module", "browser"]
          }),
          cjs({
            namedExports: {
              // Chai's strange internal architecture makes it impossible to statically
              // analyze its exports.
              chai: [
                "version",
                "use",
                "util",
                "config",
                "expect",
                "should",
                "assert"
              ],
              ...openTelemetryCommonJs()
            }
          }),
          json(),
          sourcemaps()
          //viz({ filename: "dist-test/browser-stats.html", sourcemap: true })
        ],
        onwarn: makeOnWarnForTesting(),
        // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0,
        // rollup started respecting the "sideEffects" field in package.json.  Since
        // our package.json sets "sideEffects=false", this also applies to test
        // code, which causes all tests to be removed by tree-shaking.
        treeshake: false
      };
    
      return config;
    }
    
    const defaultConfigurationOptions = {
      disableBrowserBundle: false
    };
    
    export function makeConfig(
      pkg,
      options
    ) {
      options = {
        ...defaultConfigurationOptions,
        ...(options || {})
      };
    
      const baseConfig = {
        // Use the package's module field if it has one
        input: pkg["module"] || "dist-esm/src/index.js",
        external: [
          ...nodeBuiltins,
          ...Object.keys(pkg.dependencies),
          ...Object.keys(pkg.devDependencies)
        ],
        output: { file: "dist/index.js", format: "cjs", sourcemap: true },
        preserveSymlinks: false,
        plugins: [sourcemaps(), nodeResolve(), cjs()]
      };
    
      const config = [baseConfig];
    
      if (!options.disableBrowserBundle) {
        config.push(makeBrowserTestConfig());
      }
    
      return config;
    }
    
    export default makeConfig(require("./package.json"));`
  );
}
