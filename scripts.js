// let person = {
//   name: "John",
//   age: 30,
// };
// // console.log(person.age);
// // console.log(person["age"]);
// // for (let key in person) {
// //   console.log(key);
// // }
// person.gender = "female";
// person["job"] = "developer";
// console.log(person);

// if ("age" in person) {
//   person.age = 50;
// }

// if (person.hasOwnProperty("job")) {
//   console.log(person.job);
// }

// delete person.gender;

// console.log(person);

// let hocsinh = [
//   { ten: "An", tuoi: 15, lop: "10A1" },
//   { ten: "Binh", tuoi: 16, lop: "11A2" },
//   { ten: "Chau", tuoi: 15, lop: "10A1" },
// ];

// hocsinh.push({ ten: "Dung", tuoi: 17, lop: "11A3" });

// for (let i = 0; i < hocsinh.length; i++) {
//   for (let key in hocsinh[i]) {
//     console.log(hocsinh[i][key]);
//   }
// }

// hocsinh[1].tuoi = 17;

// delete hocsinh.splice(2, 1);

// console.log(hocsinh);

let task = [
  { id: 1, title: "Code projects", isCompleted: true },
  { id: 2, title: "Do homework", isCompleted: false },
];
let list = document.getElementById("list-task");
