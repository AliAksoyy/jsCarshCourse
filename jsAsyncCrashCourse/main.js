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

// function cllbck() {
//   document.body.getElementsByTagName("h1")[0].innerText = "Js Async";
//   console.log(object);
// }
// document.getElementsByTagName("h1")[0].addEventListener("click", cllbck);

// Promise

// promise                           your friends

// async js fetchTacos               so you start preparing soup in the meaintime

// promise return value               can get tacos or cannot get tacos

// promise is said to be fulfillded  can get tacos

// promise is said to be rejected    cannot get tacos

// success callback                  set up th table

// failure callback                  cook pasta

// promise eszamansız eylemlere ilişkilendirme yapar

//  yani promise bir söz vermedir taco'yu getirip getiremeyeceğine promise oluşturulduğunda söz değeri mutlaka bilinmez

// bu nedenle de fulfilled mi rejected mi olduğuna göre değişir

// Promise js' de bir objectir....
// pending : initial state, fulfilled : successfully,  rejected :failuere neden kullanılır async yapmak için

// Promise iki tane argüman fn alır bunlar resolve ve rejected'dir

// const promise = new Promise((resolve, reject) => {
// change status from "pending" to "fulfillde"
// resolve() burada parametre iletebiltiz
// change status from "pending" to "fulfillde"
//  reject() burada parametre iletebiltiz
// });

// promise.then() pending to fulfillde is executed
// promise.catch()  pending to rejected is executed

// let promise = new Promise((resolve,reject)=> {
//     resolve() rejects()

// })

// promise.then(onFulfillment)
// promise.catch(onRejected)

// Promise all

// const promise1 = Promise.resolve(3)
//  const promise2 = 42
// const promise3 = new Promise ((resolve,reject)=> {
//     setTimeout(resolve,100, foo)
// })

// Promise.all([promise1, promise2, promise3]).then((values)=> {console.log(values)}) expected Array  [3,42,"foo"]
// Promise.allSettled bir söz reddeilse bile tüm giriş vaatleri geri döner
// Promise.race hangisi hızlı ise o sonucu verir

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject("Hata!");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Bu kısım çalışmaz, çünkü promise3 hata verir.
  })
  .catch((error) => {
    console.error(error); // "Hata!" çıktısını verir.
  });

const promise11 = Promise.resolve(1);
const promise22 = Promise.resolve(2);
const promise33 = Promise.reject("Hata!");

Promise.allSettled([promise11, promise22, promise33]).then((results) => {
  console.log(results);
  /*
    [
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 2 },
      { status: 'rejected', reason: 'Hata!' }
    ]
    */
});

// Async Await

//  async işlevleri her zman bir söz verir

function ali22() {
  console.log("hello sync");
}

async function ali23() {
  return Promise.resolve("ali async return");
}

ali22();
ali23().then((res) => console.log(res));

async function greet12() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(resolve("hello await"), 1000);
  });
  let result = await promise; // wait until the promise resolves()
  console.log(result);
}

greet12();

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("AKSOY");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("AYSE");
    }, 1000);
  });
}

async function parallel() {
  await Promise.all([
    (async () => console.log(await resolveHello()))(),
    (async () => console.log(await resolveWorld()))(),
  ]);
}
parallel();

// Event Loop
// js runtime enviroment
// js Engine  memory Heap and Call Stack; değişkenleri ya da  fn 'leri bildirdiiğimizde memory Heap 'te bulunur
// kod çalıştığında fn çağrı yığınına gönderilir ve işlev geri döndğüğünden  yığından çıkarılır yığından son giren ilk çıkar;
// diğer kısımda browser'ın web Apis'dir Bulunan setTimeout xhr promise dom  gibi işlemler yapılır BUnlar js tarafından değilde browser tarafından yapılan uygulamalarıdır.

//  ve bunların callBack queue / task queue erişimleri vardır queue ilk grien ilk çıkar

//  son dördüncü bölüm ise eventLoop bölümüdür görevi callStack boş olup olmadığını

// senkron code

console.log("object");
console.log("object1");
console.log("object2");

// öncelikle globol execution context çağırılır ve calls stack ' e itilir önce object girdi ve çalıştı daha sonra yığında çıktı sonra ikincisi diye devvam eder

// async code

// ***

console.log("first");
setTimeout(() => {
  console.log("second");
}, 1000);
console.log("third");

// js ilk başta global execution context çalışır ve ilk  başta first yazdılır sonra devam ediyoruz ve setTimeout geldi bu js kodu değildeir ve aslında bir webApi'si devreye giriyor  web Api'sini iletiliyor bu arada arkada sayac başlar saymaya ve biz call Stack boşta şuand ve sıradn diğer console.log(da) yazılır ve bu arada setTimeout işlevi bitti ama Web Api'ler doğrudan call Stack'e iletemiyor  ve callBack Queue sıraya giriyor ve buraya ilk giren ilk çıkar mantığı ile hareket eder ve burada callStack boş ise event Loop sayaesinde callBack Queue da ki işlev callStack'e iletilir

// async Promise Code

// **
console.log("first");
const promise222 = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(promise222);
promise.then((value) => {
  console.log("Promise value is ", value);
});
console.log("second");

// js global execition çalıştı ve ilk konsolu yazdırdı Sonra fetch işlevini sıradan alır fetch js özelliği değil web Apisi sayesinde sağlalan bir özellik;  ve direkt web Apisine devrediliyor bu arada fetch , javascript memory Heap'inde bir promise nesnesi oluşturuyor ; bu arada call Stack boş ve 3ms 'da promise.then(cb) callStack girdi ve bu cb memeory heap 'te ki onFulFillMent : [cb] iletildi; daha sonra "second console.log yazdı" tabi bu arada web Api sinde fetch(url daha bekliyor) ve bitti ve fetch(url)'den dönen değer oluşturulan promise objesinin values : ....  söz değeri olarak ileitildi daha sonra bu micro task kuyruğuna event Loop sayaseidnde aktarılıyor ve çalılıyor ve yığımda çıkarılıyor garabage kolektör topluyor

setTimeout(() => {
  console.log("setTimeout");
}, 0);
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
promise.then((res) => console.log(res));

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// let a33 = 0;
// while (a < 100) {
//   console.log(a);
//   a++;
// }

let a34 = 0;

do {
  console.log(a34);
  a34++;
} while (a34 < 100);
console.log("second");

// burda diğerleri bittikten sonra microTask cb +value var macroTask'da setTimeoUt cb fn var ve js microTask kuyruğuna öncelik verir yani event Loop önce microTask quueu sonra da macrotask Queu çağırı
