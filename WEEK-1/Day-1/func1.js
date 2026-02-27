function big(a,b,c){
    if(a>b&&a>c){
        return a
    }
    else if(b>a&&b>c){
        return b
    }
    else{
        return c
    }
}
let result=big(10,20,30)
console.log(result)


