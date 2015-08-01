function processData(input) {
   // Helpers !.. 
   function isFirstLastRow(cellNumber) {
       if(cellNumber < mapSize && cellNumber > (mapSize * mapSize) - mapSize) {
           return true;
       }
       return false;
   } 
    
   function onBorderArea(cellNumber) {
      if(cellNumber === 0 || 
         cellNumber % mapSize === 0 || 
         ((cellNumber - (mapSize - 1)) % mapSize === 0) || 
         (cellNumber - (mapSize - 1) === 0)) {
          return true;
      }
      return false;  
   }
    
   function isCavity(cellNum) {
       if(!(isFirstLastRow(cellNum))){ 
           if(map[cellNum] > map[cellNum+1] && map[cellNum] > map[cellNum -1] &&
              map[cellNum] > map[cellNum + mapSize] && 
              map[cellNum] > map[cellNum - mapSize]) {
               return true; 
            }
        }
       return false;
   }
    
   function replaceWithCavity(cellNum) {
       map[cellNum] = 'X';
   }
    
    //Enter your code here
    var inputArray = input.split("\n");
    var mapSize = Number(inputArray[0]);
    var map = [];
    var resultString = '';
   
    for(var i = 1; i <= mapSize; i++) {
        var row = inputArray[i].split("");
        for(var j = 0; j < row.length; ++j) {
            map.push(Number(row[j]));
        }
    }
    
   for(var i = 0; i <map.length; ++i) {
       if(!onBorderArea(i) && isCavity(i)) {
           replaceWithCavity(i);
       }
       resultString += map[i];
       if( (i + 1) % mapSize === 0) {
           resultString += '\n';
       }
   }
   console.log(resultString); 
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
