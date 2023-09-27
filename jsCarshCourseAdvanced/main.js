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