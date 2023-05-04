function convertToRoman(num) {
    if(num<1) return ''
    if(num>=1 && num<4) return 'I' + convertToRoman(num - 1);
    if(num>=1000) return 'M' + convertToRoman(num - 1000)
    if(num>=900 && num<1000) return 'CM' + convertToRoman(num - 900)
    if(num>=500 && num<900) return 'D' + convertToRoman(num - 500)
    if(num>=400 && num<500) return 'CD' + convertToRoman(num - 400)
    if(num>=100 && num<400) return 'C' + convertToRoman(num - 100)
    if(num>=90 && num<100) return 'XC' + convertToRoman(num - 90)
    if(num>=50 && num<90) return 'L' + convertToRoman(num - 50)
    if(num>=40 && num<50) return 'XL' + convertToRoman(num - 40)
    if(num>=10 && num<40) return 'X' + convertToRoman(num - 10)
    if(num>=9 && num<10) return 'IX' + convertToRoman(num - 9)
    if(num>=5 && num<9) return 'V' + convertToRoman(num - 5)
    if(num>=4 && num<5) return 'IV' + convertToRoman(num - 4)
   }