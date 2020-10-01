
exports.min = function min (array) {
    if(array ===undefined || array[0] === undefined) return 0;
    return Math.min.apply(null, array) ||0;
}
// exports.min = function min (array) {
//     return array.filter(el => !isNaN(parseFloat(el)) && isFinite(el) );
// }

exports.max = function max (array) {
    if(array ===undefined || array[0] === undefined) return 0;
    return Math.max.apply(null, array) ||0;
    
}

    
exports.avg = function avg (array) {
    if(array ===undefined || array[0] === undefined) return 0;
 return array.reduce((a, b) => (a + b)) / array.length;
//     let sum = 0;
//     if(array === []){
//       return array[0];  
    
//     }else {
// if(array === undefined){
//     return array[0] ;
// }
//     }
//     for (let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum /array.length;
//     if(array.length === ''){
//         return 0;  
      
//       }else {
//   if(array.length == undefined){
//       return 0;
//   }
//       }
}
