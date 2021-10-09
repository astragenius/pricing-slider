const slider = document.getElementById('slider');
const price = document.getElementById('price');
const date = document.getElementById('date');
const checkbox = document.getElementById('checkbox');





const pricingBox = (() => {

    function init() {

        date.textContent = "/ month";
        checkbox.checked = false;
        slider.step = "1";
        slider.max = "50";
        price.textContent = "$16.00"
        slider.value = "16";

    }

    function updatePrice() {

        price.textContent =  "$" + `${slider.value}`+".00";
        
    }

    function switchDate() {

        if(checkbox.checked == false) {

            date.textContent = "/ month";
            slider.step = "1";
            slider.max = "50";
    
        } else {
    
            date.textContent ="/ yearly";
            slider.step = "5";
            slider.max = "25";
        }
    }

    return {init, updatePrice, switchDate}

})();

pricingBox.init();

slider.addEventListener('change', pricingBox.updatePrice);
checkbox.addEventListener('change', pricingBox.switchDate);

