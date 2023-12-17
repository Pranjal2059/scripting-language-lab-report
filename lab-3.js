function reverseString(str) {
    let result = "";
    let i = str.length - 1;
    do {
      result = result + str[i];
      i--;
    } while (i >= 0);
    return result;
  }
  
  const inputString = "Hello";
  const reversedString = reverseString(inputString);
  console.log(reversedString);
  