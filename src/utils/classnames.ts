const createElementClassNameFactory = (blockClassName: string) : ((className: string) => string)[] => [
    (className: string) => `${blockClassName}__${className}`,
    (className: string) => `${blockClassName}_${className}`
]


export {createElementClassNameFactory}