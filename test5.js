    'use strict'


    const  combine =(list) => {

        let pairs = new Array((list.length * (list.length - 1)) / 2),

        pos = 0;

        for (let i = 0; i < list.length; i++) {

            for (let j = i + 1; j < list.length; j++) {

                pairs[pos++] = [list[i], list[j]];

            }

        }

        return pairs;

        }
    let  grid =[];
     
    for (let i=1; i<=3+3; i++ ){
 
        
        grid.push(i);

         }

         console.log(`arreglo inicial es igual a  =  ${grid}`);
 
   

let result = combine(grid);

console.log(`Combinaciones = ${result.length}`);

console.log("Combinaciones = "+ JSON.stringify(result));



