/*
document.write(`<p> 2 X 0 = 0</p>
<p> 2 X 1 = 2</p>
<p> 2 X 2 = 4</p>
<p> 2 X 3 = 6</p>
<p> 2 X 4 = 8</p>
<p> 2 X 5 = 10</p>
<p> 2 X 6 = 12</p>
<p> 2 X 7 = 14</p>
<p> 2 X 8 = 16</p>
<p> 2 X 9 = 18</p>
<p> 2 X 10 = 20</p>`);

for(let i=0; i<11; i++){

    //activties

}

/* HERE IS YOUR CODE */
/*
for(let i=0; i<4; i++){
    document.write("My for is working");
}

for(let i=1; i<=10; i++){
    document.write(`<p>${i}</p>`)
}


for(let i=2; i<21; i+=2){
    document.write(`<p>${i}</p>`)
}
*/

//Constant Num. 2
//Variables result, number to multiply...

const num2 = 2;
let result = 0;

for(let i = 1 ; i < 11 ; i++){

    result = num2 * i;

    document.write(`<p>${num2} x ${i} = ${result}</p>`)
    
}