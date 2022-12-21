class Main {
  constructor(operations) {
    this.operations = operations;
  }

  start = () => {
    const { sum, sub, mult, div } = this.operations;
    console.log(sum(2, 3));
    console.log(sub(2, 3));
    console.log(mult(2, 3));
    console.log(div(2, 3));
  }
}

const operations = new Operations();
const main = new Main(operations);
main.start();
