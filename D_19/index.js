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
                    for (const income in incomes) {
                        totalInc += incomes[income]
                    }
                    return totalInc
                }
                function totalExpense() {
                    for (const expense in expenses) {
                        totalExp += expenses[expense]
                    }
                    return totalExp
                }
                function accountInfo() {
                    return `The account belongs to ${firstName} ${lastName}. The user have $${totalIncome()} of income and $${totalExpense()} of expense per month. The total balance remained in the user account is $${accountBalance()}`
                }
                function addIncome(inc = {}) {
                    for (const key in inc) {
                        incomes[key] = inc[key]
                    }
                    return incomes
                }
                function addExpense(exp = {}) {
                    for (const key in exp) {
                        expenses[key] = exp[key]
                    }
                    return expenses
                }
                function accountBalance() {
                    return totalIncome() - totalExpense()
                }
                return {
                    totalIncome: totalIncome,
                    totalExpense: totalExpense,
                    accountInfo: accountInfo,
                    addIncome: addIncome,
                    addExpense: addExpense,
                    accountBalance: accountBalance
                }
            }
            const neha = personAccount('Neha', 'Bhardwaj')
            neha.addIncome({
                Job: 500
            })
            console.log(neha.totalIncome())


            {
                function khumesh(firstName = 'Default', lastName = 'Default') {
                    let incomes = {};
                    let expenses = {};
                    let totalIncome = 0;
                    let totalExpense = 0

                    function calcTotal(obj) {
                        return Object.values(obj).reduce((acc, val) => acc + val, 0)
                    }
                    function accountBalance() {
                        return totalIncome - totalExpense
                    }
                    return {
                        firstName: firstName,
                        lastName: lastName,
                        totalIncome: () => { return totalIncome },
                        totalExpense: () => { return totalExpense },
                        accountBalance: accountBalance,
                        accountInfo: () => {
                            return `Account: ${firstName} ${lastName}\nTotal Incomes: ${totalIncome}\nTotal Expenses: ${totalExpense}\nAccount Balance: ${accountBalance()}`
                        },
                        addIncome: (income) => {
                            Object.assign(incomes, income); totalIncome = calcTotal(incomes)
                        },
                        addExpense: (expense) => {
                            Object.assign(expenses, expense); totalExpense = calcTotal(expenses)
                        }
                    }
                }
                console.log('Alternative function:----- ');
                let neha = khumesh('Neha', 'Kumari')
                neha.addIncome({
                    Job: 500,
                    Perks: 200
                })
                neha.addExpense({
                    Lifestyle: 400
                })
                console.log(neha.accountInfo())
            }

        }
    }
}