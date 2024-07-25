export function findSmallestInt(args: number[]): number {

    const final:number = Math.min(...args)
    return final
}

findSmallestInt([34, -345, -1, 100])