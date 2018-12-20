/**
 * @param array | required
 *
 * Example:
 *
 * preloadImages(['../logo.png', '../logo-2.png']);
 */

import * as msg from './console'

const preload = (images) => {
  images.forEach(function(item, i) {
    new Image().src = images[i];
  })
}
const imagesAvailable = (images) => {
  if (images.length <= 0 || typeof images !== 'object' || images === '') {
    msg.error('Preload Images', 'Missing images')

    return false
  }

  return true
}
const preloadImages = (images = []) => {
  if (imagesAvailable(images))
    preload(images)
}

export default preloadImages
