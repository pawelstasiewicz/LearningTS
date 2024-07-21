let score: number | string = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let pawel: User | Admin = {
    name: "pawel",
    id: 334
}

pawel = {username:"ps", id: 334}