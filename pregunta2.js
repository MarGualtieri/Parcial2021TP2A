 
/**
 * Con el objeto de inventario, se pide desarrollor una function que reciba como parametro
 * el articulo (shoes, socks, shirts, pants) y una cantidad. Si la cantidad es menor o igual a la cantidad 
 * del inventario, se actualiza el objeto disminuyendo la cantidad y se retorna el codigo 200 que significa 'Venta exitosa'. 
 * Si la cantidad es mayor al stock existente, no se actualiza el objeto y se retorna el codigo 500 'Imposible de realizar la venta'
 * 
 */

 const inventory = {
    shoes: 10,
    socks: 6,
    shirts: 10,
    pants: 5,
  }

const sale = function (article, cant){
 
 let codigo;

  if (article ==='shoes') {
   
   if (inventory.shoes>=cant) {
     codigo=200;
     inventory.shoes= inventory.shoes - cant
   }else{
     codigo=500;
   }
  }
  if (article ==='socks') {
   
    if (inventory.socks>=cant) {
      codigo=200;
      inventory.socks= inventory.socks - cant
    }else{
      codigo=500;
    }
   }
   if (article ==='shirts') {
   
    if (inventory.shirts>=cant) {
      codigo=200;
      inventory.shirts= inventory.shirts - cant
    }else{
      codigo=500;
    }
   }
   if (article ==='pants') {
   
    if (inventory.pants>=cant) {
      codigo=200;
      inventory.pants= inventory.pants - cant
    }else{
      codigo=500;
    }
   }
  
  return codigo
}




// TESTS (no modificar)
console.log(sale('shoes',8) === 200 && inventory.shoes === 2);
console.log(sale('shoes',3) === 500 && inventory.shoes === 2);
console.log(sale('pants',5) === 200 && inventory.pants === 0);