function telephoneCheck(str) {

  let regex = /^(1?)( ?)(\d{3}|\(\d{3}\))( |-?)(\d{3})( |-?)(\d{4}$)/;
  let result = regex.test(str);

  console.log("result is " + result);
  return result;
}

telephoneCheck("1 555 555 5555");