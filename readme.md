# shido v2.0.2-beta
by  **Samuel Olvera (samline)**

## what is shido?
**shido** is a responsive framework developed with {Less} for artisans, includes classes, helpers and mixins that facilitate creation of layouts quickly. **shido** provides a great base to start by letting the developer create the necessary components for each project.

## Getting started

### Docs
<http://shido.dinkbit.net/> - v2.0.2-beta

<http://shido-v11.dinkbit.net/> - v1.1.0


### Install via npm
To take advantage of the customization features, the best way to install shido is via npm.

```bash
npm install shido --save
```

### Install via CDN
```bash
<link href="https://unpkg.com/shido@^2.0.2/dist/css/shido.min.css" rel="stylesheet">
```

### Add shido to your project
If you're install via npm and using postcss-import or a tool that uses it such as Webpack or Gulp, you can use @import to add shido directly to your build process.

```less
@import "path/to/.../node_modules/shido/src/less/shido";
```

### Configuration
You can create a file to customize the project variables if you need it.

```less
@import "path/to/customize-settings.less";
```

```less
// Layout
@s-body-background-color:      @c-grey-50;
@s-body-font-color:            @c-grey-900;
@s-body-font-size:             16px;
@s-heading-color:              @c-grey-900;
@s-base-font:                  'Your font', -apple-system, BlinkMacSystemFont, "Segoe UI", "Source Sans Pro", Oxygen, sans-serif;
@s-heading-font:               'Your font', -apple-system, BlinkMacSystemFont, "Segoe UI", "Source Sans Pro", Oxygen, sans-serif;
@s-main-link-color:            @c-blue-500;
@s-main-link-color-hover:      @c-blue-800;
@s-hr-color:                   @c-grey-300;

// Fonts
@s-min-font-size:   10;
@s-max-font-size:   60;

// Marging & Padding
@s-max-margin:  6; // x10
@s-max-padding: 6; // x10

```

## License
The MIT License (MIT)

Copyright (c) 2018 Samuel Olvera (samline) <jsamline@gmail.com>
