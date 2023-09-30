console.log("here");

//nested function's scope, closures, currying, this keyword, prototype, prototypal inheritance, class, iterables and iterators, generators

// scope block scope, function scpeo, global scope

let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner(); // lexical scope'una bakar bulamazsa bir yukarıya bulamazsa diğer yukarıya bakar

  //   console.log("a",c) //* içeriden dışarıya ulaşabilrsin ama dışarıdan içeriye ulaşamazsın lexical scope
}
outer();

// Lexical scope, bir değişkenin veya fonksiyonun bir kod bloğunda nasıl erişilebileceğini ve hangi değişkenlerin kullanılabileceğini belirler. Lexical scope, kodun yazıldığı yerde belirtilen kapsamı ifade eder.

// if (true) {
//     let x = 10;
//     const y = 20;
//     var z = 30;
// }

// console.log(x); // Hata! x, if bloğu içinde tanımlandı.
// console.log(y); // Hata! y, if bloğu içinde tanımlandı.
// console.log(z); // Bu çalışır, z, fonksiyon kapsamında tanımlandı.

// Elbette, closure (kapanış) kavramını daha detaylı bir şekilde anlatayım.

// Closure (Kapanış) Nedir?

// Closure, bir iç fonksiyonun, dıştaki bir fonksiyonun (ana fonksiyonun) değişkenlerine ve kapsamına erişebilmesi yeteneğini ifade eder. İç fonksiyon, ana fonksiyonun kapsamındaki değişkenlere erişebilir ve bu değişkenleri kullanabilir, hatta iç fonksiyon dışındaki koda taşıyabilir.

// Closure Nasıl Oluşur?

// Bir closure, aşağıdaki koşulların karşılanmasıyla oluşur:

// Bir iç fonksiyon, bir dış fonksiyon içinde tanımlanır.
// İç fonksiyon, dış fonksiyon tarafından döndürülür (return edilir) veya başka bir işlev içinde kullanılır.
// Örnek bir closure:

// javascript
// Copy code
// function outerFunction() {
//     var outerVariable = "Dış Değişken";

//     function innerFunction() {
//         console.log(outerVariable); // innerFunction, outerVariable'a erişebilir
//     }

//     return innerFunction; // innerFunction, closure olarak döndürülüyor
// }

// var closureExample = outerFunction(); // closureExample, innerFunction'ı tutar
// closureExample(); // "Dış Değişken" çıktısını verir

function outer1() {
  let counter = 0;
  function inner1() {
    counter++;
    console.log(counter);
  }
  return inner1;
}
const fn = outer1();
fn(); //1
fn(); // 2 // bunun nedeni closure'dur
// ** Bir fn'nin başka bir fn döndürmesi durumunda kapatmanın oluşturulduğundan bahsettik yani burada inner fn'ni counter değişkeniyle kapatıldı yani paketlendi ve bu durumda counter değişkenin değerini hatırlayacaktır.Yani iç fn dış fn'nin değerlerine ulaşailmesidir. Yürütme bittikten sonra bile

// Fonksiyon currying

// Fonksiyon currying, bir fonksiyonun her çağrıldığında bir argüman almasını sağlayan bir dizi daha özelleşmiş fonksiyona bölünmesi işlemidir

// Yani birden fazla argümana sahip bir fonskiyonu her seferinde bir argüman alan iç içe geçmiş fonskiyonlar dizisine dönüştürüldüğümüz bir süreçtir

//dikkat edilmesi gerekn bir fonskiyonu çağırmadğı dönüştürdüğüdür.

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

function a1(a) {
  return function b2(b) {
    return function c2(c) {
      return a + b + c;
    };
  };
}

const ali1 = a1(2);
const beyda = ali1(2);
const feyza = beyda(2);
console.log(feyza);

// this

// JavaScript’te this keyword’ü, kullanıldığı bağlama göre farklı nesneleri işaret eden bir anahtardır. this bir değişken değildir, bu yüzden değerini değiştiremezsiniz. this’in neyi işaret ettiğini anlamak için, this’in nasıl çağrıldığına bakmak gerekir.

// this, JavaScript'te kullanılan özel bir anahtar kelimedir ve belirli bir bağlama (context) işaret eder. this, bağlamına göre değişebilir ve hangi değeri taşıdığını belirlemek için kullanıldığı yere bağlıdır. this, fonksiyonun nasıl çağrıldığına ve nerede tanımlandığına bağlı olarak farklı değerlere sahip olabilir.

