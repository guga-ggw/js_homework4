const info = [  
    {name:'Lasha', age: 30, number: 3}, 
    {name: 'Saba', age: 20, number: 1},
    {name: 'guga', age: 15, number: 2}
]

const func = (data) =>{
    return sorted = data.sort((a, b) => a.age - b.age)
    
}

console.log(func(info))