// 10 High-ROI Output Questions (Practice)

// Try to predict each before checking the answer.

// 1.
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

obj.greet();

// Answer: Alice

// 2.
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

const fn = obj.greet;
fn();

// Answer: undefined

// 3.
function greet() {
  console.log(this.name);
}

greet.call({ name: "Bob" });

// Answer: Bob

// 4.
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet();

// Answer: undefined

// 5.
const obj = {
  name: "Alice",
  greet() {
    const inner = () => console.log(this.name);
    inner();
  }
};

obj.greet();
// 
// Answer: Alice

// 6.
const obj = {
  name: "Alice",
  greet() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

obj.greet();

// Answer: undefined

// 7.
function greet() {
  console.log(this.name);
}

const bound = greet.bind({ name: "Alice" });
bound.call({ name: "Bob" });

// Answer: Alice

// 8.
const obj = {
  name: "Alice",
  greet() {
    setTimeout(() => console.log(this.name), 0);
  }
};

obj.greet();

// Answer: Alice

// 9.
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

const { greet } = obj;
greet();

// Answer: undefined

// 10.
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

[1].forEach(obj.greet.bind(obj));

// Answer: Alice