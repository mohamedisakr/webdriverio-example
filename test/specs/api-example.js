const Api = require("../utils/api");

(async () => {
  const api = new Api("http://localhost:3000/api/");
  const token = await api.getAuthToken({
    email: "demowdio@learnwebdriverio.com",
    password: "wdiodemo",
  });
  console.log(token);
})();
