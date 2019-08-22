# shido v2.1.0
by  **Samuel Olvera (samline)**

## what is shido?
**shido** is a responsive framework developed with {Less} for artisans, includes classes, helpers and mixins that facilitate creation of layouts quickly. **shido** provides a great base to start by letting the developer create the necessary components for each project.

## Getting started

### Docs
<http://shido.dinkbit.net/> - v2.1.0

<http://shido-v11.dinkbit.net/> - v1.1.0

### Install via CDN
```html
<link href="https://unpkg.com/shido@^2.1.0/dist/css/shido.min.css" rel="stylesheet">
```

### Install via npm or yarn
To take advantage of the customization features, the best way to install shido is via npm or yarn.

```bash
npm install shido --save
```
```bash
yarn add shido
```

### Add shido to your project
If you're install via npm or yarn and using `postcss-import` or a tool that uses it such as Webpack or Gulp, you can use `@import` to add shido directly to your build process.

```less
@import "...pathTo/shido/src/less/shido";
```

### Customize your project
If you want to customize your shido installation, you can generate a configuration file for your project for example `custom-shido.less` and set new values for default shido variables.

Keep in mind that with a high number in **fonts** or **margin** and **padding** will increase the number of classes and also the size of the final css.

*Note: The colors set by default can be found in Colors Palette*

```less
@import '...pathTo/shido'

// Layout
@s-body-background-color: @c-white;
@s-body-font-color:       @c-black;
@s-headers-font-color:    @c-black;
@s-body-font-family:      'Your font', -apple-system, BlinkMacSystemFont, "Segoe UI", "Source Sans Pro", Oxygen, sans-serif;
@s-headers-font-family:   'Your font', -apple-system, BlinkMacSystemFont, "Segoe UI", "Source Sans Pro", Oxygen, sans-serif;
@s-body-font-size:        16px;
@s-main-link-color:       @c-blue-500;
@s-main-link-color-hover: @c-blue-800;

// Fonts
@s-min-font-size: 10;
@s-max-font-size: 60;

// Marging & Padding
@s-max-margin:  8; // x10
@s-max-padding: 8; // x10
```

#### Layout variables
- `@s-body-background-color` Background color of the project.
- `@s-body-font-color` Text color of the project.
- `@s-headers-font-color` Headers colors `h1, h2 ... h6`.
- `@s-body-font-family` Default font.
- `@s-headers-font-family` Headers font `h1, h2 ... h6`.
- `@s-body-font-size` Default size font.
- `@s-main-link-color` Color of tag `<a>`.
- `@s-main-link-color-hover` Color of tag `<a>` in hover state.

*Note: You can define another link color with the color classes, this will not affect the hover state, for example:*

```html
<a href="#">Default link</a>
<a href="#" class="c-green-300">Green link</a>
<a href="#" class="c-pink-300">Pink link</a>
```

#### Layout variables
- `@s-min-font-size` Minimum font value available, default: 10.
- `@s-max-font-size` Maximum font value available, default: 60.

*Note: Only even numbers are available, for example:*

```html
<p class="x:fs-10 s:fs-12 m:fs-14 ... xl:fs-60">Hello world!</p>
```

#### Margin and Padding variables
- `@s-max-margin` Maximum margin value available, default: 8 (x10).
- `@s-max-padding ` Maximum padding value available, default: 8 (x10)..

*Note: Values available in intervals of five, for example:*

```html
<p class="x:mrg-left-0 s:mrg-left-5 m:mrg-left-10 ... xl:mrg-left-80">I have margin classes!</p>
```
```html
<p class="x:pad-left-0 s:pad-left-5 m:pad-left-10 ... xl:pad-left-80">I have padding classes!</p>
```

## License
The MIT License (MIT)

Copyright (c) 2019 Samuel Olvera (samline) <jsamline@gmail.com>
