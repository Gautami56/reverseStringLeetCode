const reverseWords = (str) => {
let arrrayString = str.split(/([0-9]+)/)
let str2 = []
let abc = arrrayString.map((element)=>{
let str = ""
if(isNaN(element)){
for(var i = element.length-1; i>=0; i--){
str = str + element[i]
}
str2.push(str)
}
else
    str2.push(element)
})
return str2.join('')
}
console.log(reverseWords('abc4rgyh9rrew8'))

console.log(reverseWords('asts77hg8jsgtred5lyaass'))

console.log(reverseWords("asd"));

console.log(reverseWords('123'))

console.log(reverseWords("asd1f"))
