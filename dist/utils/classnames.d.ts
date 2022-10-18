declare class ClassNamesGenerator {
    private blockCN;
    private style;
    constructor(blockCN: string, style: any);
    getBlockCN(...modificators: string[]): any;
    getElementCN(elementCN: string, ...modificators: string[]): any;
}
export { ClassNamesGenerator };
