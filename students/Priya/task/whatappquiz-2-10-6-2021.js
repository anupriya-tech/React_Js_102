const apple = 3;
const basket = {
    apple : 2 ,
    bag: {
        apple :1 ,
        plastic: function (){
            return this.apple;
        }
    }
}

const plastic = basket.bag.plastic;

console.log(plastic());
console.log(basket.bag.plastic());