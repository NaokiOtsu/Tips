const URL = "https://auth.login.yahoo.co.jp/yconnect/v2/token";
const CLIENT_ID = "dj00aiZpPUZqQnR3bzAwWWlNSiZzPWNvbnN1bWVyc2VjcmV0Jng9NDM-";
const CLIENT_SECRET = "cwcxNPEFLBamqb0NQkBZVkr5zGHiszN9EVXbW76B";
const REDIRECT_URI = "http://localhost:3000/hoge.html";
const code = location.search.slice(-8);
const base64 = window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
console.log(base64);

fetch(URL, {
  method: "post",
  mode: "cors",
  credentials: "include",
  headers: {
    Authorization: `Basic ${base64}`,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: `grant_type=authorization_code&redirect_uri=${REDIRECT_URI}&code=${code}`
  // body: JSON.stringify({
  //   grant_type: "authorization_code",
  //   client_id: CLIENT_ID,
  //   client_secret: CLIENT_SECRET,
  //   redirect_uri: REDIRECT_URI,
  //   code: code
  // })
}).then(function(res) {
  console.log(res);
});
