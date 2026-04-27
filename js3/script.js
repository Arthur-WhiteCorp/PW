class IntegerSet {
  #set;
  #size;

  constructor(size, array = null) {
    this.#size = size;
    this.#set = new Array(size).fill(false);
    if (Array.isArray(array) && array.length === size) {
      this.#set = array.map((value) => Boolean(value));
    }
  }

  add(number) {
    if (number >= 0 && number < this.#size) {
      this.#set[number] = true;
    }
  }

  remove(number) {
    if (number >= 0 && number < this.#size) {
      this.#set[number] = false;
    }
  }

  contains(number) {
    return number >= 0 && number < this.#size && this.#set[number];
  }

  static union(setA, setB) {
    let size = Math.max(setA.size, setB.size);
    let resultSet = new Array(size).fill(false);

    for (let i = 0; i < size; i++) {
      if (i < setA.size && setA.contains(i)) {
        resultSet[i] = true;
      }
      if (i < setB.size && setB.contains(i)) {
        resultSet[i] = true;
      }
    }
    return new IntegerSet(size, resultSet);
  }

  static intersection(setA, setB) {
    let size = Math.min(setA.size, setB.size);
    let resultSet = new Array(size).fill(false);

    for (let i = 0; i < size; i++) {
      if (setA.contains(i) && setB.contains(i)) {
        resultSet[i] = true;
      }
    }

    return new IntegerSet(size, resultSet);
  }

  static difference(setA, setB) {
    let size = Math.min(setA.size, setB.size);
    let resultSet = new Array(size).fill(false);

    for (let i = 0; i < size; i++) {
      if (setA.contains(i) && !setB.contains(i)) {
        resultSet[i] = true;
      }
    }

    return new IntegerSet(size, resultSet);
  }

  get size() {
    return this.#size;
  }

  toString() {
    return this.#set.map((value) => (value ? "1" : "0")).join(", ");
  }
}

// Test cases for IntegerSet class

const testIntegerSet = () => {
  const setSize = 10;
  const intSet = new IntegerSet(setSize);

  // Test add method
  intSet.add(5);
  console.assert(intSet.contains(5), "Test failed: add method did not work");

  // Test remove method
  intSet.remove(5);
  console.assert(
    !intSet.contains(5),
    "Test failed: remove method did not work",
  );

  // Test contains method
  console.assert(
    !intSet.contains(3),
    "Test failed: contains method returned true for non-existent element",
  );
  intSet.add(3);
  console.assert(
    intSet.contains(3),
    "Test failed: contains method returned false for existing element",
  );

  // Test size property
  console.assert(
    intSet.size === setSize,
    "Test failed: size property is incorrect",
  );
};

testIntegerSet();

// This class represents a set of integers. It provides methods to add, remove, and check for the presence of integers within a specified range.
