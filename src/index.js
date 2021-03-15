module.exports = function toReadable (number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    const tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number<10)
        return one[number];
    if(number<20)
        return ten[number%10];
    if(number<100){
        return number%10===0 ? tens[Math.trunc(number/10)] : tens[Math.trunc(number/10)]+' '+toReadable(number%10);
    }

    if(number>=100){
        return number%100===0 ? one[Math.trunc(number/100)] + ' ' + 'hundred' : one[Math.trunc(number/100)] + ' ' + 'hundred' + ' ' +toReadable(number%100);

    }
  
}

