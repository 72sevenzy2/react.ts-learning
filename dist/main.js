"use strict";
class itemgen {
    constructor() {
        this.items = [];
    }
    additems(item) { this.items.push(item); }
    removeitem(product) {
        this.items = this.items.filter((item, index, array) => {
            console.log(item, index, array);
            return item.product !== product;
        });
    }
    updatequan(product, quantity) {
        const item = this.items.find(i => { i.quantity === quantity; });
        if (item) {
            item.quantity = quantity;
        }
    }
    getvalue() { return this.items.reduce((total, item) => total + (item.quantity * item.price), 0); }
    logitems() { console.log(this.items); }
}
const store = new itemgen();
store.additems({ price: 900, quantity: 2, product: "laptop" });
store.additems({ price: 2, quantity: 10, product: "milo packets" });
store.updatequan("laptop", 5);
store.removeitem("laptop");
store.logitems();
console.log("Total value", store.getvalue());
//# sourceMappingURL=main.js.map