// create a prompt which accepts users within the range of 25-40 & rejects anyone below or above such range 

let X=prompt(`Please enter your Age ?`);

if(X>=25 && X<=40){
    document.write(`Eligible`)
}
else{
    document.write(`Not-Eligible`)
}