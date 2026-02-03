// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
//


Array.prototype.myForEach = function (callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i , this);
    }
}


Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }

    }
    return result;
}

let numbers = [11,22,44,55,66,778,855];
numbers.myForEach((value, index) =>{
    console.log(`${value} ${index}`)
})

const filterNumbers = numbers.myFilter(value => value > 40);
console.log(filterNumbers)



