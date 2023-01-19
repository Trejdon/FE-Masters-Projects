// CHALLENGE 1
function createFunction() {
    return function createdFunction () {
        console.log("hello");
    }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
    return function printer () {
        console.log(input)
    };
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
        counter ++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();


function addByX(x) {
    return function (num) {
        console.log(num + x);
    }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
    let counter = 0;
    let output;
    const inner = function(input) {
        if (counter === 0) {
            output = func(input)
            counter++;
            return output;
        } else {
            counter++;
            return output;
        }
    }
    return inner;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
    let runningTotalRuns = 1;

    const runner = function () {
        if (runningTotalRuns === count) {
            func();
        }

        runningTotalRuns++;
        return;
    }

    return runner;
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait, ...args) {
        setTimeout(func(...args), wait);
    }


// CHALLENGE 7
function rollCall(names) {
    let runningTotalRuns = 1;
    const announce = () => {
        if (!(runningTotalRuns > names.length)) {
            console.log(names[runningTotalRuns-1])
        } else {
            console.log("Everyone accounted for")
        }
        runningTotalRuns++;
    }

    return announce;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
    const outputHistory = {}

    const getOutput = (value) => {
        if (value === magicWord) {
            console.log({ outputHistory })
        } else {
            const output = func(value)
            outputHistory[value] = output;
            console.log({output})
        }
    }

    return getOutput;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
    let cycleCount = 0;

    const iterator = () => {
        const iteration = cycleCount % array.length;
        console.log({output: array[iteration]})
        cycleCount++
    }

    return iterator;
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
    const args = [arg];

    const inner = (arg) => {
        if (!(args[0] === arg)) {
            args.push(arg)
            console.log({output: func(...args)})
        }
    }

    return inner;
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
    const stampedObj = {}
    const stamper = (value) => {
        stampedObj.date = new Date().toDateString()
        stampedObj.output = func(value)
        return stampedObj;
    }

    return stamper;

}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
    const censoredPairs = [];

    const cernsorship = (...args) => {
        const isSingle = args.length === 1;
        let output = args[0]

        if(!isSingle) {
            censoredPairs.push(args)
        } else {
            for(const pair of censoredPairs) {
                output = output.replace(pair[0], pair[1])
            }

            return output;
        }
    }

    return cernsorship;
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
    const returnObj = {
        getSecret() { return secret},
        setSecret(value) { secret = value}
    }

    return returnObj;

}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
console.log(obj.setSecret(2))
console.log(obj.getSecret()) // => returns 2



// CHALLENGE 14
function callTimes() {
    let timesRun = 0;

    const runnings = () => {
        timesRun++;
        return timesRun
    }

    return runnings;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2


// CHALLENGE 15
function roulette(num) {
    const win = num;
    const resultMap = {
        spin: "spin",
        win: "win",
        again: "pick a number to play again"
    }
    let round = 1;

    const spin = () => {
        if (round === win) {
            round++;
            return resultMap.win;
        } else if (round < win) {
            round++;
            return resultMap.spin;
        } else {
            return resultMap.again;
        }
    }

    return spin;
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
    const numbers = [];

    const calculateAverage = (num) => {
        const isNumber = !isNaN(num)

        if (isNumber) {
            numbers.push(num);
            const sum = numbers.reduce((acc, curr) => acc + curr, 0)
            return sum / numbers.length;
        } else {
            if (numbers.length === 0) {
                return 0;
            }
            const sum = numbers.reduce((acc, curr) => acc + curr, 0)
            return sum / numbers.length;
        }
    }

    return calculateAverage;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
    const tester = (callback) => {
        const results = [];

        for(let test of arrOfTests) {
            callback(test[0]) === test[1] ? results.push(true) : results.push(false)
        }

        return !results.includes(false)
    }

    return tester;
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
    const historyArr = [];
    const DONE = "done";
    const UNDO = "undo";
    const UNDONE = "undone";

    const historian = (action) => {
        if (action === UNDO) {
            if (historyArr.length === 0) {
                return "nothing to undo";
            } else {
                const removed = historyArr.pop();
                return `${removed} ${UNDONE}`
            }
        } else {
            if (historyArr.length === limit) {
                historyArr.shift();
                historyArr.push(action);
                return `${action} ${DONE}`
            } else {
                historyArr.push(action);
                return `${action} ${DONE}`
            }
        }
    }

    return historian;

}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
// Regular solution
// function blackjack(array) {
//     let dealt = false;
//     let runningTotal = 0;
//     let busted = false;
//     const dealer = (num1, num2) => {
//         const player = () => {
//             if (busted) {
//                 return "you are done!"
//             }
//             if (!dealt) {
//                 dealt = true;
//                 runningTotal = num1 + num2;
//                 console.log({ runningTotal})
//                 return runningTotal;
//             } else {
//                 const card = array.shift();
//                 runningTotal += card;

//                 if (runningTotal > 21) {
//                     busted = true;
//                     return "bust";
//                 } else {
//                     return runningTotal;
//                 }
//             }
//         }

//         return player;
//     }

//     return dealer;
// }

// BONUS solution 
function blackjack(array) {
        const players = [];
        let currentPlayer;

        const dealer = (num1, num2) => {
            currentPlayer === undefined ? currentPlayer = 0 : currentPlayer++
            players.push({
                total: num1 + num2,
                dealt: false,
                busted: false,
            })
            const player = () => {
                const player = players[currentPlayer];
                if (player.busted) {
                    return "you are done!"
                }
                if (!player.dealt) {
                    player.dealt = true;
                    return player.total;
                } else {
                    const card = array.shift();
                    player.total += card;
    
                    if (player.total > 21) {
                        player.busted = true;
                        return "bust";
                    } else {
                        return player.total;
                    }
                }
            }
            
            return player;
        }
    
        return dealer;
    }

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
