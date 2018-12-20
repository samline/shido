/**
 * @attribute dimentions-height (selector, liquidOrSatic, breakpoint)
 *   @param string  | 'window', #id', '.class', '[attribute]' or 'tag' | required
 *                    accept 'full'    => Full height of window
 *                    accept 'partial' => Full height of window minus footer height
 *   @param string  | liquid/static | required
 *   @param numeric | breakpoint | optional
 *
 * Example:
 *
 * <div dimentions-height="full, liquid, 768"></div>
 *
 * Init
 *
 * new dimentions().init()
 */

/**
 * @method getHeight(selector)
 *   @param string | 'window', '#id', '.class', '[attribute]' or 'tag' | required

 * @method getWidth(selector)
 *   @param string | 'window', '#id', '.class', '[attribute]' or 'tag' | required
 *
 *
 * Example:
 *
 * console.log(getHeight('window'))
 *
 * Init
 *
 * getHeight(selector)
 * getWidth(selector)
 */

import * as msg from './console'

const getParams = (str) => {
  return str.replace(/\s/g,'').split(',')
}
const _getHeight = (selector = false) => {
  if (selector && selector != 'window')
    if (document.querySelector(selector) !== null)
      return document.querySelector(selector).offsetHeight

  if (selector && selector == 'window' || selector == 'full')
    return window.innerHeight

  if (selector && selector == 'partial')
    return window.innerHeight - document.querySelector('footer').offsetHeight

  msg.warning('Dimentions', 'Give me a valid selector dude!')
  return false
}
const _getWidth = (selector = false) => {
  if (selector && selector != 'window')
    if (document.querySelector(selector) !== null)
      return document.querySelector(selector).offsetWidth

  if (selector && selector == 'window')
    return window.innerWidth

  msg.warning('Dimentions', 'Give me a valid selector dude!')
  return false
}

class dimentions {
  setItems() {
    document.querySelectorAll('[dimentions-height]').forEach(($item, i) => {
      let   params          = getParams($item.getAttribute('dimentions-height'))
      const selector        = params[0]
      const liquidOrStatic  = (params[1] === 'static') ? 'height' : 'minHeight'
      const breakpoint      = (isNaN(params[2])) ? 0 : params[2]
      const windowWidth     = _getWidth('window')

      if (windowWidth < breakpoint) {
        $item.style[liquidOrStatic] = 'auto'
      }

      if (windowWidth >= breakpoint) {
        $item.style[liquidOrStatic] = _getHeight(selector) + 'px'
      }
    })
  }
  dimentionsAvailable() {
    let isValid = true

    document.querySelectorAll('[dimentions-height]').forEach(($item, i) => {
      let   params          = getParams($item.getAttribute('dimentions-height'))
      const selector        = params[0]
      const liquidOrStatic  = params[1]

      if (typeof selector === 'undefined' || selector === '') {
        msg.warning('Dimentions', 'Item ' + (i+1) + ': Empty selector')
        isValid = false
      }

      if (typeof selector !== 'undefined' && selector !== '' && selector !== 'full' && selector !== 'partial' && document.querySelector(selector) === null) {
        msg.error('Dimentions', 'Item ' + (i+1) + ': Missing a valid selector')
        isValid = false
      }

      if (typeof liquidOrStatic !== 'undefined' && liquidOrStatic !== '' && liquidOrStatic !== 'liquid' && liquidOrStatic !== 'static') {
        msg.error('Dimentions', 'Item ' + (i+1) + ': Is this "liquid" or "static"?')
        isValid = false
      }
    })

    return isValid
  }
  process() {
    let resizeTimer

    this.setItems()
    window.addEventListener('load', () => {
      this.setItems()
    })
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        this.setItems()
      }, 250)
    }, false)
  }
  init() {
    if (this.dimentionsAvailable())
      this.process()
  }
}

export default dimentions
export const   getHeight = _getHeight
export const   getWidth  = _getWidth
