/**
 * @attribute regular
 *   @param string  | childrenClass | required
 *   @param numeric | breakpoint    | optional
 *
 * Example:
 *
 * <div regular="childrenClass, breakpoint">
 *   <div class="childrenClass"></div>
 *   <div class="childrenClass"></div>
 *   ...
 * </div>
 *
 * Init
 *
 * new regular().init()
 */

import * as msg from './console'

class regular {
  getParams(str) {
    return str.replace(/\s/g,'').split(',')
  }
  setItems() {
    document.querySelectorAll('[regular]').forEach(($item, i) => {
      let   params        = this.getParams($item.getAttribute('regular'))
      const childrenClass = params[0]
      const breakpoint    = (isNaN(params[1])) ? 0 : params[1]
      const windowWidth   = window.innerWidth
      let a = 0;
      let b = 0;

      if (windowWidth < breakpoint) {
        $item.querySelectorAll('.' + childrenClass).forEach(($children, i) => {
          $children.style.height = 'auto'
        })
      }

      if (windowWidth >= breakpoint) {
        $item.querySelectorAll('.' + childrenClass).forEach(($children, i) => {
          $children.style.height = 'auto'
        })

        $item.querySelectorAll('.' + childrenClass).forEach(($children, i) => {
          a = $children.offsetHeight

          if (a >= b) {
            b = a;
          }
        })

        $item.querySelectorAll('.' + childrenClass).forEach(($children, i) => {
          $children.style.height = b + 'px'
        })
      }
    })
  }
  regularAvailable() {
    let isValid = true

    document.querySelectorAll('[regular]').forEach(($item, i) => {
      let   params        = this.getParams($item.getAttribute('regular'))
      const childrenClass = params[0]

      if (typeof childrenClass === 'undefined' || childrenClass === '') {
        msg.warning('Dimentions', 'Item ' + (i+1) + ': Empty class')
        isValid = false
      }

      if (typeof childrenClass !== 'undefined' && childrenClass !== '' && document.querySelector('.' + childrenClass) === null) {
        msg.error('Dimentions', 'Item ' + (i+1) + ': Missing a valid class')
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
    if (this.regularAvailable())
      this.process()
  }
}

export default regular
