let slider = document.getElementById("brightnessSlider");
let brightnessLabel = document.getElementById("brightnessLabel");
brightnessLabel.innerHTML = slider.value;

slider.oninput = function displaySliderValue() {
    brightnessLabel.innerHTML = slider.value;
}