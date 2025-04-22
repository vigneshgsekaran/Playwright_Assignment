let s = "hello world"
s= s.split(" ")
let i = s.length-1
let len = s[i].length
console.log(`length of the last word is ${len} and the corresponding word is ${s[i]}`)

let v = " fly me to the moon "
v = v.trim()
v = v.split(" ")
let j = v.length-1
let len1 = v[j].length
console.log(`length of the last word is ${len1} and the corresponding word is ${v[j]}`);

let fname = "listen"
let lname = "silent"
let sfname = fname.split("")
fname = sfname.sort().join()
let slname = lname.split("")
lname = slname.sort().join()
if(lname == fname){
    console.log("the given two input is Anagram")
}
else{
    console.log("the given two input is not Anagram")
   }


   let fname1 = "hello"
   let lname1 = "silent"
   let sfname1 = fname1.split("")
   fname1 = sfname1.sort().join()
   let slname1 = lname1.split("")
   lname1 = slname1.sort().join()
   if(lname1 == fname1){
       console.log("the given two input is Anagram")
   }
   else{
    console.log("the given two input is not Anagram")
   }




