// File: dnsFunctions.js
const dns = require('dns');

dns.lookup('www.google.com', (err, address) => {
  console.log("1️⃣ lookup():", address);
});

dns.resolve4('www.google.com', (err, addresses) => {
  console.log("2️⃣ resolve4():", addresses);
});

dns.reverse('8.8.8.8', (err, hostnames) => {
  console.log("3️⃣ reverse():", hostnames);
});
