/**
 * Initialize the pin containers and handles the keyup and keydown events
 *
 * @returns {void}
 */
const initPinContainers = function(){
    const pinContainers = /** @type {NodeListOf<HTMLDivElement>} */ (
        document.querySelectorAll(".pin")
    );

    pinContainers.forEach(pinContainer => {
        pinContainer.addEventListener("keyup", function(event){
            const t = /** @type {HTMLInputElement|null} */(event.target);

            const maxLength = Number(t?.maxLength);
            const myLength = t?.value.length || 0;

            if (myLength >= maxLength){
                let next = t;
                // eslint-disable-next-line no-cond-assign
                while (next = /** @type {HTMLInputElement|null} */ (
                    next?.nextElementSibling
                )){
                    if (next === null) break;
                    if (next.tagName.toLowerCase() === "input"){
                        next.focus();
                        break;
                    }
                }
            }

            if (myLength === 0){
                let next = t;
                // eslint-disable-next-line no-cond-assign
                while (next = /** @type {HTMLInputElement|null} */ (
                    next?.previousElementSibling
                )){
                    if (next === null) break;
                    if (next.tagName.toLowerCase() === "input"){
                        next.focus();
                        break;
                    }
                }
            }
        }, false);

        pinContainer.addEventListener("keydown", function(event){
            const t = /** @type {HTMLInputElement|null} */(event.target);
            if (event.key === "Tab") return;
            if (!!t) t.value = "";
        }, false);
    });
};

export default initPinContainers;
