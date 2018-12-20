/**
 * @attribute proportional (shape, liquidOrStatic, maxHeight, minHeight)
 *   @param string   | rectangle/square | required
 *   @param string   | liquid/static    | required
 *   @param numeric  | #                | optional
 *   @param numeric  | #                | optional
 *
 * Example:
 *
 * <div proportional="rectangle, liquid, 400"></div>
 *
 * Init
 *
 * new proportional().init()
 */

import * as msg from './console'

class proportional {
  getParams(str) {
    return str.replace(/\s/g,'').split(',')
  }
  setItems() {
    document.querySelectorAll('[proportional]').forEach(($item, i) => {
      let   params          = this.getParams($item.getAttribute('proportional'))
      const shape           = params[0]
      const liquidOrStatic  = (params[1] === 'static') ? 'height' : 'minHeight'
      const maxHeight       = params[2]
      const minHeight       = params[3]
      let   height          = (shape === 'rectangle') ? Math.round($item.offsetWidth / 2) : $item.offsetWidth

      $item.style[liquidOrStatic] = height + 'px'

      if (typeof maxHeight !== 'undefined' && maxHeight !== ''){
        $item.style.maxHeight = maxHeight + 'px'
      }

      if (typeof minHeight !== 'undefined' && minHeight !== '' && liquidOrStatic !== 'minHeight'){
        $item.style.minHeight = minHeight + 'px'
      }
    })
  }
  proportionalAvailable() {
    let isValid = true

    document.querySelectorAll('[proportional]').forEach(($item, i) => {
      let   params = this.getParams($item.getAttribute('proportional'))
      const shape  = params[0]
      const liquidOrStatic = params[1]

      if (typeof shape === 'undefined' || shape !== 'rectangle' && shape !== 'square') {
        msg.error('Proportional', 'Item ' + (i+1) + ': Missing a valid shape')
        isValid = false
      }

      if (typeof liquidOrStatic === 'undefined' || liquidOrStatic === '' || liquidOrStatic !== 'liquid' && liquidOrStatic !== 'static') {
        msg.error('Proportional', 'Item ' + (i+1) + ': Is this "liquid" or "static"?')
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
    if (this.proportionalAvailable())
      this.process()
  }
}

export default proportional
