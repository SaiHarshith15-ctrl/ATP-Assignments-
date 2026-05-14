function sumArray(a){
    let sum=0
    for(let i=0;i<a.length;i++){
        sum+=a[i]
    }
    return sum
}

let b=[4,3,6,7]
let result=sumArray(b)
console.log(result)