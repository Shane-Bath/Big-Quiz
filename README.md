
https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object?noredirect=1&lq=1
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://stackoverflow.com/questions/29886552/why-are-objects-not-iterable-in-javascripthttps://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
https://stackoverflow.com/questions/69312775/how-do-i-populate-an-array-of-objects-where-every-object-has-an-array-inside-of
https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript?rq=1
https://stackoverflow.com/questions/1996747/add-new-value-to-an-existing-array-in-javascript?noredirect=1&lq=1
https://stackoverflow.com/questions/64121914/pushing-fetched-data-to-array-of-objects
https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript?rq=1
https://stackoverflow.com/questions/68123766/javascript-how-to-push-fetch-data-to-an-array
https://www.youtube.com/watch?v=uxf0--uiX0I
https://www.youtube.com/watch?v=tc8DU14qX6I&t=10s
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://www.youtube.com/watch?v=zgHim4ZDpZY&list=PLJJVMUtpCkXWgmK8ksQGZuhlHXbG2Rlyn&index=21&t=3150s     10:00  1200 26:13
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
https://www.w3schools.com/jsref/prop_style_display.asp
// how to reset the game https://stackoverflow.com/questions/59142915/how-to-get-back-to-the-start-of-the-array-in-javascript
//https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
https://stackoverflow.com/questions/73685477/how-to-include-array-from-a-js-file-into-another-js-file
https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
https://stackoverflow.com/questions/63975194/referenceerror-module-is-not-defined
https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON




    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`)
    .then(response => response.json())
    .then(data => {
        //console.log(data.results); // returning array
        data.results.map(data => {
            let setQuestions = {
                question: data.question
                options:[... data.incorrect_answers]; // array spread operator to divide up into a new array
                 
            };
            console.log(setQuestions)  // returning question: question
        
        ; // splice into options1: etc
        console.log(options);  // returning mix of  'M&amp;M&#039;s' ?!? and clear text?
    });
})
    .catch(error => console.error(error));


//    let questionTransfer = 


//    async function bob(url) {
//     const response = await fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`);
//     let data = await response.json();
//     console.log(data);
    
// }
//  bob(questionTransfer);

// let q = questionTransfer.map(data => {
//     let setQuestions = {
//     "questions": data.results[0].question,
//     "option1": data.results[0].correct_answer,
//     };
//     return setQuestions;
// })
// console.log(q);



// fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`)
  
//             .then(response => response.json())
//             .then(data => {
//             questionTransfer = data;
//             });
// console.log(questionTransfer)
    //  = .Map(({results, question}) => ({
    //     [question]: question}));
    






//08 02 23 hwo to populate the below oject array from api. 
// fetch() and JSON?  map? and Destructuring assignment
// open triva DB API
//"question": "Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?", == question
// "correct_answer": "Ed Sheeran - I See Fire",    == option 1 (or random between 1 - 4 )
// "incorrect_answers": [
// "Marvin Gaye - Sexual Healing", == option (random )
// "Coldplay - Midnight", == option (random )
// "a-ha - Take On Me" == option (random )
// then correct answer to 1-4 