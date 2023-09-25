console.log("object");

let age = 25;

const salary = 80000;

// primitive
// string, number, boolean,undefined, null,bigInıt, symbol,
// non-primitive
//  object

const name = "ali";

const total = 0;

const isNewUser = false;

let result;

const res = undefined;

const data = null;

// null; js'de boş veya bilinmeyen değeri temsil eden özel bir değerdir

// bigInıt; sayı veri türünün tutabileceğinden daha büyük bir tamsayı değerini belirtmek için

// symbol; benzersiz ve değiştirilmez bir değeri ifade eder

const person = {
  firstName: "ali",
  lastName: "aksoy",
  age: 30,
  isMarried: true,
};

// Operators
// Assignment
// Arithmetic
// Comparison
// Logical
// String

let x = 10;
let y = 5;

let xy = x > y;

const isEven = 10 % 2 === 0 ? true : false;

// Type Conversions
// implicit conversion
// explicit conversion

let a = 2 + "3";
console.log(true + "3");

console.log("5" - true); // 4 true === 1
console.log("a", 5 - undefined); // undefined olunca değer atanmadığı için olmuyor
console.log(Number(""));
console.log(typeof parseInt("ali") === "number");
console.log(parseFloat("3.14"));
console.log(String(null) == "null");
console.log((20).toString(20));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); // null "" NaN 0

// Equality
// == (Allow coercion) (zorlama) değer kontrolü
// === (Does not allow coercison) tip ve değer kontrolu yapıyor

const var1 = 10;
const var2 = "10";

const var3 = "";
const var4 = false;

console.log(var1 == var2);
console.log(var1 === var2);

console.log(var3 == var4);
console.log(var3 === var4);

// Conditional Statament

// if else else if swtich

const num = -5;

if (num > 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}

const number = 0;

if (number > 0) {
  console.log(number + " " + "is positive");
} else if (number === 0) {
  console.log(number + " " + "is 0");
} else {
  console.log(number + " " + "is negative");
}

let color = "green";

switch (color) {
  case "red": {
    color = "red";
    break;
  }
  case "green": {
    color = "green";
    break;
  }
  default: {
    color = "default";
    break;
  }
}

console.log(color);

//Looping Code
//  for loop, while loop, do .. while loop, for .. of loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let a1 = 1;
while (a1 <= 5) {
  console.log(a1);
  a1++;
}

let a2 = 6;
do {
  console.log(a2);
  a2++;
} while (a2 <= 5);

const numArray = [1, 2, 3, 4, 5, 6];

for (const a of numArray) {
  console.log(a);
  
}
