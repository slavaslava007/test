debugger
export  function sum(a:number,b:number) {
    return a+b
}

const res=sum(2,5)

export  function mult(a:number,b:number) {
    return a*b
}

export function splitintoWord(sentese:string) {
 const words=sentese.toLowerCase().split('')
        return   words.filter(w=> w !=="")
    .map(w=>w.replace('!',''))
}




// const sentense = 'Hello my friends!'
//
// function SplitIntoWord(sentense: string) {
//     return ['hello', 'my', 'friends']
// }

