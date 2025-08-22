const user = {
    ivan: {
        age: 28,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}
console.log(user.ivan)
user.ivan.sayHello('Alex')
// ===========================================



const users = [
    {
        name: 'alex',
        isAdmin: false
    },
    {
        name: 'john',
        isAdmin: false
    },
    {
        name: 'tom',
        isAdmin: true
    }
]

let usersNotAdmin = 0
for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        usersNotAdmin++;
    }
}
console.log("Количество простых пользователей:", usersNotAdmin);


