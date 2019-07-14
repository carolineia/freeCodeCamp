function rot13(str) {
    var arrayOfCodes = [];
    var num;
    for (i=0; i<str.length; i++) {
    num = str.charCodeAt(i);
      
    if (num >=65 && num <=77) {
     num += 13;
    }
    else if (num >=78 && num <= 90) {
     num -= 13;
     }
  
    arrayOfCodes.push(num);
  }
  
  cryptoString = String.fromCharCode.apply(null, arrayOfCodes);

  return cryptoString;
  }
  // Change the inputs below to test
  rot13("LBH QVQ VG!");