// this ile çalışan execution context'in değerlerine ulaşırız

// Tabii ki, JavaScript'te this anahtar kelimesini detaylı bir şekilde açıklayayım. this, JavaScript içinde oldukça önemli ve bazen karmaşık bir kavramdır.

// this Nedir?

// this, JavaScript'te kullanılan özel bir anahtar kelimedir ve belirli bir bağlama (context) işaret eder. this, bağlamına göre değişebilir ve hangi değeri taşıdığını belirlemek için kullanıldığı yere bağlıdır. this, fonksiyonun nasıl çağrıldığına ve nerede tanımlandığına bağlı olarak farklı değerlere sahip olabilir.

// this'in Değerleri

// this, farklı bağlamlarda farklı değerlere sahip olabilir. İşte this'in yaygın olarak karşılaşılan bazı değerleri:

// Global Context (Global Bağlam): this, herhangi bir fonksiyonun dışında kullanıldığında global nesneyi (genellikle window nesnesi tarayıcıda) işaret eder.
// javascript
// Copy code
// console.log(this === window); // true
// Function Context (Fonksiyon Bağlamı): this, bir fonksiyonun içinde kullanıldığında, bu fonksiyonun çağrıldığı bağlama işaret eder.
// javascript
// Copy code
// function sayHello() {
//     console.log(this);
// }

// sayHello(); // Fonksiyonun çağrıldığı bağlam, genellikle global bağlamdır (tarayıcıda window).
// Method Context (Metod Bağlamı): this, bir objenin metodunda kullanıldığında, bu objeyi işaret eder.
// javascript
// Copy code
// const person = {
//     name: "John",
//     greet: function() {
//         console.log("Merhaba, ben " + this.name);
//     }
// };

// person.greet(); // "Merhaba, ben John" çıktısını verir.
// Constructor Context (Yapıcı (Constructor) Bağlamı): this, bir constructor fonksiyonu içinde kullanıldığında, bu fonksiyon tarafından oluşturulan yeni nesneyi işaret eder.
// javascript
// Copy code
// function Person(name) {
//     this.name = name;
// }

// const john = new Person("John");
// console.log(john.name); // "John" çıktısını verir.
// Event Listener Context (Olay Dinleyici Bağlamı): Olay dinleyicileri içinde kullanıldığında, this, olayı tetikleyen nesneyi işaret eder.
// javascript
// Copy code
// document.getElementById("myButton").addEventListener("click", function() {
//     console.log(this); // "myButton" elementini işaret eder.
// });
// this'in Değerini Belirleme

// this'in değerini belirlemek için birkaç farklı yöntem ve kural vardır:

// call(), apply(), ve bind() yöntemleri ile this'in değeri belirli bir fonksiyona atanabilir.
// Arrow (ok) fonksiyonları, tanımlandıkları bağlamın this'ini korurlar.
// Olay dinleyicileri gibi bazı özel bağlamlarda this, olayı tetikleyen nesneyi işaret eder.
// Yapıcı (constructor) fonksiyonları ile oluşturulan nesneler, this'i yeni nesneye işaret eder.
// this'in değerini anlamak ve doğru bir şekilde kullanmak, JavaScript kodunun anlaşılması açısından önemlidir. Ancak this ile ilgili kafa karıştırıcı durumlar ve hatalar ortaya çıkabilir, bu nedenle dikkatli olmalısınız ve kodunuzu test etmelisiniz.

// bind call ve apply

// JavaScript'te call, apply ve bind metotları, fonksiyonları çalıştırırken veya bağlamı (context) belirlerken kullanılan önemli araçlardır. Her biri, fonksiyonların this değerini ayarlamak veya argümanları iletmek için kullanılır. İşte bu üç metodu ayrıntılı olarak açıklayalım:

// call Metodu:

// call metodu, bir fonksiyonu belirli bir bağlamda (context) çalıştırmak için kullanılır. Fonksiyonun ilk argümanı, fonksiyonun çalıştırılacağı bağlamı belirtir, ardından diğer argümanlar sırayla gelir.

// javascript
// Copy code
// function sayHello() {
//     console.log("Merhaba, " + this.name);
// }

