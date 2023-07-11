let string = "Guga"
let valuetoreplace = "g"
let valuetoreplacewith = "j"

const func = (string, a, b)=>{
  let result =""
    if(string.includes(a)){
     for(let w = 0; w < string.length; w++){
        if(string[w] == a){
            result += b
        } 
        else{
          result += string[w]
        }
     }
     return result
    }
    
}

console.log(func(string, valuetoreplace, valuetoreplacewith))