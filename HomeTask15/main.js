const redLight = document.querySelector('.red')
const yellowLight = document.querySelector('.yellow')
const greenLight = document.querySelector('.green')

let garbageArray = []

function trafficLight(){
redLight.style.opacity = '1';
const Red = setTimeout(function () {
    greenLight.style.opacity= '0.3';
    yellowLight.style.opacity= '0.3';
    redLight.style.opacity = '1';
}, 0);

yellowLight.style.opacity = '1';
const Yellow = setTimeout(function () {
    greenLight.style.opacity = '0.3';
    redLight.style.opacity = '0.3';
    yellowLight.style.opacity = '1';
}, 10000);

greenLight.style.opacity = '1';
const Green = setTimeout(function () {
    yellowLight.style.opacity = '0.3';
    redLight.style.opacity = '0.3';
    greenLight.style.opacity = '1';
}, 12000);
}

trafficLight()
setInterval(trafficLight, 27000)

setInterval(() => {
    garbageArray.forEach(g=>{
        clearTimeout(g)
    })
    garbageArray = []
}, 27000 * 2);