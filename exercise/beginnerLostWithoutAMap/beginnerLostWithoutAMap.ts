// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

export function maps(x: number[]): number[]{
    let arr:number[] = []
    
    x.forEach(n => {
       arr.push(n*2)
    });
    
    return arr;
  }

maps([1, 2, 3])