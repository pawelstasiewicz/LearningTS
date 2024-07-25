function solution(str: string): string {

    let text: string = "";

    for(let i: number = str.length -1; i >=0; i--){
        text += str[i]
    }

    return text; // reverse this!
}

solution("world")

export default {}