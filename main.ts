interface itemc { price: number; quantity: number; product: string; }
class itemgen {
  private items: itemc[] = [];
  additems(item: itemc): void { this.items.push(item); }
  removeitem(product: string): void {
    this.items = this.items.filter((item, index, array) => {
      console.log(item, index, array);
      return item.product !== product;
    })
  }
  updatequan(product: string, quantity: number): void {
    const item = this.items.find(i => { i.quantity === quantity; })
    if (item) { item.quantity = quantity; }
  }
  getvalue(): number { return this.items.reduce((total, item) => total + (item.quantity * item.price), 0); }
  logitems(): void { console.log(this.items); }
}

const store = new itemgen();
store.additems({ price: 900, quantity: 2, product: "laptop" });
store.additems({ price: 2, quantity: 10, product: "milo packets" });

store.updatequan("laptop", 5); store.removeitem("laptop");

store.logitems(); console.log("Total value", store.getvalue());