let guestList = new Set();
guestList.add("Dwight").add("Jake").add("Meg").add("Claudette");
console.log(guestList);

for (let item of guestList)
    console.log(item);
console.log(guestList.has("Dwight"));

console.log(guestList.size); 

guestList.delete("Jake");

console.log(guestList);
guestList.clear(); 

console.log(guestList);

console.log("---------------");

let menu = new Map();
menu.set("fried chicken", 5).set("mashed potato", 7).set("hamburger", 5).set("taco", 4.2).set("sushi", 5.7);
console.log(menu);
for (let [key, value] of menu)
    console.log(`${key}'s price is ${value}`);
menu.delete("hamburger");
console.log(menu.has("hamburger"));
console.log(menu.size);
menu.clear();
console.log(menu);
console.log("---------------");

let bankVault = new WeakMap();

let user = {};
let user2 = {};

bankVault.set(user, "content").set(user2, "content2");

console.log(bankVault);

console.log(bankVault.has(user));

console.log(bankVault.get(user));

bankVault.delete(user2);

console.log(bankVault);

console.log("---------------");

let coinCollection = new WeakSet();
let obj = {
    "coin": "content"
}
let obj1 = {
    "coin1": "content"
}
let obj2 = {
    "coin2": "content"
}

coinCollection.add(obj).add(obj1).add(obj2);

console.log(coinCollection);

console.log(coinCollection.has(obj1));

coinCollection.delete(obj2);

console.log(coinCollection);
