const cipher = {
  encode: (offset , string ) => { 
  let result = ""
  for (let i=0; i<string.length;i++){
      let possAscii= string.charCodeAt(i);
      let possOffset= ( possAscii - 65 + Number(offset)) %26 + 65;
      let letter = String.fromCharCode(possOffset);
      result = result + letter;
    }
   
    if (!string) throw new TypeError("you did not enter any message");
    if (typeof string!== "string") throw new TypeError ("the value entered is not text");
     
    return result
  }, 

  decode: (offset , string ) => { 
   
  let result = ""
  for (let i=0; i<string.length;i++){
      let possAscii= string.charCodeAt(i);
      let possOffset= (possAscii + 65 - Number(offset)) %26 + 65;
      let letter = String.fromCharCode(possOffset);
      result = result + letter;
    }
    if (!string) throw new TypeError("you did not enter any message");
    if (typeof string !== "string") throw new TypeError ("the value entered is not text");
    return result
  }, 

  }

  //console.log(cipher.encode(2, "MADELEN"))
 //console.log(cipher.decode( 2, "O"))
  export default cipher;
  

 




