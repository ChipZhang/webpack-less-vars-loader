# A webpack loader to access LESS variables in JS

## Overview

With this webpack loader, you can access LESS variables in JS files, which run in browsers.
LESS variable overwritten and [`modifyVars`](https://lesscss.org/usage/#using-less-in-the-browser-modify-variables) also supported.
Supports webpack v4 or v5. This package has built-in TypesScript support.

## Install

```shell
npm i @chipzhang/webpack-less-vars-loader
```

Note you should make sure the relevant packages (such as `webpack`, `less`, `less-loader`, `css-loader`, `style-loader`)
are also installed as per your need.

## Usage

### Step 1, create a LESS file to store your wanted variables that you need to access in JS

Create a section `#less-vars {...}` in this file, then add the wanted variables in this section in the syntax:
`{js-var-name: @less-var-name;}`.
Where `@less-var-name` is the target LESS variable name, `js-var-name` is the kebab-case format of the camelCase JavaScript variable name
used to access the LESS variable, i.e. use `jsVarName` to access the LESS variable in JS.
`js-var-name` must be kebab-case format.
You can also reference variables defined in other LESS files by just importing them.
Moreover, if you have too many wanted variables, you can separate the variables into multiple `#less-vars {...}` sections,
for the ease of code organization.

For example, you have a base theme file `base-theme.less` defining some variables:

```less
@my-less-var1: red;
@my-less-var2: green;
@my-less-var3: blue;
```

And a customized theme file `my-theme.less` which modifies some of the variables:

```less
@import './base-theme';

@my-less-var2: grey;
```

Say, you want to access the LESS variables `@my-less-var1`, `@my-less-var2`, `@my-less-var3` defined in `my-theme.less`,
and a new variable `@my-less-var4`, via JavaScript variables `myJsVar1`, `myJsVar2`, `myJsVar3`, `myJsVar4` respectively,
then you can create a LESS file, named `vars.less` for example, as follows:

```less
@import './my-theme';

#less-vars {
  my-js-var1: @my-less-var1;
  my-js-var2: @my-less-var2;
  my-js-var3: @my-less-var3;
}

/* there can be more than one `#less-vars` sections */
#less-vars {
  my-js-var4: white;
}
```

### Step 2, configure webpack

Configure webpack, to first use `less-loader`, then this loader (`@chipzhang/webpack-less-vars-loader`),
against the previous LESS file.
For other LESS files, just load them normally, for example, using loaders `less-loader`, `css-loader`, `style-loader`.
Note webpack will use the loader in the order from right to left in your configuration file.
Moreover, you can overwrite the LESS variables in `less-loader`. For example:

```javascript
const lessLoader = {
  loader: 'less-loader',
  options: {
    lessOptions: {
      modifyVars: {
        'my-less-var3': 'black', // leading `@` can be omitted
      },
    },
  },
}

module.exports = {
  /* your webpack configs */
  module: {
    rules: [
      /* loaders for other file extensions */
      {
        test: /\.less$/i,
        oneOf: [
          {
            test: /\bvars\.less$/i,
            use: ['@chipzhang/webpack-less-vars-loader', lessLoader],
          },
          {
            use: ['style-loader', 'css-loader', lessLoader],
          },
        ],
      },
    ],
  },
}
```

### Step 3, access the LESS variables in JS files

Import the previous LESS file in your JS file, the imported value is a key-value object,
can be used to access your wanted LESS variables. For example:

```javascript
import './style.less' // import as normal styles
import lessVars from './vars.less' // import as a key-value object, to access LESS variables

console.log({lessVars})
console.log({myJsVar1: lessVars.myJsVar1})
console.log({myJsVar2: lessVars.myJsVar2})
console.log({myJsVar3: lessVars.myJsVar3})
console.log({myJsVar4: lessVars.myJsVar4})
```

Then `lessVars` will be:

```json
{
  "myJsVar1": "red",
  "myJsVar2": "grey",
  "myJsVar3": "black",
  "myJsVar4": "white"
}
```

### Step 4, generate type definitions for TypeScript

If you are using TypeScript, you can use command

```shell
npx less-vars-gen-types <less-file> [output-dir]
```

to generate a type definition file `*.less.d.ts` for this less file.
The default output directory is the same directory as the less file if not set.

## License

GNU AFFERO GENERAL PUBLIC LICENSE Version 3
