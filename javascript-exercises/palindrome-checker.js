function palindrome(str) {
  var newstring = str.replace(/ |[!-.]|_/g,'').toLowerCase();
  if (newstring == newstring.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

// insert word here to check for palindrome
palindrome("eye");