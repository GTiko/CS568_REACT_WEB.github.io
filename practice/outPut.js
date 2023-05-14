// function timer() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(()=> {
//       console.log(i);
//     }, i* 1000);
//   }
// }
// timer()

//

// (function timer() {
//   for (var j = 1; j <= 5; j++) {
//     (function () {
//       var i = j;
//       setTimeout(function clog() {
//         console.log(i);
//       }, i * 1000);
//     })();
//   }
// })();

//
// const test = {
//   prop: 42,
//   func: function () {
//     return this.prop;
//   },
// };
// console.log(test.func());

//
const car1 = {
  color: "",
  setColor: function (color) {
    this.color = color;
  },
  getColor: function () {
    return this.color;
  },
};

const car2 = {
  color: "",
};
car1.setColor.call(car2, "car2 color");
console.log(car2.color);

console.log(car1.getColor.call(car2));