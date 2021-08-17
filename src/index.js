
// You should implement your task here.

module.exports = function towelSort (matrix) {

if (!matrix) {
return [];
}
   let arr = [];
          for (i = 0; i < matrix.length; i++) {
            if ((i+1)%2 !== 0) {
              for (j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
              }
            }
            else if ((i+1)%2 === 0){
              for (k = matrix[i].length-1; k >= 0; k--) {
                arr.push(matrix[i][k]);
              }
            }
            else {
              return arr;
            }
          }
          
          return arr;
}
