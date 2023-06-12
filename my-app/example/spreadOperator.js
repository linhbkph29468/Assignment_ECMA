// speadOperator là giải ra
const food1 = ["Pork", "Beef"]
const food2 = ["Vegetable", "Fruit", "Octopus"]

//const food3 = food1.concat(food2) (concat de noi 2 hay nhieu chuoi lai voi nhau)
const food3 = [...food1, ...food2]
console.log(food3);

/////////////////
const user1 = {
    id: 1,
    name: "Linh"
}

const user2 = {
    email: "khanhlinh@gmai.com",
    phone: "01234567"
}

const user3 = { ...user1, ...user2 }
console.log(user3)

/////////////////
const arrayNumber = [1, 2, 3]

function show(...params) {
    console.log(params);
}
show(...arrayNumber)
// arrayNumber -> [1,2,3]
//...arrayNumber -> 1,2,3
