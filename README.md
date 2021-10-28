# KOII PoRT Angular Demo

This is demo shows how to use KOII PoRT into an angular project. 

## Install KOII PoRT:

To install KOII PoRT 
`npm install @_koi/port`
or
`yarn add @_koi/port`

## Setting up tsconfig fro PoRT

KOII-PoRT depends upon crypto  and some other modules in order to work so need rto specify paths ofr those modules in our `tsconfig.json` file. Add following lines under `Compiler Options`

```json
    "paths": {
      "stream": ["./node_modules/readable-stream"],
      "crypto": ["./node_modules/crypto-browserify"],
      "http":["./node_modules/http-browserify"],
      "https":["./node_modules/https-browserify"]

    },
```

## updating `polyfills.ts` file

Since KOII PoRT depends upon `process` and `Buffer` so you need to add following lines to your `src/polyfills.ts` file

```ts
import { Buffer } from 'buffer';
 (window as any).global = (window as any).global || window;
 (window as any).Buffer =   (window as any).Buffer || Buffer;
 (window as any).process =  (window as any).process || {};
 (window as any).process.env =(window as any).process.env || {};
```

**see full documentation ofr KOII Port on** [@_koi/port](https://github.com/koii-network/koi-PoRT)

