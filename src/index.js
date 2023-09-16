module.exports = function toReadable (number) {

    let one_nineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



  if (number < 20){ 
    return one_nineteen[number]
  }

  else if (number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90){
    return `${tens[number / 10]}`
  }
  
  else if (number >= 20 && number <= 99){
    return `${tens[Math.floor(number / 10)]} ${one_nineteen[Math.floor(number % 10)]}`
  }
  
  else if (number % 100 === 0) {
    return `${one_nineteen[Math.floor(number / 100)]} hundred`
  }

  else if (number % 10 === 0) {
    return `${one_nineteen[Math.floor(number / 100)]} hundred ${tens[(Math.floor(number / 10)) % 10]}`
  }
  
  else if ((number >= 100 && number < 120) || (number >= 200 && number < 220) || (number >= 300 && number < 320) || (number >= 400 && number < 420) || (number >= 500 && number < 520) || (number >= 600 && number < 620) || (number >= 700 && number < 720) || (number >= 800 && number < 820) || (number >= 900 && number < 920)){
    return `${one_nineteen[Math.floor(number / 100)]} hundred ${one_nineteen[number % 100]}`
  }
  
  else if (number >= 100 && number <= 999 && (number % 10 === 0)) {
    return `${one_nineteen[Math.floor(number / 100)]} hundred ${one_nineteen[(Math.floor(number / 10)) % 10]}`
  } else {
    return `${one_nineteen[Math.floor(number / 100)]} hundred ${tens[(Math.floor(number / 10)) % 10]} ${one_nineteen[number % 10]}`
  }
}
