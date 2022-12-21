const Operations = require('./sum');

class Main {
  constructor(operations) {
    this.Operations = operations;
  }

  start = () => {
    const { sum, sub, mult, div } = this.Operations;
    console.log(sum(2, 3));
    console.log(sub(2, 3));
    console.log(mult(2, 3));
    console.log(div(2, 3));
  }
}

const operations = new Operations();
const main = new Main(operations);
main.start();
