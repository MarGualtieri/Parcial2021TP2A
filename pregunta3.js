// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    
    
   if (nums.length < 3) {
      
        return undefined
    }
  
   num2 = nums.sort((a, b) => a - b)

   return num2[num2.length-3]

   

}


// TESTs no modificar
console.log(greater3[4,3,4,5,1] === 3);
console.log(greater3[3,4] === undefined);
console.log(greater3[4,4,4] === 4);
console.log(greater3[1,1,2,5] === 1);