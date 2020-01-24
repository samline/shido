[![image](https://github.com/samline/shido/raw/master/shido.png)](<https://samline.github.io/shido>)

## What is Shido?
**Shido** is a responsive framework developed with {Less} for artisans, includes classes, helpers and mixins that facilitate creation of layouts quickly. **Shido** provides a great base to start by letting the developer create the necessary components for each project.

## Getting started

### Docs v2.2.0
<https://samline.github.io/shido/>

### Install via CDN
Before using CDN compilation, keep in mind that the customization of variables are not available without incorporating Shido in your build process. **I recommend downloading the file and placing it in your projects directory for offline use or otherwise**.

```html
<link href="https://unpkg.com/shido@^2.2.0/dist/css/shido.min.css" rel="stylesheet">
```

### Install via npm or yarn
To take advantage of the customization features, the best way to install Shido is via npm or yarn.

```bash
npm install shido --save
```
```bash
yarn add shido
```

### Add shido to your project
If you're install via npm or yarn and using `postcss-import` or a tool that uses it such as Webpack or Gulp, you can use `@import` to add Shido directly to your build process.

```less
@import "~shido/src/less/shido";
```

### Customize your project
If you want to customize your Shido installation, you can generate a configuration file for your project for example `custom-shido.less` and set new values for default Shido variables.

Keep in mind that with a high number in **fonts** or **margin** and **padding** will increase the number of classes and also the size of the final css.

```less
@import "~shido/src/less/shido";

// Layout
@s-body-background-color: #fff;
@s-body-font-color:       #000;
@s-headers-font-color:    #000;
@s-body-font-family:      "Your font here", -apple-system, BlinkMacSystemFont, "Segoe UI", "Source Sans Pro", Oxygen, sans-serif;
@s-headers-font-family:   "Your font here", -apple-system, BlinkMacSystemFont, "Segoe UI", "Source Sans Pro", Oxygen, sans-serif;
@s-body-font-size:        16px;
@s-main-link-color:       #2196F3;
@s-main-link-color-hover: #1565C0;

// Fonts
@s-min-font-size: 10;
@s-max-font-size: 60;

// Marging & Padding
@s-max-margin:  8; // x10
@s-max-padding: 8; // x10
```

#### Layout variables
- `@s-body-background-color`
- `@s-body-font-color`
- `@s-headers-font-color`
- `@s-body-font-family`
- `@s-headers-font-family`
- `@s-body-font-size`
- `@s-main-link-color`
- `@s-main-link-color-hover`

*Note: You can define another link color with the color classes, this will not affect the hover state.*

```html
<a href="#">Default link</a>
<a href="#" class="c-green-500">Green link</a>
<a href="#" class="c-purple-500">Purple link</a>
```

#### Fonts variables
- `@s-min-font-size`
- `@s-max-font-size`

*Note: Only even numbers are available.*

```html
<p class="x:fs-10 s:fs-12 m:fs-14 ... xl:fs-60">Hello world!</p>
```

#### Margin and Padding variables
- `@s-max-margin`
- `@s-max-padding `

*Note: Values available in intervals of five.*

```html
<p class="x:mrg-left-0 s:mrg-left-5 m:mrg-left-10 ... xl:mrg-left-80">I have margin classes!</p>
```
```html
<p class="x:pad-left-0 s:pad-left-5 m:pad-left-10 ... xl:pad-left-80">I have padding classes!</p>
```

## License
The MIT License (MIT)

Copyright (c) 2019 Samuel Olvera (samline)
