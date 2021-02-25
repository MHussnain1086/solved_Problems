// conditional
function maximum(){
    var get = parseInt(document.getElementById(`get`).value)
    var get2 = prompt(`Enter the 2nd Number`)
    if(get > get2){
        document.getElementById(`r1`).innerHTML = `Number ${get} is Greater than Number ${get2}`
    }else if(get < get2){
        document.getElementById(`r1`).innerHTML = `Number ${get2} is Greater than Number ${get}`
    }else if(get == get2){
        document.getElementById(`r1`).innerHTML = `Number ${get} is Equal Number ${get2}`
    }
}
function maximization (){
    var get = parseInt(document.getElementById(`get2`).value)
    var get2 =parseInt(prompt(`Enter the 2nd Number`))
    var get3 = parseInt(prompt(`Entet the 3rd Number `))
    if(get > get2 && get > get3){
        document.getElementById(`r2`).innerHTML = `Number ${get} is Greater than Number ${get2} and ${get3}`
    }else if(get < get2 && get2 > get3){
        document.getElementById(`r2`).innerHTML = `Number ${get2} is Greater than Number ${get} and ${get3}`
    }else if(get3 > get2 && get3 > get){
        document.getElementById(`r2`).innerHTML = `Number ${get3} is Greater than Number ${get2} and ${get}`     
    }else if(get === get2 === get3){
        document.getElementById(`r2`).innerHTML = `Number ${get},${get2} and ${get} are Equal Each Other`
    }
}
function checkSign(){
    var get = parseInt(document.getElementById(`get3`).value)
    if(get === 0){
        document.getElementById(`r3`).innerHTML = `Your Number is Zero`
    console.log(ge);
    }else if(get < 0){
        document.getElementById(`r3`).innerHTML = `Your Number ${get} has Negative sign`
        console.log(get);
    }else if (get > 0 ){
        document.getElementById(`r3`).innerHTML = `Your Number ${get} has Positive sign`
    }
}
function division(){
    var get = parseInt(document.getElementById(`get4`).value)
    if(get % 5 === 0 && get % 11 === 0){
        document.getElementById(`r4`).innerHTML = `Your Number ${get} is divisible by 5 and 11`
    }else if(get % 5 ===0){
        document.getElementById(`r4`).innerHTML = `Your Number ${get} is divisible by only 5`
    }else if(get % 11 ===0){
        document.getElementById(`r4`).innerHTML = `Your Number ${get} is divisible by only 11`
    }else{
        document.getElementById(`r4`).innerHTML = `Your Number ${get} is not divisible by 5 and 11`
    }
}
function check(){
    var get = document.getElementById(`get5`).value
    if(get % 2 === 0){
        document.getElementById(`r5`).innerHTML = `Your Number ${get} is Even Number`
    }else{
        document.getElementById(`r5`).innerHTML = `Your Number ${get} is Odd Number`
    }
}
function leapyear(){
    var get = document.getElementById(`get6`).value
    if(get % 4 === 0){
        document.getElementById(`r6`).innerHTML = `${get} is a Leap Year`
    }else{
        document.getElementById(`r6`).innerHTML = `${get} is not a Leap Year`
    }
}
function aplpha(){
    var get = document.getElementById(`get7`).value
    var alphabets =/^[A-Za-z]+$/
    var numbers = /^[0-9]+$/
    var arr = /^[0-9A-Za-z]+$/
    if (get.match(alphabets)){
        document.getElementById(`r7`).innerHTML = `Your String ${get} Contain Only Alphabets`
    }else if(get.match(numbers)){
        document.getElementById(`r7`).innerHTML = `Your String ${get}  not Contain  Alphabets but Numbers`
    }else if (get.match(arr)){
        document.getElementById(`r7`).innerHTML = `Your String ${get} Contain Alphabets and Numbers`
    }else{
        document.getElementById(`r7`).innerHTML = `Your String ${get} include Special Characters`
    }
}
function vowalC(){
    var vowal = /^[Aa,Ee,Ii,Oo,Uu,Yy]+$/
    var numbers = /^[0-9]+$/
    var get = document.getElementById(`get8`).value
    if(get.length >= 2){
        document.getElementById(`r8`).innerHTML = `INPUT MUST BE ONE LETTER`}else if(get.match(numbers)){
                document.getElementById(`r8`).innerHTML = `INPUT MUST BE ONE ALPHABET`
        }
    else if(get.match(vowal)){
        document.getElementById(`r8`).innerHTML = `Your Alphabet ${get} is Vowal letters`
    }else if(get != get.match(vowal)){
        document.getElementById(`r8`).innerHTML = `Your Alphabet ${get} is not Vowal letters`
    }else{
        document.getElementById(`r8`).innerHTML = `Please Enter Single Alpabet`
    }
}
function check2(){
    var get = document.getElementById(`get9`).value
    var alphabets =/^[A-Za-z]+$/
    var numbers = /^[0-9]+$/
    var arr = /^[0-9A-Za-z]+$/
    if (get.match(alphabets)){
        document.getElementById(`r9`).innerHTML = `Your INPUT ${get} Contain Only Alphabets`
    }else if(get.match(numbers)){
        document.getElementById(`r9`).innerHTML = `Your INPUT ${get} Contain only Numbers`
    }else if (get.match(arr)){
        document.getElementById(`r9`).innerHTML = `Your INPUT ${get} Contain Alphabets and Numbers`
    }else{
        document.getElementById(`r9`).innerHTML = `Your INPUT ${get} include Special Characters`
    }
}
// String Handling
function lenght(){
    var get = document.getElementById(`get10`).value
    var lent = get.length;
    document.getElementById(`r10`).innerHTML=`Length of Given String is ${lent}`
}
function doule(){
    var get = document.getElementById(`get11`).value
    var geet = get.repeat(2);
    document.getElementById(`r11`).innerHTML = `Orignal String [${get}] and Copied String [${geet}]`
}
function conx(){
    var get = document.getElementById(`get12`).value
    var get2 = prompt(`Please Enter 2nd String`)
    var conxx = get + get2
    document.getElementById(`r12`).innerHTML =`By Concatenation We have ${conxx}`
}
function compa(){
    var get = document.getElementById(`get13`).value
    var get2 = prompt(`Please Enter 2nd String`)
    if(get.length == get2.length){
        document.getElementById(`r13`).innerHTML = `Given Two String are Equal in Length and Type`
    }else if (get == "" || get2 == ""){
        document.getElementById(`r13`).innerHTML = `PLease Enter Both Strings`
    }else if (get.length > get2.length){
        document.getElementById(`r13`).innerHTML = `1st String is Greater in Number of Indexes`  
    }else if(get.length < get2.length){
        document.getElementById(`r13`).innerHTML = `2nd String is Greater in Number of Indexes`
    }else if (get == "" || get2 == ""){
        document.getElementById(`r13`).innerHTML = `PLease Enter Both Strings`
    }
}
function low(){
    var get = document.getElementById(`get14`).value
    var toUp = get.toUpperCase()
    document.getElementById(`r14`).innerHTML = `By Changing ${toUp}`
}
function upper(){
    var get = document.getElementById(`get15`).value
    var toLow = get.toLowerCase()
    document.getElementById(`r15`).innerHTML = `By Changing ${toLow}`
}
function toggle(){
    var  letters = document.getElementById(`get16`).value
    var numbers = /^[0-9]+$/
    if(letters.match(numbers)){
        document.getElementById(`r16`).innerHTML = `Please Enter Alphabetic Letters`
    }else{
    var goet = letters.slice(0,1)
    var got = goet.toUpperCase()
    var goet1 = letters.slice(1,2)
    var got1 = goet1.toLowerCase()
    var goet2 = letters.slice(2,3)
    var got2 = goet2.toUpperCase()
    var goet3 = letters.slice(3,4)
    var got3 = goet3.toLowerCase()
    var goet4 = letters.slice(4,5)
    var got4 = goet4.toUpperCase()
    var goet5 = letters.slice(5,6)
    var got5 = goet5.toLowerCase()
    var goet6 = letters.slice(6,7)
    var got6 = goet6.toUpperCase()
    var goet7 = letters.slice(7,8)
    var got7 = goet7.toLowerCase()
    var goet8 = letters.slice(8,9)
    var got8 = goet8.toUpperCase()
    var goet9 = letters.slice(9,10)
    var got9 = goet9.toLowerCase()
    var goet10 = letters.slice(10,11)
    var got10 = goet10.toUpperCase()
    var goet11 = letters.slice(11,12)
    var got11 = goet11.toLowerCase()
    var goet12 = letters.slice(12,13)
    var got12 = goet12.toUpperCase()
    var goet13 = letters.slice(13,14)
    var got13 = goet13.toLowerCase()
    var goet14 = letters.slice(14,15)
    var got14 = goet14.toUpperCase()
    var goet15 = letters.slice(15,16)
    var got15 = goet15.toLowerCase()
    var goet16 = letters.slice(16,17)
    var got16 = goet16.toUpperCase()
    var goet17 = letters.slice(17,18)
    var got17 = goet17.toLowerCase()
    var goet18 = letters.slice(18,19)
    var got18 = goet18.toUpperCase()
    var goet19 = letters.slice(19,20)
    var got19 = goet19.toLowerCase()
    var goet20 = letters.slice(20,21)
    var got20 = goet20.toUpperCase()
    var goet21 = letters.slice(21,22)
    var got21 = goet21.toLowerCase()
    
    

    document.getElementById(`r16`).innerHTML =`By Changing  ${got + got1 +got2+ got3+ got4+ got5+ got6+ got7+ got8+ got9+ got10 +got11 +got12 +got13+got14+got15+got16+got17+got18+got19+got20+got21}`

}
} 
function findChar(){
var get = document.getElementById(`get17`).value
var numbers = /^[0-9]+$/
var Alpha = /^[A-Za-z]+$/
var char =0
var digits = 0
var sp = 0
for(let i = 0 ; i < get.length; i++){
    var got = get.slice(i, i+1)
    if(got.match(numbers)){
        digits+=1

    }else if (got.match(Alpha)){
      char+=1
    }else{
        sp+=1
    }
}
document.getElementById(`r17`).innerHTML = `[Alphabets are ${char}], [Digits are ${digits}],and [Special Characters are ${sp}]`
}
function vC(){
    var get = document.getElementById(`get18`).value
    var vowals = /^[Aa,Ii,Oo,Uu,Ee,Yy]+$/
    var numbers = /^[0-9,@,!,<,>,?,/,|,+,=,*,&,^,%,$,#,`,~]+$/
    var vo =0
    var cont =0
    for(let i = 0; i<get.length;i++){
     let got = get.slice(i,i+1)
    if(got.match(vowals)){
        vo+=1
    }else{
        cont+=1
    }
}
document.getElementById(`r18`).innerHTML =`[Number of Consonants is ${cont}]and[Number of Vowals is ${vo}]`
if(get.match(numbers)){
    document.getElementById(`r18`).innerHTML =`Please Enter Only Alphabets`
    // console.log(get);
}
}
function conte(){
    var get = document.getElementById(`get19`).value
    var vumbers =  /^[0-9,@,!,<,>,?,/,|,+,=,*,&,^,%,$,#,`,~]+$/
    if(get.match(vumbers)){
        document.getElementById(`r19`).innerHTML = `Please Enter Words Only`
    }else{
    var got = get.split(" ")
    var geet =  got.length 
    //   console.log(geet);
    document.getElementById(`r19`).innerHTML = `Number of Words in Given String is ${geet}`
}
}
function reve(){
    var get = document.getElementById(`get20`).value
    var got = get.split("")
    var geet = got.reverse()
    document.getElementById(`r20`).innerHTML = `Reverse of Given String [${geet}]`
}
function plain(){
    var get = document.getElementById(`get21`).value
    var geeet = get.replace(/ /g,"")
    var g00t = geeet.split("")
    var guut = JSON.stringify(g00t)
    // console.log(guut);
    var geet = g00t.reverse()
    var gut = JSON.stringify(geet)
    // console.log(gut);
    if(guut === gut){
        document.getElementById(`r21`).innerHTML = `YEAH! Your Word is Palindrome`
    }else {
        document.getElementById(`r21`).innerHTML = `SORRY! Your Given Word is NOT Palindrome` 
    }
}
function ok(){
    var get = document.getElementById(`get22`).value
    var goty = get.split(" ")
    var geet = goty.reverse()
    // console.log(geet);
    document.getElementById(`r22`).innerHTML = `By reversing Order of String We Got {${geet}}`
}
function occu(){
    var get = document.getElementById(`get23`).value
    var got = get.replace(/ /g,"")
    var get2 = prompt(`Enter Character To Check its First Occurrence in given String`)
    var ch = got.indexOf(get2)
    // console.log(ch);
    document.getElementById(`r23`).innerHTML = `First Occurrence of Character [${get2}] is at Index of ${ch} in Given String`
}
function ucco(){
    var get = document.getElementById(`get24`).value
    var got = get.replace(/ /g,"")
    var get2 = prompt(`Enter Character To Check its Last Occurrence in given String`)
    var ch = got.lastIndexOf(get2)
    // console.log(ch);
    document.getElementById(`r24`).innerHTML = `Last Occurrence of Character [${get2}] is at Index of ${ch} in Given String`
}
// Array Handling
function print(){
    var get = document.getElementById(`get25`).value
    var get2 = prompt(`Enter 2nd Element of Array`)
    var get3 = prompt(`Enter 3nd Element of Array`)
    var get4 = prompt(`Enter 4th Element of Array`)
    var get5 = prompt(`Enter 5th Element of Array`)
    var get6 = prompt(`Enter 6th Element of Array`)

    var Arry = [get,get2,get3,get4,get5,get6,]
    console.log(Arry);
    document.getElementById(`r25`).innerHTML=`Your Given Array is [${Arry}]`
}
function print2(){
    var get = parseInt(document.getElementById(`get26`).value)
    var get2 = parseInt(prompt(`Enter 2nd Element of Array`))
    var get3 = parseInt(prompt(`Enter 3nd Element of Array`))
    var get4 = parseInt(prompt(`Enter 4th Element of Array`))
    var get5 = parseInt(prompt(`Enter 5th Element of Array`))
    var get6 = parseInt(prompt(`Enter 6th Element of Array`))

    var arry = [get,get2,get3,get4,get5,get6]
    console.log(arry);
    if (get < 0){
       var got = get
    //    console.log(got);
    }else{
        got = ``
    }
    if(get2  < 0){
        var got2 = get2
    }else{
        got2 = ``
    }if(get3 < 0){
        var got3 = get3
    }else{
        got3 = ``
    }if(get4  < 0){
        var got4 = get4
    }else{
        got4 = ``
    }if(get5  < 0){
        var got5 = get5
    }else{
        got5 = ``
    }if(get6  < 0){
        var got6 = get6
    }else{
        got6 = ``
    }
    console.log(got,got2,got3,got4,got5,got6);

    document.getElementById(`r26`).innerHTML = `Negative Elements are [${[got , got2 , got3 , got4 , got5, got6]}]`
}
function sum(){
    var get = parseInt(document.getElementById(`get27`).value)
    var get2 = parseInt(prompt(`Enter 2nd Element of Array`))
    var get3 = parseInt(prompt(`Enter 3nd Element of Array`))
    var get4 = parseInt(prompt(`Enter 4th Element of Array`))
    var get5 = parseInt(prompt(`Enter 5th Element of Array`))
    var get6 = parseInt(prompt(`Enter 6th Element of Array`))

    var sum = [get + get2 + get3+ get4+ get5+ get6]
    // console.log(sum);
    document.getElementById(`r27`).innerHTML = `Sum of Elements in Array is [${sum}]`

}
function mm(){
 var max = ``
 var min =``
    var get = parseInt(document.getElementById(`get28`).value)
    var get2 = parseInt(prompt(`Enter 2nd Element of Array`))
    var get3 = parseInt(prompt(`Enter 3nd Element of Array`))
    var get4 = parseInt(prompt(`Enter 4th Element of Array`))
    var get5 = parseInt(prompt(`Enter 5th Element of Array`))
    var get6 = parseInt(prompt(`Enter 6th Element of Array`))
    
    if (get > get2 && get > get3 && get > get4 && get > get5 && get > get6){
        console.log(get);
      max = get
    }else if(get2 > get3 && get2 > get && get2 > get4 && get2 > get5 && get2 > get6){
        console.log(get2);
         max = get2
    }else if(get3 > get2 && get3 > get && get3 > get4 && get3 > get5 && get3 > get6){
        console.log(get3);
         max = get3
    }else if(get4 > get2 && get4 > get3 && get4 > get && get4 > get5 && get4 > get6){
        console.log(get4);
         max = get4
    }else if(get5 > get2 && get5 > get3 && get5 > get4 && get5 > get && get5 > get6){
        console.log(get5);
         max = get5
    }else if(get6 > get2 && get6> get3 && get6 > get4 && get6 > get5 && get6 > get){
        console.log(get6);
         max = get6
    }
    // min
    if (get < get2 && get < get3 && get < get4 && get < get5 && get < get6){
        console.log(get);
        min = get
       }else if(get2 < get3 && get2 < get && get2 < get4 && get2 < get5 && get2 < get6){
           console.log(get2);
           min = get2
       }else if(get3 < get2 && get3 < get && get3 < get4 && get3 < get5 && get3 < get6){
           console.log(get3);
           min = get3
       }else if(get4 < get2 && get4 < get3 && get4 < get && get4 < get5 && get4 < get6){
           console.log(get4);
           min = get4
       }else if(get5 < get2 && get5 < get3 && get5 < get4 && get5 < get && get5 < get6){
           console.log(get5);
           min = get5
       }else if(get6 < get2 && get6< get3 && get6 < get4 && get6 < get5 && get6 < get){
           console.log(get6);
           min = get6
       }

       document.getElementById(`r28`).innerHTML = `Maximum Element in Given Array is ${max} and Minimum Element in the Array is ${min}`
}
function larger(){
    var max =``
    var alpha = /^[A-Za-z]+$/
    var numbers = /^[0-9]+$/
    var special = /^[@,!,<,>,?,/,|,+,=,*,&,^,%,$,#,`,~]+$/
    var get =document.getElementById(`get29`).value
    var get2 = prompt(`Please Enter 2nd Element of Array`)
    var get3 = prompt(`Please Enter 2nd Element of Array`)
    var get4 = prompt(`Please Enter 2nd Element of Array`)
    if(get.match(alpha) && get2.match(alpha) && get3.match(alpha) &&get4.match(alpha) || (get.match(special) && get2.match(special) && get3.match(special) && get4.match(special))){
        document.getElementById(`r29`).innerHTML = `Please Enter Only Numbers`
    }
    if (get > get2 && get > get3 && get > get4 ){
        console.log(get);
      max = get
    }else if(get2 > get3 && get2 > get && get2 > get4 ){
        console.log(get2);
         max = get2
    }else if(get3 > get2 && get3 > get && get3 > get4 ){
        console.log(get3);
         max = get3
    }else if(get4 > get2 && get4 > get3 && get4 > get ){
        console.log(get4);
         max = get4
    }
    document.getElementById(`r29`).innerHTML = `Largest Value in the Given Array is [${max}]`
}
function eo(){
    var get = parseInt(document.getElementById(`get30`).value)
    var even = 0
    var odd = 0
    if(get % 2 === 0){
        even+=1
    }else {
        odd+=1
    }
    for(let i = 2; i < 7 ; i++){
        get2 = parseInt(prompt(`Please Enter ${i} Element of Array `))
        if(get2 % 2 === 0 ){
            even+=1
        }else{
            odd+=1
        }
    }
    console.log(even);
    console.log(odd);
    document.getElementById(`r30`).innerHTML = `Count of Even Numbers in Given Array is [${even}] and Count of Odd Numbers in Given Array is [${odd}]`
}
function neg(){
    var get = parseInt(document.getElementById(`get31`).value)
    var Positive = 0
    var Negative = 0
    if(get < 0){
        Negative+=1
    }else {
        Positive+=1
    }
    for(let i = 2; i < 7 ; i++){
        get2 = parseInt(prompt(`Please Enter ${i} Element of Array `))
        if(get2 < 0 ){
            Negative+=1
        }else{
            Positive+=1
        }
    }
    console.log(Negative);
    console.log(Positive);
    document.getElementById(`r31`).innerHTML = `Count of Negative Elements in Given Array is [${Negative}] and Count of Positive Elements in Given Array is [${Positive}]`
}
function copy(){
    var get = document.getElementById(`get32`).value
    var get2 = prompt(`Enter 2nd Element of Array`)
    var get3 = prompt(`Enter 3nd Element of Array`)
    var get4 = prompt(`Enter 4th Element of Array`)
    var get5 = prompt(`Enter 5th Element of Array`)
    var get6 = prompt(`Enter 6th Element of Array`)

    var arry = [get,get2,get3,get4,get5,get6]
    document.getElementById(`r32`).innerHTML = `Given Array Is [${arry}]
    and By Copying Array is [${arry}]`
    
}
// function
var arryn =[];
function insert(){
    var get = document.getElementById(`get33`).value
    var get2 = prompt(`Enter 2nd Element of Array`)
    var get3 = prompt(`Enter 3nd Element of Array`)
    var get4 = prompt(`Enter 4th Element of Array`)
    var get5 = prompt(`Enter 5th Element of Array`)
    var get6 = prompt(`Enter 6th Element of Array`)

   arryn = [get,get2,get3,get4,get5,get6]
    document.getElementById(`r33`).innerHTML = `Given Array [${arryn}]`
} 
function insert2(){
    var geet = document.getElementById(`geet33`).value
        arryn.push(geet)
       document.getElementById(`re33`).innerHTML = `By Inserting in Given Array [${arryn}]`
}
// function End
//  function
function de(){
    var get = document.getElementById(`get34`).value
    var get2 = prompt(`Enter 2nd Element of Array`)
    var get3 = prompt(`Enter 3nd Element of Array`)
    var get4 = prompt(`Enter 4th Element of Array`)
    var get5 = prompt(`Enter 5th Element of Array`)
    var get6 = prompt(`Enter 6th Element of Array`)

    arryn = [get,get2,get3,get4,get5,get6]
    document.getElementById(`r34`).innerHTML = `Given Array [${arryn}]` 
}
function del(){
    var geet = document.getElementById(`geet34`).value
    arryn.splice(geet -1,1)
    document.getElementById(`re34`).innerHTML = `By Deleting the Element from an Array [${arryn}]`

}
// function  End

// Math Methods

function round(){
    var  get = parseFloat(document.getElementById(`get35`).value)
    var geet = parseInt(get)
    var got = geet+.50
    var answer = 0
    if(get >= got){
      answer = geet +1
      console.log(`ceil`,answer);
    }else if(get < got){
        answer = geet
        console.log(`floor`,answer);
    }
    document.getElementById(`r35`).innerHTML =`By Rounding the Given Number We Got ${answer}`
}
function ceill(){
    var get = parseFloat(document.getElementById(`get36`).value)
    var got = parseInt(get)
    var geet= got +1

    document.getElementById(`r36`).innerHTML =`By Ceiling the Given Number We Got ${geet}`

}
function floorr(){
    var get = parseFloat(document.getElementById(`get37`).value)
    var got = parseInt(get)

    document.getElementById(`r37`).innerHTML =`By Flooring the Given Number We Got ${got}` 
}

// LOOPS
function natural(){
    var get = parseInt(document.getElementById(`get38`).value)
for(let i =0; i<=get ; i++){
 console.log(i);
 document.getElementById(`r38`).innerHTML = `Please Go To Console`
}
}
function unnatural(){
    var get =parseInt(document.getElementById(`get39`).value)
    for( get; get>= 1; get--){
        if (get === 0){
            get = 1
        }
        console.log(get);
        document.getElementById(`r39`).innerHTML = `Please Go To Console`
    }
}
function alphaebt(){
    var get = parseInt(document.getElementById(`get40`).value)
    var arry= [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]
    for(let i =0 ; i<= get; i++){
        console.log(arry[i]);
    }
    document.getElementById(`r40`).innerHTML =`[${arry}] and Also Please go To Console`
    
}
function fixeven(){
    var get =parseInt(document.getElementById(`get41`).value)
    for(let i=1 ; i<=get ; i++){
         if (i % 2 === 0){
             console.log(i);
             document.getElementById(`r41`).innerHTML =`Please Go to Console`
         }
    }
}
function fixodd(){
    var get =parseInt(document.getElementById(`get42`).value)
    for(let i=1 ; i<=get ; i++){
         if (i % 2 != 0){
             console.log(i);
             document.getElementById(`r41`).innerHTML =`Please Go to Console`
         }
    }
}















