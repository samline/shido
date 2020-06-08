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
  .less(
    'src/less/shido-colors.less',
    'css/shido-colors.min.css'
  )

  /* .sass(
    'src/sass/shido.scss',
    'css/shido.min.css'
  )
  .sass(
    'src/sass/shido-colors.scss',
    'css/shido-colors.min.css'
  ) */

} else {
  mix

  .less(
    'src/less/shido.less',
    'css/shido.css'
  )
  .less(
    'src/less/shido-colors.less',
    'css/shido-colors.css'
  )

  /* .sass(
    'src/sass/shido.scss',
    'css/shido.css'
  )
  .sass(
    'src/sass/shido-colors.scss',
    'css/shido-colors.css'
  ) */

}