// const person = {
//     name: "John"
// };

// sayHello.call(person); // "Merhaba, John" çıktısını verir.
// call metodu, argümanları sırayla geçirir ve fonksiyonu çalıştırır.

// apply Metodu:

// apply metodu, call ile benzerdir, ancak argümanları bir dizi (array) içinde alır. Bu dizi, fonksiyonun çalıştırılacağı bağlamı belirlemek için kullanılır.

// javascript
// Copy code
// function sayHello(greeting) {
//     console.log(greeting + ", " + this.name);
// }

// const person = {
//     name: "John"
// };

// sayHello.apply(person, ["Merhaba"]); // "Merhaba, John" çıktısını verir.
// apply metodu, argümanları bir dizi içinde alır ve fonksiyonu çalıştırır.

// bind Metodu:

// bind metodu, bir fonksiyonu belirli bir bağlama bağlar (bind) ve bu bağlamda çalışacak yeni bir fonksiyon döndürür. Özünde, bind metodu bir fonksiyonun kalıcı olarak belirli bir bağlamda çalışmasını sağlar.

// javascript
// Copy code
// function sayHello() {
//     console.log("Merhaba, " + this.name);
// }

// const person = {
//     name: "John"
// };

// const greetJohn = sayHello.bind(person);
// greetJohn(); // "Merhaba, John" çıktısını verir.
// bind metodu, orijinal fonksiyonun bir kopyasını döndürür ve belirli bir bağlamı bu kopyaya bağlar.

// Bu üç metot, özellikle fonksiyonları farklı bağlamlarda kullanırken ve bağlama (context) ihtiyaç duyulduğunda kullanışlıdır. call ve apply, hemen fonksiyonu çalıştırmak için kullanılırken, bind yeni bir fonksiyon oluşturur ve daha sonra kullanılabilir. Bu metotlar, JavaScript'te kodunuzu daha dinamik ve esnek hale getirmenize yardımcı olur.

// this keyword ait olduğu objeyi belirtir.Nasıl çağrıldığına göre tamamen değişir global'de mi çağırıyon nesne içinde mi çağırıyorsun ya da event olayı içinde mi çağırıyorsun ya da function constructor'da mı buna göre değişir

// Çağrılma yöntemleri
// 1.Implicit binding
// 2.Explicit binding
// 3.New binding
// 4.Default binding

// 1.Implicit binding
const perso = {
  name: "ali",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};
perso.sayMyName();

// 2.Explicit binding
function sayMyName1() {
  console.log(`My name is ${this.name}`);
}

sayMyName1.call(perso);

// 3.New binding
function Person(name) {
  // this = {} bunu new yapıyor
  this.name = name;
}

const p1 = new Person("ali");
const p2 = new Person("beyda");

// 4.Default binding

// Prototip

// JavaScript'te prototip, nesne tabanlı programlamada önemli bir kavramdır. Nesne tabanlı programlamada, bir nesne diğer nesnelerin özelliklerini ve yöntemlerini miras alabilir. Prototip, bu miras alma mekanizmasını açıklar. Bu nedenle, JavaScript'te bir nesne oluşturduğunuzda, bu nesnenin bir prototipi vardır ve bu prototip, nesnenin özelliklerini ve yöntemlerini içerebilir. İşte prototip kavramını daha ayrıntılı bir şekilde açıklayan bazı önemli konular:

// Prototip Zinciri (Prototype Chain): JavaScript'teki nesneler, prototip zinciri adı verilen bir yapı içinde düzenlenirler. Bir nesnenin bir prototipi vardır ve bu prototip, başka bir nesnenin prototipi olabilir. Bu şekilde bir nesne, zincir boyunca ilgili prototiplerin özelliklerine ve yöntemlerine erişebilir.

// Prototip ve İnstance (Örnek): Bir nesne oluşturduğunuzda, bu nesne bir prototipi miras alır. Bu prototip, nesnenin özelliklerini ve yöntemlerini içerebilir. Nesne üzerinde bir özellik veya yöntem çağırıldığında, önce nesne kendisine bakılır. Eğer istenilen özellik veya yöntem nesnede bulunamazsa, JavaScript otomatik olarak prototip zincirini izleyerek ilgili prototipte arama yapar.

