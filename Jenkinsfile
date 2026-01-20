Running the following on jenkins:
bat 'set DEBUG=ng-packagr:* && set NG_BUILD_PARALLEL_TS=0 && set NODE_OPTIONS=--max-old-space-size=8192 && pnpm install && pnpm run build @swl/modal-lib --configuration=production'

Those "set DEBUG=ng-packagr:* && set NG_BUILD_PARALLEL_TS=0 && set NODE_OPTIONS=--max-old-space-size=8192" were added in an attempt to fix the problem.
Currently running node v22.22.0 on jenkins, locally v24.10.0