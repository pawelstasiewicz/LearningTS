// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

export const reverseSeq = (n: number): number[] => {
    let arr: number[] =[]
    let value:number = n

    for(let i = value; i>0; i-- ){
        let a = i
        arr.push(a)
        value =- 1
    }
    return arr;
  };

  reverseSeq(5)