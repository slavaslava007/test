type Techtype={
    id:number
    title:string
}
type LocalCityType={
    title: string
    country: string
}
type AdressType={
    street:string
    city:LocalCityType
}
type StudentType={
    id:number
    name:string
    age:number
    isActive:boolean
    adress:AdressType
    tech:Array<Techtype>
}

const itincubator:StudentType = {
    id:1,
    name: 'it-incubator',
    age: 1060,
    isActive: true,
    adress: {
        street: 'platonova',
        city: {
            country: 'Belarus',
            title: 'Minsk'
        }
    },

    tech:[
        {id:1,
            title:'html'
        },
        {id:2,
            title:'JS'
        },
        {id:3,
            title:'React'
        },
    ]
}


console.log(itincubator.age)
console.log(itincubator.isActive)
console.log(itincubator.adress.city)
console.log(itincubator.tech[1].title)





