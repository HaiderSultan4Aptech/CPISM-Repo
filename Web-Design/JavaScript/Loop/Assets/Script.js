
let uName = prompt("Please enter your name");
let mainDiv = document.getElementById("mainDiv")
if (uName === "") {
    alert("Please enter a name");
    location.assign("index.html");
} else {
    let firstVal = parseInt(prompt("Please give the first value"));
    let secondVal = parseInt(prompt("Please give the second value"));

    if (isNaN(firstVal) || isNaN(secondVal)) {
        alert("Please enter valid numerical values");   
        location.assign("index.html");
    } else if(firstVal >= secondVal){
        alert("enter second value greater")
        location.assign("index.html")
    }
    else {
        let msg = confirm("Do you want to print your name multiple times?");
        if (msg) {
            let x = firstVal;
            while (x <= secondVal) {
                mainDiv.innerHTML += `<p>${uName}</P>`
                i++;
            }
        } else {
            mainDiv.innerHTML = `<p>${uName}</P>`
        }
    }
}