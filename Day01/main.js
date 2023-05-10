/*
    Biến
    - Từ khóa khai báo biến: var, let, const
*/
// var myName
// console.log(myName);
// var myName = "sontv"

// var myName;
// console.log(myName);
// myName = "sontv"

// var myName = "sontv"
// if (true) {
//     var myName = "thienth"
// }
// console.log(myName);

// const myName = "sontv"
// myName = "thienth"
// // if (true) {
// //     const myName = "thienth"
// // }
// console.log(myName);

// const myNumber = [1, 2, 3]
// myNumber = [2, 3, 4, 5]
// myNumber[0] = 1000;
// console.log(myNumber[0]);

// const myInfo = {
//     id: 1,
//     name: "sontv",
// }
// myInfo.id = 10;
// myInfo = {
//     id: 10,
//     name: "thienth"
// }
// console.log(myInfo);

/*
    - toán tử
    - vòng lặp
    - câu lệnh rẽ nhánh (if else)
*/

/*
    Nhập vào họ tên nhân viên
    Nhập vào mức lương của nhân viên
    Nếu mức lương nhập vào nhỏ hơn 0 thì thông báo "Lương không được nhỏ hơn 0"

    Ngược lại nếu mức lương hợp lệ thì thực hiện công việc sau:
    Hiển thị họ tên nhân viên
    Tính và hiển thị tổng lương cả năm của nhân viên đó (đơn vị: triệu đồng)
    Nếu tổng lương dưới 100tr thì hiển thị "Bạn nghèo vậy!!!"
    Nếu tổng lương từ 100 - 200tr thì hiển  thị "Cũng đủ sống rồi đấy"
    Nếu tổng lương từ 200 - 400tr thì hiển thị "Ghê thế ông ei"
    Nếu tổng lương từ 400tr trở lên thì hiển thị "Ông giàu vãi"
*/

const username = "sontv"
const salary = 50;
console.log("Ho ten:" + username);
// tinh tong luong
let totalSalary = 0;
for (let i = 0; i < 12; i++) {
    totalSalary += salary;
}
console.log("Tong luong 12 thang: " + totalSalary);

// kiem tra tong luong
if (totalSalary < 10000) {
    console.log("Ban ngheo vay!!!");
}
