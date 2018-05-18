
exports.seed = function(knex, Promise) {
  return knex('Servers').del()
    .then(function () {
      return knex('Servers').insert([
        {id: 1, title: 'Express Request Docs', body: '', link: 'http://expressjs.com/en/api.html#req', tags: '', notes: 'Express documentation on requests and responses'},
        {id: 2, title: 'Deploying to Heroku', body: '', link: 'https://devcenter.heroku.com/articles/git#tracking-your-app-in-git', tags: '', notes: 'Tutorial for deploying servers to Heroku'},
        {id: 3, title: '5 ways to make HTTP reqs', body: '', link: 'https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html', tags: 'blog', notes: 'Tutorial for 5 different ways to make HTTP requests in Node.js'}
      ]);
    });
};
