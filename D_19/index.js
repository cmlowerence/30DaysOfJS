// D_19 Closures

/* JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variable of outer function then it is called closure. */

{
    function outerFunction() {
        let count = 0;
        function innerFunction() {
            count++
            return count
        }
        return innerFunction
    }
    const innerFunc = outerFunction()
    console.log(innerFunc())
    console.log(innerFunc())
    console.log(innerFunc())
}

// more Examples of inner functions 
{
    function outerFunction() {
        let count = 0;
        function plusOne() {
            count++
            return count
        }
        function minusOne() {
            count--
            return count
        }
        return {
            plusOne: plusOne(),
            minusOne: minusOne()
        }
    }
    const innerFuncs = outerFunction()
    console.log(innerFuncs.plusOne)
    console.log(innerFuncs.minusOne)
}

// Exercises

{
    // Exercise Level 1
    {
        const Q_1 = 'Create a closure which has one inner function'
        console.log('%cindex.js line:48 Q_1', 'color: white; background-color: #007acc;', Q_1);

        {
            function score() {
                let score = 0
                function addLv1Score() {
                    score = score += 100
                    return score
                }
                return {
                    addScore: addLv1Score
                }
            }
            let player = score()
            console.log(player.addScore())
            console.log(player.addScore())
        }
    }

    // Exercise Level 2
    {
        const Q_1 = 'Create a closure which has three inner functions'
        console.log('%cindex.js line:70 Q_1', 'color: white; background-color: #007acc;', Q_1);

        {
            function upperFunction(initial = 0) {
                let total = initial;
                function add(num) {
                    total += num
                    return total
                }
                function subtract(num) {
                    total -= num
                    return total
                }
                function reset() {
                    total = initial
                    return total
                }

                return {
                    add: add,
                    subtract: subtract,
                    reset: reset
                }

            }
        }

        let calc = upperFunction()
        console.log(calc.add(45))
        console.log(calc.subtract(10))
        console.log(calc.add(45))
    }

    // Exercise Level 3
    {
        const Q_1 = 'Create a personAccount out function, It has firstName, lastName, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expense is also a set of expenses and its description.'

        console.log('%cindex.js line:107 Q_1', 'color: white; background-color: #007acc;', Q_1);
        {
            function personAccount(firstName = 'Default', lastName = 'Default') {
                let incomes = new Object();
                let totalInc = 0;
                let totalExp = 0;
                let expenses = new Object();
                
                function totalIncome() {

                    console.log('=============== totalIncome function ================')
                    for (const income in incomes) {
                        totalInc += incomes[income]
                    }
                    console.log('✌️incomes --->', incomes);
                    console.log('✌️totalInc --->', totalInc);
                    console.log('✌️totalExp --->', totalExp);
                    console.log('✌️expenses --->', expenses);
                    return totalInc
                }
                function totalExpense() {
                    console.log('=============== totalExpense function ================')

                    for (const expense in expenses) {
                        totalExp += expenses[expense]
                    }
                    console.log('✌️incomes --->', incomes);
                    console.log('✌️totalInc --->', totalInc);
                    console.log('✌️totalExp --->', totalExp);
                    console.log('✌️expenses --->', expenses);
                    return totalExp
                }
                function accountInfo() {
                    console.log('=============== accountInfo function ================')

                    console.log('✌️incomes --->', incomes);
                    console.log('✌️totalInc --->', totalInc);
                    console.log('✌️totalExp --->', totalExp);
                    console.log('✌️expenses --->', expenses);
                    return `The account belongs to ${firstName} ${lastName}. The user have $${totalIncome()} of income and $${totalExpense()} of expense per month. The total balance remained in the user account is $${accountBalance()}`
                }
                function addIncome(inc = {}) {
                    console.log('=============== addIncome function ================')

                    for (const key in inc) {
                        incomes[key] = inc[key]
                    }
                    console.log('✌️incomes --->', incomes);
                    console.log('✌️totalInc --->', totalInc);
                    console.log('✌️totalExp --->', totalExp);
                    console.log('✌️expenses --->', expenses);
                    return incomes
                }
                function addExpense(exp = {}) {
                    console.log('=============== addExpense function ================')

                    for (const key in exp) {
                        expenses[key] = exp[key]
                    }
                    console.log('✌️incomes --->', incomes);
                    console.log('✌️totalInc --->', totalInc);
                    console.log('✌️totalExp --->', totalExp);
                    console.log('✌️expenses --->', expenses);
                    return expenses
                }
                function accountBalance() {
                    console.log('=============== accountBalance function ================')

                    console.log('✌️incomes --->', incomes);
                    console.log('✌️totalInc --->', totalInc);
                    console.log('✌️totalExp --->', totalExp);
                    console.log('✌️expenses --->', expenses);
                    return totalIncome() - totalExpense()
                }
                console.log('=============== out function ================')

                console.log('✌️incomes --->', incomes);
                console.log('✌️totalInc --->', totalInc);
                console.log('✌️totalExp --->', totalExp);
                console.log('✌️expenses --->', expenses);
                return {
                    totalIncome: totalIncome(),
                    totalExpense: totalExpense(),
                    accountInfo: accountInfo(),
                    addIncome: addIncome,
                    addExpense: addExpense,
                    accountBalance: accountBalance()
                }
            }
            const neha = personAccount('Neha', 'Bhardwaj')
            neha.addIncome({
                Job: 500
            })
            console.log(neha.totalIncome)

        }
    }
}