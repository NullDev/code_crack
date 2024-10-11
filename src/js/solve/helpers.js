class Helpers {
    /**
     * Check if a code satisfies a clue
     *
     * @param {Array<[number, number, number]>} code
     * @param {Array<[number, number, number]>} clueDigits
     * @param {string} constraint
     * @return {Boolean}
     * @memberof Helpers
     */
    static #satisfiesClue(code, clueDigits, constraint){
        let correctInPlace = 0;
        let correctWrongPlace = 0;

        const codeCopy = code.slice();
        const clueCopy = clueDigits.slice();

        for (let i = 0; i < 3; i++){
            if (codeCopy[i] === clueCopy[i]){
                correctInPlace++; // @ts-ignore
                codeCopy[i] = clueCopy[i] = null;
            }
        }

        for (let i = 0; i < 3; i++){
            if (clueCopy[i] !== null){
                const index = codeCopy.indexOf(clueCopy[i]);
                if (index !== -1){
                    correctWrongPlace++; // @ts-ignore
                    codeCopy[index] = null;
                }
            }
        }

        switch (constraint){
            case "nothingCorrect":
                return correctInPlace === 0 && correctWrongPlace === 0;
            case "oneCorrectWrongPos":
                return correctInPlace === 0 && correctWrongPlace === 1;
            case "twoCorrectWrongPos":
                return correctInPlace === 0 && correctWrongPlace === 2;
            case "oneCorrectRightPos":
                return correctInPlace === 1 && correctWrongPlace === 0;
            default:
                return false;
        }
    }

    /**
     * Check if a code satisfies all clues
     *
     * @param {Array<[number, number, number]>} code
     * @param {{
     *   oneCorrectWrongPos: Array<Array<[number, number, number]>>,
     *   twoCorrectWrongPos: Array<Array<[number, number, number]>>,
     *   oneCorrectRightPos: Array<Array<[number, number, number]>>,
     *   oneCorrectWrongPos2: Array<Array<[number, number, number]>>,
     *   nothingCorrect: Array<Array<[number, number, number]>>,
     * }} inputs
     * @return {boolean}
     * @memberof Helpers
     */
    static isValid(code, inputs){
        for (const clue of inputs.nothingCorrect){
            if (!this.#satisfiesClue(code, clue, "nothingCorrect")){
                return false;
            }
        }

        for (const clue of inputs.oneCorrectWrongPos.concat(inputs.oneCorrectWrongPos2)){
            if (!this.#satisfiesClue(code, clue, "oneCorrectWrongPos")){
                return false;
            }
        }

        for (const clue of inputs.twoCorrectWrongPos){
            if (!this.#satisfiesClue(code, clue, "twoCorrectWrongPos")){
                return false;
            }
        }

        for (const clue of inputs.oneCorrectRightPos){
            if (!this.#satisfiesClue(code, clue, "oneCorrectRightPos")){
                return false;
            }
        }
        return true;
    }
}

export default Helpers;
