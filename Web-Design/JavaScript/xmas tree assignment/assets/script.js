
let height = 5; 

for (let i = 1; i <= height; i++) {
  let spaces = ' '.repeat(height - i); 
  let stars = '*'.repeat(2 * i - 1); 
  document.write(spaces + stars,"<br>"); 
}
