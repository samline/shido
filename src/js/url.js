/**
* @method getRequest(request)
*   @param string | request | optional

* @method getParams(param)
*   @param string | 'host', 'path', 'protocol', 'url' | optional
*
*
* Example:
*
* console.log(getRequest())
* console.log(getParams('url'))
*/

import msg from './console'

const getItems = (str, by) => {
  return str.replace(/\s/g,'').split(by)
}

const _getParams = (param = false) => {
  const path     = window.location.pathname
  const items    = getItems(window.location.href, '/')
  const protocol = items[0]
  const host     = items[2]
  const url      = protocol + '//' + host
  const params   = {
    'host': host,
    'path': path,
    'protocol': protocol,
    'url': url,
  }

  return (param) ? params[param] : params
}

const _getRequest = (request = false) => {
  const getRequestItems = (window.location.search) ? getItems(window.location.search.substring(1), '&') : 0
  let   params          = []

  if (typeof getRequestItems.length === 'undefined' || getRequestItems.length === '') {
    return false
  }

  getRequestItems.forEach(($item, i) => {
    const subItems            = getItems($item, '=')
          params[subItems[0]] = subItems[1]
  })

  return (request) ? params[request] : params
}

export const getRequest = _getRequest
export const getParams  = _getParams
