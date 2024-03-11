console.log("Hitesh Kalathiya");

// class User{
//     constructor(firstname, lastname, age){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.age = age
//     }
// }

// const user1 = new User('Hitesh', 'kalathiya', 20)
// console.log(user1)


class products {
    constructor(itemName, price, discount) {
        console.log('This is ' + itemName)
        this.itemName = itemName
        this.price = price
        this.discount = discount
    }
    get discountprice() {
        return this.discount + '% Discount is Available'
    };
    set setdiscount(value) {
        this.discount = value
    }

    discountedprice() {
        return this.price - this.discount * this.price / 100;
    }
}
class furniture extends products {
    constructor(itemName, price, discount, type) {

        super(itemName, price, discount)
        this.type = type
    }
}
// const laptop = new products("Asus", "100000", '40')
// console.log(laptop)

const chair = new furniture("Chair", "9999", '20', 'Woddden')
console.log(chair)