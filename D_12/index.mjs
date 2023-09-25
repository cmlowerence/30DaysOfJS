import countries from './countries_data.mjs'
// Regular Expressions
console.log('Regular Expressions')

// Creating a pattern with RegExp constructor
{
    // Declaring regular expression without global flag and case insensitive flag
    {
        let pattern = 'love';
        let regEx = new RegExp(pattern);
    }
    // Declaring regular expression with global flag and case insensitive flag
    {
        let pattern = 'love';
        let flag = 'gi';
        let regEx = new RegExp(pattern, flag)
    }
    // Declaring a regex pattern using RegExp object. Writing flag and pattern inside the object
    {
        let regEx = RegExp('love', 'gi');
    }
}
// Creating a pattern without RegExp constructor
{
    // Declaring regular expression with global flag and case insensitive flag
    {
        let regEx = /love/gi // Similar to above created regEx
    }
}

// RegExp Object Methods
{
    // Testing for a match
    console.log('Testing for a match')

    // test(): Tests for a match in a string. It return bool value
    {
        const str = 'I love JavaScript';
        const pattern = /love/;
        const res = pattern.test(str)
        console.log(res)
    }

    // Array containing all of the match
    console.log('\n\nArray containing all of the match\n')

    // match(): Return an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
    {
        // without giving flags
        console.log('\n\nwithout giving flags\n');

        {
            const str = 'I love JavaScript'
            const pattern = /love/;
            const res = str.match(pattern)
            console.log(res)
        }
        // with flags
        console.log('\n\nwith flags\n');
        {
            const str = 'I love JavaScript';
            const pattern = /love/g
            const res = str.match(pattern);
            console.log(res)
        }
    }

    // search(): Tests for a match in a string. It return the index of the match, or -1 if the search fails.
    {
        const str = 'I love JavaScript';
        const pattern = /love/g;
        const result = str.search(pattern);
        console.log('✌️result --->', result);
    }

    // Replacing a substring
    console.log('\n\nReplacing a substring\n')

    // replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
    {
        const txt = 'Python is the most beautiful language that a human begin has ever created.\
        I recommend python for a first programming language'

        matchReplaced = txt.replace(/Python|python/,'JavaScript')
    }
}