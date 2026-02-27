l=[7,8,4,5,3]
let s=l[0]
for(let i=0;i<l.length;i++){
    if(l[i]<s){
        s=l[i]
    }
}
console.log(s)