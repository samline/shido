let mix = require('laravel-mix');

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  /* mix.less(
    'src/less/shido.less',
    'css/shido.min.css'
  ) */
  mix.sass(
    'src/sass/shido.scss',
    'css/shido.min.css'
  )
  mix.sass(
    'src/sass/shido-colors.scss',
    'css/shido-colors.min.css'
  )
} else {
  /* mix.less(
    'src/less/shido.less',
    'css/shido.css'
  ) */
  mix.sass(
    'src/sass/shido.scss',
    'css/shido.css'
  )
  mix.sass(
    'src/sass/shido-colors.scss',
    'css/shido-colors.css'
  )
}
