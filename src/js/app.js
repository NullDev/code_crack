import "../scss/app.scss";
import initPinContainers from "./util/initPinContainers.js";
import solver from "./solve/solver.js";

/**
 * Set the current year in the footer
 *
 * @return {void}
 */
const copyrightYear = function(){
    const yearElement = /** @type {HTMLSpanElement} */ (document.getElementById("y"));
    if (!yearElement) return;

    const currentYear = new Date().getFullYear();
    yearElement.innerText = String(currentYear);
};

/**
 * Solve the puzzle
 *
 * @return {void}
 */
const solve = function(){
    const resultElement = /** @type {HTMLSpanElement} */ (document.getElementById("result"));
    if (!resultElement) return;

    const result = solver();
    resultElement.innerHTML = result;
};

(() => {
    document.addEventListener("DOMContentLoaded", function(){
        initPinContainers();
        copyrightYear();
        document.getElementById("crack")?.addEventListener("click", solve);
    });
})();
