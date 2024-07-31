// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

export function smash(words: string[]): string {

    let sentence: string = ""

    words.forEach(element => {

        if(words.indexOf(element) === words.length -1 || words.length === 1){
            sentence += element
        }else{
            sentence += element + " "
        }
    });

    return sentence
};

smash(["hello", "amazing", "world"])