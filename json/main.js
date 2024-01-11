let companies = `{
  firstname: "Ioana",
  secondname: "Iosub",
  favoriteNumber: 3,
  "hobbies:": ["rugby", "hiking", "dancing"],

  friends: [
    {
      name: "Cristi",
      age: 28,
      isProgramer: true,
    },
    {
      name: "Ioana",
      age: 28,
      isProgramer: false,
    },
  ],
};`;

console.log(JSON.parse(companies));
