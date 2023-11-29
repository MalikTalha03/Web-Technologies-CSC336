let yourArray;
yourArray = ['one', 2, 'three', true, false, undefined, null, NaN];
console.log(`Length of array is ${yourArray.length}`);
for (let i = 0; i < yourArray.length; i++) {
    console.log(yourArray[i]);
}

let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        },
        {
            five: 5,
            six: 6
        }
    ],
    [
        {
            a : 'a',
            b : 'b'
        },
        {
            c : 'c',
            d : 'd'
        },
        {
            e : 'e',
            f : 'f'
        }
    ]
    
]
console.log(`Length of complexArray is ${complexArray.length}`);
let value = complexArray[0][1].four;
console.log(value);
let obj = { seven: 7 , eight: 8};
complexArray[0].push(obj);
console.log(complexArray[0][3].seven);
