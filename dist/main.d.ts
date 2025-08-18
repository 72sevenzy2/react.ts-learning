interface itemc {
    price: number;
    quantity: number;
    product: string;
}
declare class itemgen {
    private items;
    additems(item: itemc): void;
    removeitem(product: string): void;
    updatequan(product: string, quantity: number): void;
    getvalue(): number;
    logitems(): void;
}
declare const store: itemgen;
//# sourceMappingURL=main.d.ts.map