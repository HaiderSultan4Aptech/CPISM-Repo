let q1 = parseInt(prompt("enter value 1"))
let q2 = parseInt(prompt("enter value 2"))
let q3 = prompt("enter arthematic operator")

if( q1 == ""  || q2 == "" ||  q3 == "" ){
    alert(`enter value`);
    location.assign("index.html")
}else if(q3 === "+"){
    let result = q1 + q2
    document.write(`Your Answer is: ${result}`)
}

else if( q3 === "-"){
    if (q2 < q3) {
        alert("enter valid value")
    }
    
    else{
    let result = q1 - q2
    document.write(`your ans is ${result}`)
    }
}

