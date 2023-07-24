//s = "PAYPALISHIRING"
//NumRows = 3
var convert = function(s, numRows) {
    
    if(numRows===1){
      //A straight line if the num of rows is 1
        return s
    }
  
    const resultArr = [] //keeps the strings that will be grouped
    let rowIndex = 0 // keeps track of the current level/elevator floor we are on 
    let down = true //tracks direction
  
    for(let i=0; i <=numRows;i++){
        resultArr[i] ='' 
        //resultArr = ['','','']
    }
  
    for(let i=0; i< s.length;i++){
        resultArr[rowIndex] += s[i]
        if(rowIndex>=numRows-1){
            //switch direction when we get to the bottom floor
            down = false
        }
        if(rowIndex===0){
          //switch direction when we get to the top floor
            down=true
        }
        
        //we are done on this floor go whichever way the direction is headed
        if(down){    
            rowIndex++
        }
        else{
            rowIndex--
        }
    }
    return resultArr.join('') //combines the string the in the result array 
    //EX: ['PAHN','APLSIIG','YIR']
};

//In practice
//Think of the row index as being the current floor we are on
//You start on the top floor and for each floor you go to you stick the current letter on the wall of the floor(row Index) in order behind any other letters if the given floor has any
//As long as you have letters ,when you get to the bottom you switch directions(go up) and likewise when you get to the top(go down)
//One floor at a time you put a letter on the respective floor wall until there are no more letters.
//When going all the way back to the top floor and descending down one floor at a time you gather the letters in the order in which they are placed on the wall and place them after the floors that came before 
//(excluding the first floor since no floor will be checked before it)


//If there is only one floor then all letters will be placed in order in which they originally were
