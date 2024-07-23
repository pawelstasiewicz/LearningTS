interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const pawel: Admin = {
    dbId: 22, email: "pst@pst.com", userId: 2213,
    githubToken: "github",
    role: 'admin', 
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "pawel", off: 10) => {
        return 10
    }
}
pawel.email = "p@p.com"
// pawel.dbId = 12