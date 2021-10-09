const slider = document.getElementById('slider');
const price = document.getElementById('price');
const date = document.getElementById('date');
const checkbox = document.getElementById('checkbox');





const pricingBox = (() => {


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

    return {updatePrice, switchDate}

})();

slider.addEventListener('change', pricingBox.updatePrice);
checkbox.addEventListener('change', pricingBox.switchDate);

