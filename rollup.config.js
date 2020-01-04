import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'
import tsconfig from './tsconfig.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      tsconfigOverride: {
        exclude: [
          ...tsconfig.exclude,
          'src/setupTests.ts',
          'src/**/*.test.tsx',
        ],
      },
    }),
  ],
}
