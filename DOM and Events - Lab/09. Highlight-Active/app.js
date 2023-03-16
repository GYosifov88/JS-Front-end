function focused() {
    const inputArray = Array.from(document.querySelectorAll('input'));

    for (const input of inputArray) {
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);
    }

    function focusHandler(e){
        let input = e.currentTarget;
        let divParent = input.parentElement;
        divParent.className = 'focused';
    }

    function blurHandler(e){
        let input = e.currentTarget;
        let divParent = input.parentElement;
        divParent.className = '';
    }
}