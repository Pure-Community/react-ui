const createElementClassNameFactory = (blockClassName: String) => (elementClassName: String) => `${blockClassName}__${elementClassName}`

export {createElementClassNameFactory}