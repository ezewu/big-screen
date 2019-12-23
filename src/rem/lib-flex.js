((win, doc) => {
  const body = document.body

  const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'

  const recalc = () => {
    const clientWidth = body.clientWidth
    const clientHeight = body.clientHeight
    const documentWidth = document.documentElement.clientWidth
    const documentHeight = document.documentElement.clientHeight
    if (!clientWidth) return
    body.style.WebkitTransform = `scale(${documentWidth /
        clientWidth},${documentHeight / clientHeight})`
  }

  if (!doc.addEventListener) return

  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(window, document)
