let x   //generates any random between 1-6
let y 
let z

document.getElementById('rollButton').onclick = function(){
    let x = Math.floor(Math.random()* 6)+1  //generates any random between 1-6
    let y = Math.floor(Math.random()* 6)+1
    let z = Math.floor(Math.random()* 6)+1

    document.getElementById('xlabel').innerHTML = x;
    document.getElementById('ylabel').innerHTML = y;
    document.getElementById('zlabel').innerHTML = z;
}