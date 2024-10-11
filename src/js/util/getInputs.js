/**
 * Get the inputs from the user
 *
 * @return {{
*   oneCorrectWrongPos: Array<Array<[number, number, number]>>,
*   twoCorrectWrongPos: Array<Array<[number, number, number]>>,
*   oneCorrectRightPos: Array<Array<[number, number, number]>>,
*   oneCorrectWrongPos2: Array<Array<[number, number, number]>>,
*   nothingCorrect: Array<Array<[number, number, number]>>,
* }}
*/
const getInputs = function(){
    const oneCorrectWrongPos = [];
    const twoCorrectWrongPos = [];
    const oneCorrectRightPos = [];
    const oneCorrectWrongPos2 = [];
    const nothingCorrect = [];

    /** @type {NodeListOf<HTMLInputElement>} */
    (document.querySelectorAll("div#one-correct-wrong-pos input"))
        .forEach((input) => {
            if (input.value === "" || isNaN(Number(input.value))) return;
            oneCorrectWrongPos.push(Number(input.value));
        });

    /** @type {NodeListOf<HTMLInputElement>} */
    (document.querySelectorAll("div#two-correct-wrong-pos input"))
        .forEach((input) => {
            if (input.value === "" || isNaN(Number(input.value))) return;
            twoCorrectWrongPos.push(Number(input.value));
        });

    /** @type {NodeListOf<HTMLInputElement>} */
    (document.querySelectorAll("div#one-correct-right-pos input"))
        .forEach((input) => {
            if (input.value === "" || isNaN(Number(input.value))) return;
            oneCorrectRightPos.push(Number(input.value));
        });

    /** @type {NodeListOf<HTMLInputElement>} */
    (document.querySelectorAll("div#one-correct-wrong-pos-2 input"))
        .forEach((input) => {
            if (input.value === "" || isNaN(Number(input.value))) return;
            oneCorrectWrongPos2.push(Number(input.value));
        });

    /** @type {NodeListOf<HTMLInputElement>} */
    (document.querySelectorAll("div#nothing-correct input"))
        .forEach((input) => {
            if (input.value === "" || isNaN(Number(input.value))) return;
            nothingCorrect.push(Number(input.value));
        });

    // check if all sets have 3 elements
    if (
        oneCorrectWrongPos.length !== 3 ||
        twoCorrectWrongPos.length !== 3 ||
        oneCorrectRightPos.length !== 3 ||
        oneCorrectWrongPos2.length !== 3 ||
        nothingCorrect.length !== 3
    ){
        // eslint-disable-next-line no-alert
        alert("Please enter 3 values in each set");
        throw new Error("Please enter 3 values in each set");
    }

    return {
        oneCorrectWrongPos: [oneCorrectWrongPos],
        twoCorrectWrongPos: [twoCorrectWrongPos],
        oneCorrectRightPos: [oneCorrectRightPos],
        oneCorrectWrongPos2: [oneCorrectWrongPos2],
        nothingCorrect: [nothingCorrect],
    };
};

export default getInputs;
