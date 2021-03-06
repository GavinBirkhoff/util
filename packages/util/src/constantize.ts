import { ObjectType } from './types'
/**
 * @since 1.0.0
 * @description freeze obj and keys
 * @param {Object} obj need to freeze target
 */
const constantize = (obj: ObjectType<any>): void => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key])
    }
  })
}

export default constantize
