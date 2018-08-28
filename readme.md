# shido シード
by `samline`

## Installation
```bash
npm install shido --save
```

## Getting started
Docs can be found at http://shido.dinkbit.net/grid

## Usage
```less
@import "path/to/shido.less";
```
or
```html
<link rel="stylesheet" href="path/to/shido.min.css">
```

## License
MIT

# New features

## Helpers

`Global`
- .bg-cover: 
  >  background-position: center
     > background-size: cover
- .inline-clear
  > Remove spaces between inline-block elements
- .pos-relative
  > position: relative

`Text`
- .txt-regular
  > font-weight: @s-base-font-weight 
- .txt-normal
  > font-style: normal
  > text-transform: none

## Modifiers

- .scontainer--half
  > Now it's responsive. e.g. **.m:scontainer--half**
