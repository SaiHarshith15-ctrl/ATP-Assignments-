function check(a,b){
    for( let i=0;i<a.length;i++){
        if(a[i]==b){
            return i
        }
        
    }
 return "not found"
}
let a=[3,5,2,4,6]
let result=check(a,2)
console.log(result)
