const msg = (
  msg1  = '',
  msg2  = '',
  bg    = '#607d8b',
  color = '#fff',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: ' + bg + '; color: ' + color + '; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

const _error = (
  msg1 = '',
  msg2 = '',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: #ef5350; color: #fff; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

const _success = (
  msg1 = '',
  msg2 = '',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: #4caf50; color: #fff; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

const _sarning = (
  msg1 = '',
  msg2 = '',
) => {
  const msg  = '%c' + msg1 + '%c' + msg2
  const sty1 = 'background: #ffc400; color: #fff; font-weight: bold; padding: 5px;'
  const sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;'

  console.log(
    msg,
    sty1,
    sty2
  );
}

export default msg
export const   success  = _success
export const   error    = _error
export const   warning  = _sarning
