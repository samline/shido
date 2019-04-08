# shido v2.0.0
by  **Samuel Olvera (samline)**

## what is shido?
**shido** is a responsive framework developed with {Less} for artisans, includes classes, helpers and mixins that facilitate creation of layouts quickly. **shido** provides a great base to start by letting the developer create the necessary components for each project.

## Getting started

### Docs
<http://shido.dinkbit.net/> - v2.0.0

<http://shido-v11.dinkbit.net/> - v1.1.0


### Installation
```bash
npm install shido --save
```

### Usage
```less
@import "path/to/shido.less";
```
or if you do not compile

```html
<link rel="stylesheet" href="path/to/shido.min.css">
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
@s-base-font-weight-thin:      200;
@s-base-font-weight-light:     300;
@s-base-font-weight-regular:   400;
@s-base-font-weight-medium:    500;
@s-base-font-weight-semi-bold: 600;
@s-base-font-weight-bold:      700;
@s-main-link-color:            @c-blue-500;
@s-main-link-color-hover:      @c-blue-800;
@s-hr-color:                   @c-grey-300

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
