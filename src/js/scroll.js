/**
 * import * as scroll from 'path/to/scroll'
 *
 * scroll.enabled()
 * scroll.disabled()
 */

const $html = document.querySelector('html')
const scrollDisabledClass = 'scroll-disabled'
let state = {
  'scrolled': null
}

const _enabled = () => {
  state.scrolled = state.scrolled || 0

  if (!$html.classList.contains(scrollDisabledClass))
    return false

  $html.classList.remove(scrollDisabledClass)
  $html.style = ''

  window.scrollTo(0, state.scrolled)
}
const _disabled = () => {
  const scrolled = window.pageYOffset

  if ($html.classList.contains(scrollDisabledClass))
    return false

  $html.classList.add(scrollDisabledClass)
  $html.style = 'overflow-x: hidden; position: fixed; top: -' + scrolled + 'px'

  state.scrolled = scrolled
}

export const disabled =  _disabled
export const enabled  =  _enabled
