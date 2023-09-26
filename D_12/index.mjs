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

        let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
        console.log(matchReplaced);
        {
            const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
            const matches = txt.replace(/%/g, '')
            console.log(matches);
        }
    }

    // Some regExp operators which will help to build patterns
    /* 
    => [] : Set of characters as:
        * [a-z]: This will cover all the letters from a to z
        * [a-c]: This will cover all alphabets from a to c (i.e. a,b,c)
        * [A-Z]: This will cover all letters from A to Z
        * [0-3]: All numbers from 0 to 3 (0,1,2,3)
        * [0-9]: All numbers form 0 to 9
        * [a-zA-Z0-9]: Any letters or numbers from a to z and A to Z and 0 to 9
    
    => \ : Use of escape special character as:
        * \d mean: match where the string contains digits (numbers from 0 to 9)
        * \D mean: match where the string does not contain digits
    
    => . : Any character except new line character (\n)

    => ^ : Starts with symbol as:
        * r'^substring', for example r'^love', this regex mean a sentence which starts with a word "love".
        * r'[^abc]' mean not a, not b, not c.
    
    => $ : Ends with symbol as:
        * r'substring$', eg. r'love$', sentence ends with a word love.

    => * : Zero or more times
        * : r'[a]*' means 'a' is optional or it can occur many times.

    => + : One or more times as
        * r'[a]+' means occurrence of 'a' at least once or more times.

    => ? : Zero or one times
        * r'[a]?' means occurrence of 'a' zero times or once

    => \b : word bounder, matches with the beginning or ending of a word.

    => {3} : Exactly 3 characters

    => {3,} : At least 3 characters i.e 3 or more characters

    => {3,8} : 3 to 8 characters

    => | : Either Or as:
        * r'apple|banana' means either of an apple or a banana

    => () : Capture and group
    */

    // Let us use the above metadata
    {
        // Square Bracket
        console.log('\n\n\n================== Square Bracket ===================\n\n');
        {
            let pattern = '[Aa]pple'// means either A or a
            let text = 'Apple and banana are fruits. An old cliche says an apple a day keeps the doctor away has been replaced by a banana a day keeps the doctor far far away.'
            let matches = text.match(pattern)
            console.log('✌️matches --->', matches);

            let pattern1 = /[Aa]pple/g
            let matches1 = text.match(pattern1);
            console.log('✌️matches --->', matches1);

            // if we want to look up for banana also then we can do like:
            {
                const pattern = /[Aa]pple|[Bb]anana/g
                const text = 'Apple and banana are fruits. An old cliche says an apple a day keeps the doctor away has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
                const matches = text.match(pattern);
                console.log('✌️matches --->', matches);

            }
        }

        // Escape character (\) in RegExp
        {
            const pattern = /\d/g;
            const text = 'This regular expression example was made in January 12, 2020.'
            const matches = text.match(pattern)
            console.log('%cindex.mjs line:172 matches', 'color: #26bfa5;', matches);
            // This will give the list with all single digits which we don't want, so 
            {
                const matches = text.match(/\d+/g);
                console.log('%cindex.mjs line:176 matches', 'color: #26bfa5;', matches);
            }
        }

        // One or more times (+)
        console.log('\n\n✌️One or more times (+) --->\n');
        {
            const pattern = /\d+/g  // '/d' means digits
            const text = 'This regular expression example was made in January 12, 2020.';
            const matches = text.match(pattern);
            console.log('%cindex.mjs line:186 matches', 'color: #26bfa5;', matches);
        }

        // Period (.)
        console.log('\n\n✌️Period (.) --->\n');

        {
            const pattern= /[a]./g  // here square Bracket means a and . means any character except new line.
            const text = 'Apple and banana are fruits.'
            const matches = text.match(pattern);
            console.log('%cindex.mjs line:196 matches', 'color: #26bfa5;', matches);

            // Using . and +
            {
                const pattern = /[a].+/g;
                const matches = text.match(pattern);
                console.log('%cindex.mjs line:202 matches', 'color: #26bfa5;', matches);
            }
        }
    }
}