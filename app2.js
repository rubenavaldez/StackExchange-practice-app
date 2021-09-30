const StackExchange = require('stackexchange-api')
StackExchange.search({ // Equivalent to the /search endpoint. Go to https://paul-soporan.github.io/stackexchange-api/classes/stackexchange.html#search for details.
    inTitle: 'nodejs',
    site: 'stackoverflow'
}).then((result) => {
    console.log(result);
    // Output: Wrapper<Question>
    console.log(result.items);
    // Output: an array of Questions (Question[])
    console.log(result.items[0]);
    // Output: the first Question
    console.log(result.items[0].viewCount);
    // Output: the view count of the first Question
});