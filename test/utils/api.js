// const got = require("got");
const axios = require("axios");

class Api {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    });
  }

  getAuthToken({ email, password }) {
    return this.api
      .post("/users/login", { user: { email, password } })
      .then((res) => res.data.user.token);
  }

  async createArticle(user, details) {
    const token = await this.getAuthToken(user);
    const response = await this.api.post("articles", {
      json: {
        article: details,
      },
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.body.article;
  }

  async getAllTags() {
    const response = await this.api.get("./api/tags");
    console.log("The response is ", response);
    return response.body.tags;
    // http://localhost:3000/api/tags
    // {
    //   "tags": [
    //     "ceroija",
    //     "liv"
    // ]
    // }
  }
}

module.exports = Api;
/*
  (async () => {
	const {body} = await got.post('https://httpbin.org/anything', {
		json: {
			hello: 'world'
		},
		responseType: 'json'
	});

	console.log(body.data);
	//=> {hello: 'world'}
})();
  */
