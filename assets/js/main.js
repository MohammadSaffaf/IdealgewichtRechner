function gewichtRechnen() {
    const Grösse =document.getElementById("height")
    const Alter =document.getElementById("alt")
    const bereit =document.getElementById("big")
    const schmale =document.getElementById("small")
    const result =document.getElementById("result")
    let a = Grösse.value -100
    let b =Alter.value /10
    let c = 0.9*0.9
    let res =(a+b)*c
    let d =0.9*1.1
    let res2=(a+b)*d
if (schmale.checked) {
  
  result.innerHTML= "Deine Idealgewicht ist  " +res +" Kg"
}else{
    result.innerHTML="Deine Idealgewicht ist  " +res2 +" Kg"
}

}