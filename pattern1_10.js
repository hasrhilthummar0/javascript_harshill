// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let a = ""
for(let i = 1; i<=5; i++)
    {

        for(let j = 1;j <= i; j++)  
            {
                a+=j;
            }
            a+="\n"
    }
console.log(a);


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let a1  = ""

for(let i = 1; i <=5; i++)
    {
        for(let j = 1; j <=i ;j++)
            {
                a1+=j
            }
            a1+="\n"
    }
    console.log(a1);


// 1
// 2 3
// 4 5 6
// 7 8 9 10


let a2 = ""
let p = 1
for(let i =1; i<=4; i++)
    {
        for(let j =1; j<=i ;j++) // 1   
            {
                a2+=p+"";
                p++;
            
            }
            a2+"\n"
    }
    console.log(a2);