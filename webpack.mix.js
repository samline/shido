
// Require
let mix = require('laravel-mix');

// Mix
mix

// Set directories
.setResourceRoot('../')
.setPublicPath('dist')

// Styles
.less(
  'src/less/shido.less',
  'css/shido.css'
)

if(mix.inProduction()) {
  // Mix
  mix

  // Source maps
  .sourceMaps()

  // Version
  .version();
}
