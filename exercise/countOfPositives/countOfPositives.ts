// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

export function countPositivesSumNegatives(input: any) {

    if (!input || input.length === 0) {
        return [];
    }

    let x: number = 0
    let y: number = 0

    input.forEach((element: number) => {
        if (element > 0) {
            x += 1
        } else if (element < 0) {
            y += element
        }else if(!input || input.length === 0){
          return []
        }
    });
    return [x, y]
}


countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])