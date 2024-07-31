// Task

// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...

// You will need to figure out the rule of the series to complete this.

// Rules

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)

// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


//TO DO!!!!!!!!!!!!!!!!!!!

export function SeriesSum(n: number): string {
    let value:string = ""
    
    let num: number = 1/4

    if(n ===1){
        value += n.toFixed(2)
    }else if(n === 2){
        value += (1 + num).toFixed(2)
    }else{
        value += (1 + (num * (1/3 ** n -1))).toFixed(2)
    }
    
    return value// Happy Coding ^_^
}

console.log(SeriesSum(5))