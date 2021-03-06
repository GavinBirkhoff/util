/**
 * @description emptyDom
 * @param {HTMLElement} el
 */
const emptyDom = (el: HTMLElement): void => {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}
export default emptyDom
