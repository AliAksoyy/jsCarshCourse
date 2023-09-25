console.log("object");

// topixs to cover
// Timeouts and Intervals, Callbacks, Promises, async await, event Lopp

//  js normalde single thread bir dildir senkron'dur
// js normal bir zamanda yalnızca bir satır çalıştırarak yukarıdan aşağıya doğru yürütülür.Diğer kodlar öncekinin sonucu beklemek zorundadır

// js synchronous , blocking, single-threaded language

// aslında burada devreye yardımcı elemanlar giriyor yani web api'leri js'de böyle ihtiyacı gideremediğimiz için js'nin olmayan kod parçalarını çalıştırıyoruz

// ana kodumuzu durdurmadan eş zamansız olrak arkada kodların yürütülmesini askenron kodlar sayesinde sağlarız

// TimeOut and Intervals bunlar js'de özellikleri değildir tarayıcvalrın özelliğidir

const handleTimeOut = (a) => {
  console.log("timeOut" + " " + a);
};

let a = setTimeout(handleTimeOut, 2000, "ali");
// clearTimeout(a);

function ali() {
  console.log("ali");
}

let beyda = setInterval(ali, 2000);
console.log(beyda);
clearInterval(beyda);

setTimeout(() => {
  console.log("first");
  setTimeout(() => {
    console.log("second");
  }, 1500);
}, 100);

// CallBacks herhangi bir fn diğer fn argüman olarak iletililirse yani diğer işlevlere argüman olrak aktrılan işlevlerdir

// in js , functions are first class objects

function greet(name) {
  console.log("Hello " + name);
}

const greetAli = (fn) => {
  // aslında bu HOF ve bir fn argüman olarak kabul eden veya bir işlev döndürene de HOF denir
  const name = "ali";
  fn(name); // callback
};

greetAli(greet);

//  callback neden ihtiyac duyarız
// 1 synchronous callBacks hemen yürütülen bir callback sync geri arama denir yukarı da ki örnek ya da aşağıda ki örnek

let numbers = [1, 2, 3, 4, 5];

numbers.map((item) => item * 2);
console.log(numbers.sort((a, b) => b - a));

// 2 async callback

function beyda1() {
  console.log("object");
}
setTimeout(beyda1, 2000);

function cllbck() {
  document.body.getElementsByTagName("h1")[0].innerText = "Js Async";
  console.log(object);
}
document.body.getElementsByTagName("h1")[0].addEventListener("click", cllbck);
