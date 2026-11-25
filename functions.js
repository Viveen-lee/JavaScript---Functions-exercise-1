function multiply(a, b, c){
  return a * b * c;
}
console.log(multiply(2, 4, 5));


let convertToSeconds = function(minutes){
  return minutes * 60
}
seconds = convertToSeconds(2)
console.log(seconds);


let fahrenheitToCelsius = function(temperature){
  return (temperature -32) / 1.8; 
}
celsius = fahrenheitToCelsius(68)
console.log(celsius);


function reverseString(str){
  return str.split("").reverse().join("");
}
console.log(reverseString('Apple'));


function countVowels(str){
  const vowels = 'aAeEiIoOuU';
  let vowelcount = 0;
  for(i=0; i<str.length; i++){
    if(vowels.indexOf(str[i]) !== -1){
      vowelcount += 1;
    }
  } 
  return vowelcount;
}
result = countVowels("Counting Vowels")
console.log(result);


function isPrime(number){
  if(number <= 1){
    return false;
  }
  for (let i = 2; i < number; i++){
    if (number % i == 0){
      return false;
    }
  }
  return true;

}
console.log(isPrime(3));
console.log(isPrime(20));
console.log(isPrime(29));
console.log(isPrime(6));