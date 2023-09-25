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

// CallBacks


