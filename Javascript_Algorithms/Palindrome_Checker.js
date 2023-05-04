function palindrome(str) {
    let array = Array.from(str)
    let array2 = Array.from(str)
    let reverse = array.reverse()
    let string2 = array2.toString().toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    let string = reverse.toString().toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    console.log(string,'                              ', string2)
    if(string2.trim() == string.trim()){
       return true
    }
    else return false
   }