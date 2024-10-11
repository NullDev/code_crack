import getInputs from "../util/getInputs.js";
import Helpers from "./helpers.js";

/**
 * Solve the puzzle
 *
 * @returns {string}
 */
const solver = function(){
    const inputs = getInputs();
    const {
        oneCorrectWrongPos,
        twoCorrectWrongPos,
        oneCorrectRightPos,
        oneCorrectWrongPos2,
        nothingCorrect,
    } = inputs;

    const notInCodeSet = new Set();
    for (const clue of nothingCorrect){
        for (const digit of clue){
            notInCodeSet.add(digit);
        }
    }

    const allClueDigits = new Set();
    const clues = [oneCorrectWrongPos, twoCorrectWrongPos, oneCorrectRightPos, oneCorrectWrongPos2];
    for (const clueGroup of clues){
        for (const clue of clueGroup){
            for (const digit of clue){
                if (!notInCodeSet.has(digit)){
                    allClueDigits.add(digit);
                }
            }
        }
    }

    const possibleDigits = Array.from(allClueDigits);

    const generatedCodes = [];
    for (let i = 0; i < possibleDigits.length; i++){
        for (let j = 0; j < possibleDigits.length; j++){
            for (let k = 0; k < possibleDigits.length; k++){
                const code = [possibleDigits[i], possibleDigits[j], possibleDigits[k]];
                generatedCodes.push(code);
            }
        }
    }

    for (const code of generatedCodes){
        if (Helpers.isValid(code, inputs)){
            return code.join("");
        }
    }

    return "";
};

export default solver;
