function rot13(str) {
    let letters = [{A: 'N'}, {B: 'O'}, {C: 'P'}, {D: 'Q'}, {E: 'R'}, {F: 'S'},
     {G: 'T'}, {H: 'U'}, {I: 'V'}, {J: 'W'}, {K: 'X'}, {L: 'Y'}, {M: 'Z'},
      {N: 'A'}, {O: 'B'}, {P: 'C'}, {Q: 'D'}, {R: 'E'}, {S: 'F'}, {T: 'G'}, {U: 'H'},
       {V: 'I'}, {W: 'J'}, {X: 'K'}, {Y: 'L'}, {Z: 'M'}]
       
    let message = []
    for(let i = 0; i<str.length; i++){
        //console.log(str[i])
        if(/[^a-zA-Z0-9]/.test(str[i])) message.push(str[i])
        else 
        for (let letter of letters){
            let key = Object.keys(letter)[0]
            if(key == str[i])
            message.push(letters[letters.indexOf(letter)][str[i]])
        }//if(...Object.keys(letter) == str[i]) letra.push(...Object.keys(letter))}
        
    }
    console.log(message)
  return message.join('');
}