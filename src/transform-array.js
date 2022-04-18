const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

 let answer = []
 const commands = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]
 for(let i = 0; i < arr.length; i++){
   if(!commands.includes(arr[i])){
     // no commands near
     if(!commands.includes(arr[i-1]) && !commands.includes(arr[i+1])){
       answer.push(arr[i])
     }
     // only command left
     if(commands.includes(arr[i-1]) && !commands.includes(arr[i+1])){
        if(arr[i-1] === "--double-next"){
          answer.push(arr[i])
          answer.push(arr[i])
        }else if (arr[i-1]!=="--discard-next"){
          answer.push(arr[i])
        }
     } 
     // only command right
     if(!commands.includes(arr[i-1]) && commands.includes(arr[i+1])){
       if(arr[i+1]=== "--double-prev"){
        answer.push(arr[i])
        answer.push(arr[i])
       }else if(arr[i+1]!== "--discard-prev"){
        answer.push(arr[i])
       }
     }

     // both sides command
     if(commands.includes(arr[i-1]) && commands.includes(arr[i+1])){
       if((arr[i-1] === "--double-prev" || arr[i-1] === "--discard-prev") && (arr[i+1] === "--double-next" || arr[i+1] === "discard-next")){
          answer.push(arr[i])
       }else if (arr[i-1] === "--discard-next"){
         //pass
       }else if (arr[i-1] === "--double-next" && arr[i+1] === "--double-prev"){
        answer.push(arr[i])
        answer.push(arr[i])
        answer.push(arr[i])
       }else if(arr[i-1] === "--double-next" && arr[i+1] === "--discard-prev"){
        answer.push(arr[i])
       }else if (arr[i+1] === "--double-prev"){
        answer.push(arr[i])
        answer.push(arr[i])
       }
     }
   }
 }
 return answer

}

module.exports = {
  transform
};
