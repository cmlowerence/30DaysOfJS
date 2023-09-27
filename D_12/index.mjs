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
            const pattern = /[a]./g  // here square Bracket means a and . means any character except new line.
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

        // Zero or more times (*)
        {
            const pattern = /[a].*/g //. any character except new line, * means any character zero or more times
            const txt = 'Apple and banana are fruits';
            const matches = txt.match(pattern);
            console.log('%cindex.mjs line:211 matches', 'color: #26bfa5;', matches);
        }

        // Zero or One time (?)
        {
            const txt = 'I am not sure if there is a convention how to write the word e-mail.\
            Some people write it email other may write it as Email or E-mail. ';
            const pattern = /[Ee]-?mail/g;//? means '-' is optional
            const matches = txt.match(pattern);
            console.log('%cindex.mjs line:220 matches', 'color: #26bfa5;', matches);
        }

        // Quantifier in RegExp
        {
            const text = 'This regular expression example was made in September 26, 2023'
            const pattern = /\b\w{4}\b/g; // using \b on both sides bounds the word with 4 letters in it
            const matches = text.match(pattern);
            console.log('%cindex.mjs line:228 matches', 'color: #26bfa5;', matches);

            // Another example
            {
                const pattern = /\b[a-zA-Z]{4}\b/g; // Exactly 4 character words without numbers
                const matches = text.match(pattern);
                console.log('%cindex.mjs line:234 matches', 'color: #fff;', matches);
            }

            // Another
            {
                const pattern = /\d{1,4}/g; // numbers with 1 to 4 digits in it
                const matches = text.match(pattern);
                console.log('%cindex.mjs line:241 matches', 'color: #26bfa5;', matches);
            }

            // Cart (^)
            {

                // Starts with
                {
                    const txt = 'This regular expression example was made in September 27, 2023.';
                    const pattern = /^This/g; // ^ means starts with
                    const matches = txt.match(pattern);
                    console.log('%cindex.mjs line:249 matches', 'color: #f00;', matches);
                }

                // Negation
                {
                    const txt = 'This regular expression example was made in September 27, 2023';
                    const pattern = /[^A-Za-z,. ]+/g; // Here ^ means not A to Z, not a to z, no space, no comma, no period
                    const matches = txt.match(pattern);
                    console.log('%cindex.mjs line:260 matches', 'color: #f00;', matches);
                }
            }

            // Exact match
            {
                // We can use both ^, which will give us starting, and $, which will give us ending
                {
                    let pattern = /^[A-Z][a-z]{3,12}$/;
                    let name = 'Chudamani';
                    let result = pattern.test(name);
                    console.log('%cindex.mjs line:271 result', 'color: #f00;', result);
                }
            }
        }
    }
}

// <===================== Exercise ==========================>
{
    // 💻 Exercise Level 1
    {
        // Q1_ Calculate the total annual income of the person from the following text.
        // 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
        console.log('%cindex.mjs line: 284 Q1_ Calculate the total annual income of the person from the following text.');

        {
            const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
            const salary = txt.match(/\d+/g);
            console.log('salary array', salary);
            for (let i = 0; i < salary.length; i++) {
                salary[i] = parseInt(salary[i], 10);
            }
            console.log('%cindex.mjs line:293 salary', 'color: #26bfa5;', salary);
            const total = (...args) => {
                let total = 0;
                for (const num of args) {
                    total += num
                }
                return total;
            }
            console.log(total(...salary))
        }

        const Q2_ = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles';
        console.log('%cindex.mjs line:305 Q2_', 'color: #26bfa5;', Q2_);

        {
            // Filtering out the numbers
            const numList = Q2_.match(/-?\d+/g);
            for (let i = 0; i < numList.length; i++) {
                numList[i] = parseInt(numList[i], 10);
            }
            console.log('%cindex.mjs line:310 numList', 'color: #26bfa5;', numList);

            // Sorting in ascending order...
            const sortedPoints = numList.sort((a, b) => a - b);
            console.log('%cindex.mjs line:315 sortedPoints', 'color: #26bfa5;', sortedPoints);

            // Distance between most distant points (i.e first and last point in sorted list)
            const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
            console.log('%cindex.mjs line:321 distance', 'color: #26bfa5;', distance);
        }
        
        const Q3_ = 'Write a pattern which identify if a string is a valid JavaScript variable or not';

        console.log('%cindex.mjs line:326 Q3_', 'color: #26bfa5;', Q3_);
        {
            // Function for a valid variable
            const is_valid_variable = (variable)=>{
                // This regex is covered by ^ and $ means all the inner conditions must fulfill to make the test true. In a variable there is alphabets, numbers(but not at first) and underscores and also dollar sign. All these are given here
                return /^[A-Za-z_$][a-zA-Z0-9_$]*$/.test(variable)
            }
            console.log('%cindex.mjs line:331 is_valid_variable("_name")', 'color: #26bfa5;', is_valid_variable("_name"));
            console.log('%cindex.mjs line:331 is_valid_variable("0name")', 'color: #26bfa5;', is_valid_variable("0name"));
            console.log('%cindex.mjs line:331 is_valid_variable("$name")', 'color: #26bfa5;', is_valid_variable("$name"));
            console.log('%cindex.mjs line:331 is_valid_variable("my-name")', 'color: #26bfa5;', is_valid_variable("my-name"));
        }
        
    }
    // Level 2
    console.log('\n\nLevel 2 Exercise\n')
    {
        const Q1_ = 'Write a function called tenMostFrequentWords which get the ten most frequent word fro a string';
        const paragraph = 'I love teaching. If you don not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
        
        console.log('%cindex.mjs line:327 Q1_', 'color: #26bfa5;', Q1_);
        const tenMostFrequentWords = (paragraph, topWords) => 
        {
            const wordList = paragraph.match(/\b\w+\b/g);
            const wordSet = new Set(wordList);
            const wordCountList = [];
            wordSet.forEach(e => {
                let count = 0;
                let sameWord = wordList.filter(a => a === e);
                let list = [['word', e], ['count', sameWord.length]]
                wordCountList.push(list);
            })
            let sortedArr = wordCountList.sort((a, b) => b[1][1] - a[1][1]);
        
            // Array in object format
            const formatList = [];
            sortedArr.forEach(e => {
                let obj = Object.fromEntries(e);
                formatList.push(obj);
            })
        
            return formatList.slice(0,topWords);
        }
        console.log('%cindex.mjs line:350 tenMostFrequentWords(paragraph,10)', 'color: #26bfa5;', tenMostFrequentWords(paragraph,10));
    }
}