// Prototip ve Fonksiyonlar: JavaScript'teki tüm nesneler bir fonksiyon (constructor) tarafından oluşturulur. Her fonksiyonun bir prototipi vardır ve bu prototip, o fonksiyonun özelliklerini ve yöntemlerini tanımlar. Bu nedenle, bir fonksiyonun oluşturduğu nesneler, bu fonksiyonun prototipini miras alır.

// prototype Özelliği: Her fonksiyonun prototype adlı bir özelliği vardır. Bu özellik, o fonksiyonun oluşturduğu nesnelerin prototipini tanımlar. Örneğin:

// javascript
// Copy code
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     console.log("Merhaba, ben " + this.name);
// };
// Yukarıdaki örnekte, Person fonksiyonunun prototype özelliği, sayHello yöntemini tanımlar. Bu yöntem, Person fonksiyonu ile oluşturulan nesnelerin prototipi haline gelir.

// Object.prototype: Tüm JavaScript nesneleri Object nesnesinden türetilir ve bu nedenle Object.prototype adlı bir prototipe sahiptirler. Bu prototip, tüm JavaScript nesnelerinin temel özelliklerini ve yöntemlerini içerir.

// Prototip Değiştirme ve Kalıtım: JavaScript'te bir nesnenin prototipini değiştirerek kalıtım (inheritance) sağlayabilirsiniz. Yani, bir nesne başka bir nesnenin özelliklerini ve yöntemlerini miras alabilir. Bu, nesne tabanlı programlamada çok güçlü bir özelliktir.

// Prototipler, JavaScript'teki nesnelerin temel yapısını oluşturan önemli bir kavramdır ve nesne tabanlı programlamada kalıtım ve kod paylaşımı için kullanılırlar. Bu kavramı iyi anladığınızda, daha etkili ve modüler JavaScript kodları yazabilirsiniz.

function Bahadir(name) {
  this.name = name;
}

let h = new Bahadir("aaa");

Bahadir.prototype.ali = function () {
  console.log("ayse");
};
console.log("a", h);
h.ali();

function Person2(fName, lName) {
  this.name = fName;
  this.lastName = lName;
}

Person2.prototype.getA = function () {
  return this.name;
};

const p4 = new Person2("ali", "aksoy");
const p5 = new Person2("beyda", "aksoy");

p4.getFullName = function () {
  return this.name + this.lastName;
};

console.log(p4.getFullName());

console.log("a", p4);
console.log("b", p5);

// Prototip Inheritance

function People(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}
People.prototype.getFullName = function () {
  return this.name + this.lastName;
};

function SuperHero(fName, lName) {
  People.call(this, fName, lName); // person objesini çağırıyorum ama this objesi bağlamında çalıştırıyorum ve parametleri aktarıyorum

  this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime");
};

SuperHero.prototype = Object.create(People.prototype);

SuperHero.prototype.constructor = SuperHero;

const batman = new SuperHero("s", "y");
console.log("batman", batman);
console.log("batman", batman.getFullName());

// Class

// JavaScript'de sınıflar (classes), ECMAScript 6 (ES6) ile birlikte tanıtılan bir özelliktir. Sınıflar, nesne yönelimli programlamada (OOP) kullanılan bir tasarım desenidir ve kodun daha düzenli ve okunaklı hale gelmesini sağlar. İşte JavaScript sınıflarını detaylı bir şekilde açıklayan temel konular:

// Sınıf Tanımı (Class Definition):

// Bir sınıfı tanımlamak için class anahtar kelimesini kullanırız. Bir sınıf tanımlamak, bir şablona sahip bir nesne oluşturmak için ilk adımdır. Örneğin, bir Person sınıfı tanımlayalım:

