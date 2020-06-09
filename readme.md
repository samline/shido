[![image](https://github.com/samline/shido/raw/master/shido-share.png)](<https://samline.github.io/shido>)

## What is Shido?
Shido is different from others css frameworks, it doesn't have preloaded UI kits.

Provide only what is necessary to design your web pages, like margins, font sizes, positioning, colors, helpers, that kind of thing. You won't find ready-to-use components like buttons and navigation bars, in fact if you are looking for some Ui kit such as Bootstrap or Foundation maybe Shido is not for you.

It is up to you to use Shido to create your own components, this provides immense freedom where others only restrict what you create.

## Docs
<https://samline.github.io/shido>

## Getting started

### Install via npm or yarn
To take advantage of the customization features, the best way to install Shido is via npm or yarn, this installation method guarantees a trouble-free use with bundlers like Webpack.

```bash
npm i shido@2.2.3 --save
```
```bash
yarn add shido@2.2.3
```

### Install via CDN
Before using CDN compilation, keep in mind that the customization of variables are not available without incorporating Shido in your build process. I recommend downloading the file and placing it in your projects directory for offline use or otherwise.

```html
<link href="https://unpkg.com/shido@^2.2.3/dist/css/shido.min.css" rel="stylesheet">
```

```html
<link href="https://cdn.jsdelivr.net/npm/shido@^2.2.3/dist/css/shido.min.css" rel="stylesheet">
```

### Add shido to your project
If you're install via npm or yarn and using `postcss-import` or a tool that uses it such as Webpack or Gulp, you can use `@import` to add Shido directly to your build process.

```less
@import "~shido/src/less/shido";
```

## License
Released under the MIT License

Copyright © 2013-2020 Samuel Olvera
