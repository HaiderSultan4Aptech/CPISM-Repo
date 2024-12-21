let row = ""
let Body = document.getElementById("BODY")
let data = [
[1,"x",1,"=",1],
[1,"x",2,"=",2],
[1,"x",3,"=",3],
[1,"x",4,"=",4],
[1,"x",5,"=",5],
[1,"x",6,"=",6],
[1,"x",7,"=",7],
[1,"x",8,"=",8],
[1,"x",9,"=",9],
[1,"x",10,"=",10],
[1,"x",11,"=",11],
[1,"x",12,"=",12],
[1,"x",13,"=",13],
[1,"x",14,"=",14],
[1,"x",15,"=",15]
];

for(let i=0; i < data.length; i++){
    row += "<tr>"
    for (let j = 0; j < data[i].length; j++) {
        row += `<td>${data[i][j]}</td>`
    }
    row += "</tr>"
}
Body.innerHTML = row 
