const users = ["linhkhanh", "giahan", "tuongvy"];
for (let i in users) { //for in la vong lap chay qua index
    console.log(i);
}

for (let item of users) { //for of: chay qua gia tri
    console.log(item);
}

/*
vong 1: item - linhkhanh
vong 2: item - giahan
vong 3: item - tuongvy
*/

users.forEach((index, item) => {
    console.log(index);
})