// javascript
// Copy code
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Merhaba, ben ${this.name} ve ${this.age} yaşındayım.`);
//     }
// }
// Yukarıdaki örnekte, Person sınıfı bir constructor metodu (kurucu) ile başlar. Bu metot, bir nesnenin ilk durumunu (state) ve özelliklerini tanımlar. Ardından, sayHello adında bir yöntem (method) eklenir.

// Nesne Oluşturma (Object Instantiation):

// Bir sınıftan nesne oluşturmak için new anahtar kelimesini kullanırız:

// javascript
// Copy code
// const person1 = new Person("John", 30);
// const person2 = new Person("Alice", 25);
// Bu kod, Person sınıfından iki ayrı nesne (person1 ve person2) oluşturur.

// Constructor Metodu:

// Bir sınıfın constructor metodu, nesne oluşturulduğunda otomatik olarak çağrılır ve nesnenin başlangıç durumunu ayarlar. Constructor metodu, constructor anahtar kelimesi ile tanımlanır.

// Yöntemler (Methods):

// Bir sınıf içinde tanımlanan fonksiyonlar yöntem olarak adlandırılır. Yöntemler, sınıfın davranışını tanımlar. Yukarıdaki örnekte, sayHello yöntemi bir örnek yöntemidir.

// Kalıtım (Inheritance):

// Sınıflar, diğer sınıflardan kalıtım alabilirler. Kalıtım, bir sınıfın başka bir sınıftan özelliklerini ve yöntemlerini miras almasını sağlar. Örneğin:

// javascript
// Copy code
// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     study() {
//         console.log(`${this.name} öğrencisi ders çalışıyor.`);
//     }
// }
// Yukarıdaki örnekte, Student sınıfı Person sınıfından kalıtım almıştır. super anahtar kelimesi, üst sınıfın constructor metodunu çağırmak için kullanılır.

// JavaScript sınıfları, nesne yönelimli programlama (OOP) prensiplerini uygulamak için kullanılır. Bu prensipler, kodun daha modüler, yeniden kullanılabilir ve bakımı daha kolay hale gelmesini sağlar. Sınıflar, modern JavaScript uygulamalarının önemli bir bileşenidir ve ES6 ile birlikte yaygın olarak kullanılmaktadır.

class People111 {
  constructor(fName, lName) {
    this.name = fName;
    this.lastName = lName;
  }

  sayMyName2() {
    return this.name + " " + this.lastName;
  }
}

const k = new People111("a", "b");
const k1 = new People111("c", "d");
console.log(k1.sayMyName2());

class ChildPerson extends People111 {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = false;
  }
  fightCrime() {
    console.log("object");
  }
}

let k2 = new ChildPerson("f", "g");
let k3 = new ChildPerson("h", "j");

console.log("k3", k3.sayMyName2());

// Iterables and Iterators

//  JavaScript'teki veri yapılarının elemanları üzerinde gezinmek için kullanılan önemli kavramlardır.

// Iterable (Tekrarlanabilir):

// Bir iterable, elemanlarının sırayla gezinilebileceği bir nesnedir. JavaScript'teki birçok veri yapısı, iterable'dır. Örneğin, bir dizi (array) bir iterable'dır.

// javascript
// Copy code
// const myArray = [1, 2, 3, 4];
// Iterator (Tekrarlayıcı):

// Bir iterator, bir iterable üzerinde sırayla elemanlar arasında gezinmek için kullanılan bir nesnedir. Iterator, next() adlı bir metoda sahiptir ve bu metot ile bir sonraki elemana geçilir ve elemanın değeri döndürülür.

// javascript
// Copy code
// const myIterator = myArray[Symbol.iterator]();

// console.log(myIterator.next()); // { value: 1, done: false }
// console.log(myIterator.next()); // { value: 2, done: false }
// console.log(myIterator.next()); // { value: 3, done: false }
// console.log(myIterator.next()); // { value: 4, done: false }
// console.log(myIterator.next()); // { value: undefined, done: true }
// Iterable ve Iterator İşbirliği:

// Iterable ve iterator birlikte çalışır. Bir iterable, Symbol.iterator adlı özel bir sembolü içerir ve bu sembol bir iterator oluşturan bir fonksiyona işaret eder. Örneğin, bir dizi bu sembolü içerir ve bu sayede bir iterator elde edebiliriz.

// javascript
// Copy code
// const myArray = [1, 2, 3, 4];
// const myIterator = myArray[Symbol.iterator]();
// Bu iterator, iterable'daki elemanları sırayla almak için kullanılır. Her next() çağrısı ile bir sonraki elemanın bilgileri (değer ve tamamlanma durumu) elde edilir.

// for...of Döngüsü:

// for...of döngüsü, bir iterable üzerinde kolayca gezinmek için kullanılır. Bu döngü, iterable'ın elemanlarını sırayla alır ve bu elemanları bir değişkene atar.

// javascript
// Copy code
// const myArray = [1, 2, 3, 4];

// for (const element of myArray) {
//     console.log(element);
// }
// Bu döngü, iterable'ın sonuna geldiğinde otomatik olarak sona erer.

// Bu kavramlar, özellikle veri yapısı üzerinde gezinme ve elemanları işleme ihtiyacı duyduğunuzda çok kullanışlıdır. İterasyon, özellikle büyük veri kümesi veya liste gibi verilerle çalışırken, kodunuzu daha temiz ve etkili hale getirir.

const obj2 = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj2) {
  console.log(word);
}

// Generator

// Generator'lar, fonksiyonları belirli bir noktada duraklatma ve daha sonra devam etme yeteneği sunar. Bu, kodunuzu daha okunaklı ve verimli hale getirmenize yardımcı olur. İşte JavaScript generator'ları hakkında daha ayrıntılı bir açıklama:

// Generator Fonksiyonu Tanımlama:

// Bir generator fonksiyonunu tanımlamak için function* sözdizimi kullanılır. Generator fonksiyonları, yield anahtar kelimesini içerebilir ve bu anahtar kelime fonksiyonun çalışmasını duraklatır ve değer döndürmesine izin verir.

// Örnek:

// javascript
// Copy code
// function* sayHello() {
//     yield 'Merhaba';
//     yield 'Hello';
//     yield 'Bonjour';
// }

// Generator fn bir işlevi yarı yolda durdurabilen ve ardından durduğu yerden devam edebilen bir fonskiyoundur

function* generator() {
  yield "Hello"; // generatorün kendisini duraklatabilecek bir operatördür bir değer döndürmüyor yani üretiyor
  yield "World";
}

const generatorObj = generator(); // generatör neseni adı verilen bir şey döndürür; Bizim iterator yapmamıza gerek yok zaten generator onu itere yaptı
console.log(generatorObj);

// Object.argumants
// Evet, arguments nesnesi JavaScript fonksiyonları içinde kullanılabilir ve bu nesne, fonksiyonun çağrıldığı zaman geçirilen argümanları içerir. arguments nesnesi bir dizi benzeri bir nesnedir, yani indeks numaralarıyla erişebileceğiniz bir liste gibidir.

// Örneğin:

// javascript
// Copy code
// function sampleFunction() {
//   console.log(arguments);
// }

// sampleFunction(1, "hello", true);
// // Çıktı: [1, "hello", true]

// Ancak, modern JavaScript'te arguments nesnesi yerine rest parametreleri veya spread operatörü kullanımı daha yaygın ve tavsiye edilir. Rest parametreleriyle aynı işlevi görebilirsiniz, ancak daha açıklayıcı ve güvenli bir şekilde yapabilirsiniz:

// Object Assign

// Elbette! Object.assign() metodu, JavaScript'te bir veya daha fazla kaynak nesnesinin özelliklerini hedef bir nesneye kopyalamak için kullanılır. Bu yöntem, bir nesnenin özelliklerini başka bir nesneye kopyalamak veya birden fazla nesnenin özelliklerini birleştirmek için oldukça kullanışlıdır. İşte Object.assign() yönteminin temel kullanımı ve nasıl çalıştığına dair bir açıklama:

// Temel Kullanımı:
// javascript
// Copy code
// const hedefNesne = {};
// const kaynakNesne1 = { anahtar: 'değer1' };
// const kaynakNesne2 = { başkaBirAnahtar: 'değer2' };

// // Object.assign kullanarak kaynak nesnelerin özelliklerini hedef nesneye kopyala
// Object.assign(hedefNesne, kaynakNesne1, kaynakNesne2);

// console.log(hedefNesne);
// // Çıktı: { anahtar: 'değer1', başkaBirAnahtar: 'değer2' }
// Bu örnekte, Object.assign() metodu hedefNesne'ye kaynakNesne1 ve kaynakNesne2'nin özelliklerini kopyalar. Eğer aynı anahtar isimleri varsa, sonraki kaynak nesnelerin değerleri öncekileri üzerine yazacaktır.

// Object.create

// Object.create() yöntemi, JavaScript'te yeni bir nesne oluşturmak için kullanılan bir yöntemdir. Bu yöntem, belirli bir prototip nesnesi ile yeni bir nesne oluşturmanıza olanak tanır. Yani, oluşturduğunuz nesne, belirttiğiniz bir başka nesnenin özelliklerini ve yöntemlerini miras alır.

const Geometri = {
  alanHesapla() {
    return this.kenarUzunlugu * this.kenarUzunlugu;
  },
};

const Kare = Object.create(Geometri);
Kare.kenarUzunlugu = 5;

console.log(Kare.alanHesapla()); // Çıktı: 25

// Object.defineProperties

const Dikdortgen = {};

Object.defineProperties(Dikdortgen, {
  genislik: {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  yukseklik: {
    value: 200,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(Dikdortgen.genislik); // Çıktı: 100
console.log(Dikdortgen.yukseklik); // Çıktı: 200

// Object.entries

const cd = { name: "ali", lastName: "aksoy" };

console.log(Object.entries(cd)); //[Array(2), Array(2)]

// Object.freeze

// Object.freeze() metodu, bir nesnenin değiştirilemez (immutable) hale getirilmesini sağlar. Bu, nesnenin özelliklerinin eklenmesini, silinmesini veya değerlerinin değiştirilmesini engeller. Yani, bir nesneyi dondurarak (freeze), nesnenin durumunun değiştirilmesini engelleyebilirsiniz.

// Genel kullanım şu şekildedir:

// javascript
// Copy code
// const nesne = {
//   anahtar1: 'değer1',
//   anahtar2: 'değer2'
// };

// Object.freeze(nesne);
// Yukarıdaki örnekte, nesne adlı nesne Object.freeze() metodu ile donduruldu. Dondurulmuş bir nesnenin özelliklerini değiştirmeye çalıştığınızda, JavaScript sessizce hataya düşmez; sadece değişiklikler yapılmaz:

// javascript
// Copy code
// nesne.anahtar1 = 'yeniDeğer'; // Bu değişiklik etkisiz olacaktır
// console.log(nesne.anahtar1); // Çıktı: "değer1"

// Object.fromEntries


// Object.fromEntries() metodu, anahtar-değer çiftlerini içeren bir dizi veya başka bir iterable (gezilebilir) nesne alır ve bu çiftleri içeren yeni bir nesne oluşturur. Bu metot, Object.entries() metodu ile oluşturulmuş bir dizi veya başka bir iterable nesnesinden nesne oluşturmak için kullanışlıdır.

// Genel kullanım şu şekildedir:

// javascript
// Copy code
// const dizi = [['anahtar1', 'değer1'], ['anahtar2', 'değer2']];
// const nesne = Object.fromEntries(dizi);

// console.log(nesne);
// // Çıktı: { anahtar1: 'değer1', anahtar2: 'değer2' }

// Object.getOwnPropertyDescriptor

// Object.getOwnPropertyDescriptor() metodu, bir nesnenin belirli bir özelliğinin (property) tanımlayıcısını (descriptor) döndüren bir JavaScript metodudur. Özellikle bir nesnenin belirli bir özelliği hakkında bilgi almak istediğinizde, bu metodu kullanabilirsiniz.

// Metodun kullanımı şu şekildedir:

// javascript
// Copy code
// const nesne = {
//   anahtar: 'değer'
// };

// const tanimlayici = Object.getOwnPropertyDescriptor(nesne, 'anahtar');

// console.log(tanimlayici);
// // Çıktı: { value: 'değer', writable: true, enumerable: true, configurable: true }
// Yukarıdaki örnekte, nesne adlı nesnenin 'anahtar' özelliği için Object.getOwnPropertyDescriptor() metodu çağrıldı. Bu metodun döndürdüğü nesne, belirli özelliğin value (değer), writable (değiştirilebilirlik), enumerable (gezilebilirlik) ve configurable (konfigürasyon) gibi özelliklerini içerir.

// Bu metodun döndürdüğü tanımlayıcı nesnesi, belirli bir özelliğin davranışını kontrol etmek için kullanışlıdır. Örneğin, writable özelliği false olarak ayarlandığında, özellik değeri değiştirilemez ve bir hata fırlatılır.


// Object.getOwnPropertyNames

// Object.getOwnPropertyNames() metodu, bir nesnenin tüm özellik isimlerini içeren bir dizi döndüren bir JavaScript metodu. Bu metot, nesnenin sadece enumerable (gezilebilir) özelliklerini değil, aynı zamanda non-enumerable (gezilemeyen) özelliklerini de içerir.

// Genel kullanım şu şekildedir:

// javascript
// Copy code
// const nesne = {
//   anahtar1: 'değer1',
//   anahtar2: 'değer2'
// };

// const ozellikIsimleri = Object.getOwnPropertyNames(nesne);

// console.log(ozellikIsimleri);
// // Çıktı: [ 'anahtar1', 'anahtar2' ]

// Object.is

// Object.is() metodu, iki değeri karşılaştırır ve bu değerlerin aynı olup olmadığını kontrol eder. Bu metot, genellikle değerlerin aynı olup olmadığını kontrol etmek için kullanılan bir alternatiftir, özellikle JavaScript'teki karşılaştırma operatörleri (== ve ===) kullanıldığında beklenmeyen sonuçlar alabileceğiniz durumlar için.

// Object.is() metodu, şu şekilde kullanılır:

// javascript
// Copy code
// Object.is(değer1, değer2);
// Bu metodun dönüş değeri true veya false olacaktır. değer1 ve değer2 arasındaki karşılaştırma sonucuna göre true dönerse, değerler aynıdır; aksi takdirde false döner.

// Bu metodun özellikle, NaN (Not a Number) değerleri ve negatif sıfır gibi özel değerlerle çalışırken kullanışlı olduğu durumlar vardır. Örneğin:

// javascript
// Copy code
// Object.is(0, -0); // false
// Object.is(NaN, NaN); // true
// Yukarıdaki örnekte, Object.is() metodu -0 ve 0 değerlerini birbirinden ayırabilir, çünkü bu iki değer farklı semantik anlamlara sahiptir.

// Object.is() metodu, == veya === operatörlerinin davranışını daha doğru bir şekilde kontrol etmek istediğiniz durumlarda kullanışlıdır. Ancak, genel olarak normal karşılaştırmalar için === operatörü kullanmak yaygın olarak tercih edilir, çünkü bu operatör tür dönüşümlerini kontrol eder ve daha öngörülebilir sonuçlar verir.

// Object.isExtensible

// Object.isExtensible() metodu, bir nesnenin yeni özellikler ekleyip ekleyemeyeceğini kontrol eden bir JavaScript metodu. Bu metot, belirtilen nesnenin genişletilebilir (extensible) olup olmadığını kontrol eder. Genişletilebilir nesneler, üzerlerine yeni özellikler veya metodlar ekleyebileceğiniz nesnelerdir.

// Object.seal

// Object.seal() metodu, bir nesneyi "kapatır". Kapatılan bir nesne, üzerinde yeni özellikler eklenmesine izin vermez, mevcut özelliklerin silinmesine izin vermez ve varolan özelliklerin konfigürasyonunu (configurability) değiştirmeye izin vermez. Ancak, varolan özelliklerin değerlerini değiştirmeye izin verir.

// Kapatılan bir nesnenin özelliklerinin değeri değiştirilebilir, ancak özelliklerin kendisi değiştirilemez (non-configurable) hale gelir. Yani, kapatılan bir nesnenin özelliklerini değiştirmek mümkündür, ancak yeni özellikler eklenemez ve varolan özellikler silinemez.

// Metodun kullanımı şu şekildedir:

// javascript
// Copy code
// const nesne = { anahtar: 'değer' };

// console.log(Object.isSealed(nesne)); // false

// Object.seal(nesne); // Nesneyi kapatır

// nesne.anahtar = 'yeniDeğer'; // Geçerli, çünkü özellik değeri değiştirilebilir

// nesne.yeniAnahtar = 'yeniDeger'; // Hata fırlatır: TypeError: Cannot add property yeniAnahtar, object is not extensible

// delete nesne.anahtar; // Hata fırlatır: TypeError: Cannot delete property 'anahtar' of #<Object>

// console.log(Object.isSealed(nesne)); // true
// Yukarıdaki örnekte, Object.seal() metodu nesne adlı nesneyi kapatır. Ardından, nesne üzerinde varolan özelliklerin değerlerini değiştirebiliriz, ancak yeni özellikler ekleyemeziz ve varolan özellikleri silemeyiz. Bu şekilde nesnenin yapısı korunur, ancak değerler değiştirilebilir.

