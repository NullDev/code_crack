import "../scss/app.scss";
import initPinContainers from "./util/initPinContainers.js";
import solver from "./solve/solver.js";

/**
 * Solve the puzzle
 *
 * @returns {void}
 */
const solve = function(){
    const resultElement = /** @type {HTMLSpanElement} */ (document.getElementById("result"));
    if (resultElement === null) return;

    const result = solver();
    resultElement.innerHTML = result;
};

(() => {
    document.addEventListener("DOMContentLoaded", function(){
        initPinContainers();
        document.getElementById("crack")?.addEventListener("click", solve);
    });
})();
