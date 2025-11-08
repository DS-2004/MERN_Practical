
const path = require('path');

const filePath = "C:/Users/Diksha/react/mui/src/app.js";

console.log("1️⃣ dirname:", path.dirname(filePath));
console.log("2️⃣ basename:", path.basename(filePath));
console.log("3️⃣ extname:", path.extname(filePath));
console.log("4️⃣ join:", path.join("folder", "subfolder", "file.txt"));
console.log("5️⃣ resolve:", path.resolve("app.js"));

console.log("6️⃣ parse:", path.parse(filePath));