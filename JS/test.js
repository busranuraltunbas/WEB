
//preincreamant predecsremant??
//postincremanent postdecsremant??
/*console.log("3" - 2 + 1);

console.log(true + false);

console.log(8 / "4");

console.log("4px" - 2);

console.log("  -9  " + 2);

console.log("  -9  " - 2);

console.log(null + 2);

//null javascript bugı. Objecttir. Değiştirilmemiştir.???

console.log(undefined + 2);*/



/*var dogumyili = prompt ( "Doğum yılını giriniz:" ); 
var yas = Number ( 2021 - dogumyili ); 
if ( yas > 7 && yas <= 10 ){     
    console . log ( "İlk okula gidiyorsun..." ); 
} else if ( yas > 10 && 15 > yas ){
         console . log ( "Ortaokula gidiyorsun..." ); 
} else if ( yas >= 15 && 18 > yas ){     
    console . log ( "Lise'ye gidiyorsun..." ); 
} else {     
    console . log ( "Üniversiteye gidiyorsun..." ); 
}*/

let f = [];
f[0] = "Ahmet";
f[1] = "Mehmet";

let isim = ["Ahmet", "Mehmet"];
isim.push("Serkan");
console.log(isim);


isim.unshift("Serkan");
console.log(isim);

let nn = ["Ali", "Veli", "Ayşe","Ahmet"];
nn.splice(0,2);
console.log("splice", nn);

nn.splice(1,1, "Hakan", "Elif");
console.log("splice", nn);

let arr = [1,2,5];
arr.splice(-1, 0, 3);
console.log( arr);

let str = "test";
let arrstr = ["t", "e", "s", "t"];

console.log(arrstr.slice(1,3));

console.log(str.slice(1,3));

//let nm = [12, 16, 18, 20];
//nm.pop();
//console.log(nm);
//nm.shift();
//console.log(nm);

//delete nm[2];
//console.log(nm);
//console.log(nm.length);

let nm = [12, 16, 18, 20];
let is = ["Paris", "İstanbul"];

let _c = nm.concat(is);
console.log(_c);

let num = [3, 8, 4, 1, 7, 9];
let _ss = num.sort();
console.log(_ss);

let alf = ["s", "b", "i"];
let _as = alf.sort();
console.log(_as);


let rnum = [3, 8, 4, 1, 7, 9];
let _rnum = rnum.reverse();
console.log(_rnum);

let iss = ["Paris", "İstanbul", "Viyana"];
let _search = iss.indexOf("Viyana");
console.log(_search);

//if(iss.indexOf("Viyan") == -1){

//}

let nmm = [1, 2, false];
console.log(nmm.includes(0));


let string_sayi = [1,2,3,"bir"];
let aaa = string_sayi.toString();

let j = [1,2,3,4];
let nnnn = j.join("-");
console.log(nnnn);

let arr_isim = ["Ali","Ahmet","Ayşe"];

arr_isim.forEach(item => console.log(item));

let userss = [
    {id:1, name: "Ali"},
    {id:1, name: "Aliii"},
    {id:2, name: "Ahmet"},
    {id:3, name: "Mehmet"},
]

let res_find = userss.find(e=> e.id ==1);
console.log(res_find);

//
let sayii = [5,8,3,1];
let ssss = sayii.some(x=>x >3);
console.log(ssss);
//let inn = sayii.includes(5);
//console.log(inn);

let ev = sayii.every(x=>x >3);
//console.log(ev);

let kkk =  userss.filter(e => e.id ==1);
console.log(kkk);

'ab';
'a'
'abcd';
let strr = 'abcdefg';

const newStr = (str) => strr.length < 2 ? strr : strr.slice(0,2) + strr.slice(-2);

function func( strr){

    return (strr.length < 2 ? strr : strr.slice(0,2) + strr.slice(-2));
}

console.log(func(strr));



const half = (strr)=> strr.length<=0 ? "hata" : strr.slice(0, strr.length/2);

console.log(half(strr));

const concat = (str1, str2) => str1.slice(1) + str2.slice(1);



//////////////////////////////////////////
const closeN = (num1, num2) =>  (100 - num1) < (100 - num2) ? "2.sayi yakındır" : "1.sayi yakindir";

let num1 = 10;
let num2 = 20;

/*function func1(num1, num2) {

    return (100 - num1) < (100 - num2) ? "1.sayi yakındır" : "2.sayi yakindir";
}*/

//console.log(func1(num1, num2));
const near  = (num1, num2) =>  (100 - num1) < (100 - num2) ? num1 : num2;
console.log(near(num1, num2));

////////////////////////////////////////////////////

//chars('alooo', 'o');???

const charsCount = (strr, char) => strr.split('').filter(x=> x === char).length;
const resChar = (strr, char) => charsCount(strr, char) >=2 && charsCount(strr, char) <=4;

/////////////////////////////////////////////////
const yenidizi = [1,2,3,4,5,6,7,8]


const count = (yenidizi) => yenidizi.filter(x=> x % 2 === 0).length;
console.log(count(yenidizi));
////////////////////////////////////////////////////
let uzunlukk = ["mustafa", "Ahmet"].map(item => item.length);
console.log(uzunlukk);

let splitt = "Mustafa, Ahmet";
let aabb = splitt.split(',');
console.log(aabb);


let aaarr = [1, 2, 3, 4, 5];

//let bbbb = aaarr.reduce.apply((sum, current) => sum + current, 0);
//console.log(bbbb);

////////önemliiiiiiiiiiiiiii 
//split
let tessstt = [1, 2, 3];
console.log(...tessstt, 4);

//// res: geriye kalan 
// fonksiyon sonuna eklenir üç nokta
function showName(first, last, ...titles){
    console.log(first + last);

    console.log(titles[0]);
    console.log(titles[1]);
}

showName("Karim", "Benzama", "Luka", "Modric");

//////////////?

/*const orders = []
orders.filter(x=>x.orderId == '234' &&  !x.delivered)

orders.forEach(x=> {
    x.totals = 0;
    x.items.forEach(a=>{
        x.totals += a.price
    })

})*/


let a = {}
let b = new Object();
let c = 1;
a.model = "Volvo";
a.age = 2;

let pers = {
    name : "isim",
    age : 20,
    count : function(){
        return this.age;
    }
}

pers.name;



