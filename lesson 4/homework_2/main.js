let sentence = ["sircxvilit sikvdils kacuri sikvdili gvijobs",]

const func = (sen) =>{
   return sen.map((word) => word.split(" ")
   .map((bgera) => bgera[0].toUpperCase() + bgera.slice(1))
   .join(" ")
    )   
}

console.log(func(sentence))