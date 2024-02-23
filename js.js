
const users = [
{
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
},
{
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
    },
    {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];













// task1
const getUserNames = users => {
  return users.map(user => user.name);
};

const userrrr = [
  { id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081', name: 'Moore Hensley' },
  { id: '7a3cbd18-57a1-4534-8e12-1caad921bda1', name: 'Sharlene Bush' },
  { id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3', name: 'Ross Vazquez' },
  { id: '249b6175-5c30-44c6-b154-f120923736f5', name: 'Elma Head' },
  { id: '334f8cb3-eb04-45e6-abf4-4935dd439b70', name: 'Carey Barr' },
  { id: '150b00fb-dd82-427d-9faf-2879ea87c695', name: 'Blackburn Dotson' },
  { id: 'e1bf46ab-7168-491e-925e-f01e21394812', name: 'Sheree Anthony' }
];

console.log(getUserNames(userrrr));


//task 3



const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(user => user.name);
};

const user = [
  { name: 'Moore Hensley', gender: 'male' },
  { name: 'Sharlene Bush', gender: 'female' },
  { name: 'Ross Vazquez', gender: 'male' },
  { name: 'Elma Head', gender: 'female' },
  { name: 'Carey Barr', gender: 'male' },
  { name: 'Blackburn Dotson', gender: 'male' },
  { name: 'Sheree Anthony', gender: 'female' }
];

console.log(getUsersWithGender(user, 'male')); 






// task 4



const getInactiveUsers = users => {
 return users.filter(user => !user.isActive);
};

const Useer = [
  { name: 'Moore Hensley', isActive: true },
  { name: 'Sharlene Bush', isActive: false },
  { name: 'Ross Vazquez', isActive: false },
  { name: 'Elma Head', isActive: true },
  { name: 'Carey Barr', isActive: false },
  { name: 'Blackburn Dotson', isActive: false },
  { name: 'Sheree Anthony', isActive: true }
];


console.log(getInactiveUsers(Useer)); 



/// task 5
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

const userss = [
  { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
  { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
  { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
  { name: 'Elma Head', email: 'elmahead@omatom.com' },
  { name: 'Carey Barr', email: 'careybarr@nurali.com' },
  { name: 'Blackburn Dotson', email: 'blackburndotson@flotonic.com' },
  { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
];

console.log(getUserWithEmail(userss, 'shereeanthony@kog.com'));


console.log(getUserWithEmail(userss, 'elmahead@omatom.com'));


