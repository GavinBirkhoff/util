import { isElement, isString } from 'util4j'
type DomAttrs = {
  tagName?: string
  container?: HTMLElement
  node?: HTMLElement | string
}
/**
 * create a dom
 * @param {DomAttrs} domAttrs tagName create tag name, container parent node,node child node
 * @returns {HTMLElement}
 */
const createDom = (domAttrs: DomAttrs): HTMLElement => {
  const { tagName = 'div', container, node } = domAttrs
  const el = document.createElement(tagName)
  if (node) {
    if (isString(node)) {
      const textNode = document.createTextNode(node as string)
      el.appendChild(textNode)
    } else if (isElement(node)) {
      el.appendChild(node as Node)
    }
  }
  if (container) {
    container.appendChild(el)
  }
  return el
}

export default createDom
