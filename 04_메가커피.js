const megaCoffee = {
  name: "메가커피",
  menus: [
    {
      name: "아메리카노",
      price: 2000,
      category: "커피",
      options: ["HOT", "ICE"],
    },
    {
      name: "카페라떼",
      price: 3000,
      category: "커피",
      options: ["HOT", "ICE"],
    },
    { name: "딸기스무디", price: 4500, category: "음료", options: ["ICE"] },
    { name: "망고주스", price: 4000, category: "음료", options: ["ICE"] },
  ],
  orders: [
    { menuName: "아메리카노", option: "ICE", quantity: 2 },
    { menuName: "딸기스무디", option: "ICE", quantity: 1 },
    { menuName: "카페라떼", option: "HOT", quantity: 3 },
  ],
};

console.log(megaCoffee.name);
console.log("[Menus]");
console.log("------------------------------------------------------------");
console.log("name             price        category               options");
console.log("------------------------------------------------------------");
console.log(
  `${megaCoffee.menus[0].name}        ${megaCoffee.menus[0].price}          ${megaCoffee.menus[0].category}                  ${megaCoffee.menus[0].options}`,
);
console.log(
  `${megaCoffee.menus[1].name}          ${megaCoffee.menus[1].price}          ${megaCoffee.menus[1].category}                  ${megaCoffee.menus[1].options}`,
);
console.log(
  `${megaCoffee.menus[2].name}        ${megaCoffee.menus[2].price}          ${megaCoffee.menus[2].category}                  ${megaCoffee.menus[2].options}`,
);
console.log(
  `${megaCoffee.menus[3].name}          ${megaCoffee.menus[3].price}          ${megaCoffee.menus[3].category}                  ${megaCoffee.menus[3].options}`,
);

console.log("\n[Orders]");
console.log("------------------------------------------------------------");
console.log("menuName             option                   quantity");
console.log("------------------------------------------------------------");
console.log(
  `${megaCoffee.orders[0].menuName}             ${megaCoffee.orders[0].option}                          ${megaCoffee.orders[0].quantity} `,
);
console.log(
  `${megaCoffee.orders[1].menuName}             ${megaCoffee.orders[1].option}                          ${megaCoffee.orders[1].quantity} `,
);
console.log(
  `${megaCoffee.orders[2].menuName}               ${megaCoffee.orders[2].option}                          ${megaCoffee.orders[2].quantity} `,
);
