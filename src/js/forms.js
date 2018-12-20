import * as c from './console'

const secureKeys = [
  'Backspace',
  'Escape',
  'Enter',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight',
  'ArrowDown',
  ' ',
  'CapsLock',
  'Shift',
  'Meta',
  'Alt',
  'Control',
  'Tab',
]

const formatBytes = (bytes, decimals) => {
  if (bytes === 0)
    return '0 Bytes'

  const labels = [
    'Bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'YB'
  ]
  const B   = 1024
  const dec = decimals <= 0 ? 0 : decimals || 2
  const i   = Math.floor(Math.log(bytes) / Math.log(B))

  bytes = parseFloat((bytes / Math.pow(B, i)).toFixed(dec)) + ' ' + labels[i]

  return bytes
}

const ifFieldIsEmpty = ($target, value, parentClass) => {
  let parentContainer = false

  if ($target.parentNode.classList.contains(parentClass))
    parentContainer = true

  if (value === "" || value === null || value === 'undefined') {
    (parentContainer) ? $target.parentNode.classList.remove('filled') : null
    $target.classList.remove('filled')
  } else {
    (parentContainer) ? $target.parentNode.classList.add('filled') : null
    $target.classList.add('filled')
  }
}

const ifFieldIsNumeric = (e, $target, key) => {
  if (!$target.hasAttribute('numeric'))
    return false

  if (secureKeys.indexOf(key) >= 0)
    return false

  const validate = /^([0-9\.\,\-])$/.test(key)

  if (!validate)
    e.preventDefault()
}

const ifFieldIsDigits = (e, $target, key) => {
  if (!$target.hasAttribute('digits'))
    return false

  if (secureKeys.indexOf(key) >= 0)
    return false

  const validate = /^([0-9])$/.test(key)

  if (!validate)
    e.preventDefault()
}

const ifFieldIsFile = ($target) => {
  if ($target.getAttribute('type') !== 'file')
    return false

  const displayKeys = [
    'name',
    'size',
    'type'
  ]
  let   display = $target.getAttribute('display') || 'name'

  if (displayKeys.indexOf(display) <= -1) {
    c.error('Forms', '"'+ display + '" is not a valid value')

    return false
  }

  const $label = $target.previousElementSibling || $target.nextElementSibling

  if ($target.value === '' || $target.value === null || $target.value === 'undefined' && $label !== null) {
    ($label.hasAttribute('default-label')) ? $label.innerHTML = $label.getAttribute('default-label') : null

    return false
  }

  let displayLabel = $target.files[0][display]

  if (display === 'size')
    displayLabel = formatBytes(displayLabel, 0)

  if ($target.hasAttribute('multiple'))
    displayLabel = ifFieldIsFileMultiple($target, $label, display) || displayLabel

  if (!$label.hasAttribute('default-label'))
    $label.setAttribute('default-label', $label.innerHTML)

  $label.innerHTML = displayLabel
}

const ifFieldIsFileMultiple = ($target, $label, display) => {
  let   displayLabel
  const filesLength = $target.files.length

  if (display === 'size') {
    let sizes = 0

    for (let i = 0; i < filesLength; i++) {
      sizes = $target.files[i][display] + sizes
    }

    return formatBytes(sizes, 0)
  }

  if (filesLength > 1) {
    const lang = document.querySelector('html').getAttribute('lang') || 'en'
    let filesLabel = (lang === 'es') ? 'archivos' : 'files'

    return filesLength + ' ' + filesLabel
  }

  return false
}

const preventMultipleSubmit = ($target) => {
  $target.setAttribute('disabled', '1')
}

class forms {
  process(parentClass) {
    const $fields = document.querySelectorAll('input, select, textarea')

    if ($fields.length <= 0 || $fields === null || typeof $fields === 'undefined')
      return false

    $fields.forEach(($item, i) => {
      $fields[i].addEventListener('keydown', (e) => {
        ifFieldIsNumeric(e, e.target, e.key)
        ifFieldIsDigits(e, e.target, e.key)
      })
      $fields[i].addEventListener('change', (e) => {
        ifFieldIsFile(e.target)
        ifFieldIsEmpty(e.target, e.target.value, parentClass)
      })
    })

    const $btnSubmit = document.querySelectorAll('button[type="submit"]')

    if ($btnSubmit.length <= 0 || $btnSubmit === null || typeof $btnSubmit === 'undefined')
      return false

    $btnSubmit.forEach(($item, i) => {
      $btnSubmit[i].addEventListener('click', (e) => {
        preventMultipleSubmit(e.target)
      })
    })
  }
  init(parentClass = 'input-field') {
    window.addEventListener('load', () => {
      this.process(parentClass)
    })
  }
}

export default forms




_/*selects($selectField) {
  const selectvalue = $selectField.find('option:selected').text();


  if($.trim(selectvalue)){
    $selectField
    .nextAll('label')
    .html(selectvalue);
  }
}


self.$select
.each(function(index) {
  self._selects($(this));
});

self.$select
.on('change', function(event) {
  self._selects($(this));
});*/
