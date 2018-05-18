
// Require
let mix = require('laravel-mix');

mix

.setResourceRoot('../')
.setPublicPath('dist')

.sourceMaps()

if(mix.inProduction()) {
  mix

  .less(
    'src/less/shido.less',
    'css/shido.min.css'
  )
} else {
  mix

  .less(
    'src/less/shido.less',
    'css/shido.css'
  )
}
