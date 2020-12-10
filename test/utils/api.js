const got = require("got");

class Api {
  constructor(prefixUrl) {
    this.client = got.extend({
      prefixUrl,
      responseType: "json",
    });
  }

  getAuthToken({ email, password }) {
    return this.client
      .post("./users/login", {
        json: { user: { email, password } },
      })
      .then((response) => response.body.user.token);
  }

  async getAllTags() {
    // http://localhost:3000/api/tags
    // {
    //   "tags": [
    //     "ceroija",
    //     "liv"
    // ]
    // }

    // const { body } = this.client.get("./api/tags").json();
    // return body.tags;

    const response = await got("./api/tags");
    console.log("The response is ", response);
    return response.body.tags;
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
