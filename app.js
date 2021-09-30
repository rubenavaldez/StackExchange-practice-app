const axios = require('axios')
require('dotenv').config()
var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = {
  key: process.env.client_key,
  pagesize: 50,
  tagged: 'javascript',
  sort: 'activity',
  order: 'asc'
};

// Get all the questions (http://api.stackexchange.com/docs/questions)
context.questions.questions(filter, function(err, results){
  if (err) throw err;
  
  console.log(results.items);
  console.log(results.has_more);
});

// Get results for a different website within the stackexchange network
filter.site = 'softwareengineering';
context.questions.questions(filter, function(err, results){
  if (err) throw err;
  
  console.log(results.items);
  console.log(results.has_more);
});

// Get all users
context.users.users(filter, function(err, results){
  if (err) throw err;

  console.log(results.items);
  console.log(results.has_more);
});

//console.log(process.env)
//https://api.stackexchange.com/2.2/info?site=stackoverflow&key=app key
// const stackRequest = async (input) => {
//     console.log(input)
//     const instance = axios.create({
//         baseURL: "https://dog.ceo/api/breeds/image/random",
//         timeout: 1000,
//         headers: {
//             'X-Custom-Header': 'foobar'
//         }
//     });

//     let result = await instance.get().then(result => result.data);
//     return result;
// }

// const func = async () => {
//     let ans = await stackRequest("test");
//     console.log(ans)
// }
// console.log(func());