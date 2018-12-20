/**
 * @param array | required
 *
 * Example:
 *
 * shuffleArray(['a','b','c']);
 */

import * as msg from './console'

const shuffle = (items) => {
  let i
  let j
  let temp

  for (i = items.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = items[i]
    items[i] = items[j]
    items[j] = temp
  }

  return items
}
const shuffleAvailable = (items) => {
  if (items.length <= 0 || typeof items !== 'object' || items === '') {
    msg.error('Shuffle Array', 'Missing items')

    return false
  }

  return true
}
const shuffleArray = (items = [])  => {
  if (shuffleAvailable(items))
    return shuffle(items)
}

export default shuffleArray
