/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/

console.log("OTP sent successfully")

/*setTimeout(()=>{
   let x=10
    console.log(x)
    while(x>0){

        x--
        console.log(x)
         }
    },1000)

    */

let  seconds=10
console.log(10)
let intervalId=setInterval(()=>{
    seconds--;
    console.log(seconds)
    if(seconds===0){
        console.log("resend otp")
        clearInterval(intervalId)
    }
},1000)