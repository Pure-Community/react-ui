class ClassNamesGenerator {
    private blockCN;
    private style: any;

    constructor(blockCN: string, style: any) {
        if (blockCN !== '') this.blockCN = blockCN
        else throw new RangeError('Classname must be non empty string')
        this.style = style
    }

    public getBlockCN(...modificators: string[]) {
        if (!modificators) return this.style[this.blockCN]
        else return [this.style[this.blockCN]]
        .concat(modificators
            .map(m => this.style[`${this.blockCN}_${m}`]))
            .join(' ')
    }

    public getElementCN(elementCN: string, ...modificators: string[]) {
        if (!modificators) return this.style[`${this.blockCN}__${elementCN}`]
        else return [this.style[`${this.blockCN}__${elementCN}`]]
        .concat(modificators
            .map(m => this.style[`${this.blockCN}__${elementCN}_${m}`]))
            .join(' ')
    }
}

export { ClassNamesGenerator }