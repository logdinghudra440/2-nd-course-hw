
const numbs = [1, 5, 4, 10, 0, 3];
for (let i=0; i<numbs.length; i++){
    console.log (numbs[i]);
    if(numbs [i]==10)break;
}


const numbs2 = [1, 5, 4, 10, 0, 3];
let position = numbs2.indexOf(4);
console.log (position);


const numbs3 = [1, 3, 5, 10, 20].join(' ');
console.log (numbs3);


const array = [];
for (let i = 0; i < 3; i++) {        
    const row = [];
    for (let j = 0; j < 3; j++) {    
        row.push(1);                
    }
    array.push(row);               
}
console.log(array);



