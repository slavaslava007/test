import {mult, splitintoWord, sum} from "./1";

let  a:number;
let  b:number;
let  c:number;

beforeEach(()=>{
    a=1;
    b=2;
    c=3;
})

test ('sum shold be correct',()=>{


    const result=sum(a,b);
    const result1=sum(b,c);

    //expect
    expect(result).toBe(3)
    expect(result1).toBe(5)
})

test ('sum ',()=>{
    const  a=1;
    const  b=2;
    const  c=3;

    const result=mult(a,b);
    const result1=mult(b,c);

    //expect
    expect(result).toBe(2)
    expect(result1).toBe(6)
})


test('splitting into words should be correct',()=>{

    //data
    const sent="Hello my friends"
    const sent2='JS - best programming language'

    //action
    const result1=splitintoWord(sent);
    const result2=splitintoWord(sent2);

    // expect
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');


    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('best');
    expect(result2[2]).toBe('programming');
    expect(result2[3]).toBe('language');
    })