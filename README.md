# Envalid issue repro

This repo demonstrates an unexpected change between envalid 7.2.2 and 7.3.0

## Install

Run `npm install` to install all the dependencies and `npm run build` to build the TypeScript source.

## Running

Compiled code can be ran with `node dist/index.js`.

## Differences between envalid@7.2.2 and envalid@7.3.0

Output with 7.2.2:

```
typeof env.TEST: object
typeof env.TEST_CUSTOM: object
```

Output with 7.3.0:

```
typeof env.TEST: string
typeof env.TEST_CUSTOM: string
```

On 7.2.2, setting the default value to be `{}` or an object gives you an object out for the built-in `json` validator. But on 7.3.0, the default value is passed directly. While the built-in JSON validator is fine with both a string or an object pre 7.3.0, custom validators could potentially break, since default values were ran through the validator.

Trying to set `TEST_CUSTOM` default value to an object in 7.2.2 will result in a parsing error. Leaving it to a string in 7.2.2 gives you an object out. However, when you upgrade to 7.3.0, you'll get the default values directly, so `TEST_CUSTOM` is suddenly a string.