var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];

const test = {
  data() {
    return {
      products,
      selected: null
    }
  },
  methods: {
    selectItems(index){
      this.products[index].active = !this.products[index].active
      // this.products[index].quantity = 1
    },
    addItems(index){
      this.products[index].active = true
      this.products[index].quantity++
    },
    removeItems(index){
      this.products[index].active = true
      this.products[index].quantity--
    },
    calcTotal() {
      let tot = 0;
      this.products.forEach( (item) => {
        if (item.active)
          tot += item.quantity * item.price
      })
      return tot.toFixed(2)
    }
  },
}
const { createApp } = Vue
createApp(test).mount('#app')
