let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', toggleBulb)
function toggleBulb(e) {
    if(btn.textContent.includes('On')) {
        bulb.src = './assets/bg-black-on-bulb.jpg'
        btn.textContent = 'Turn Off'
    }else {
        bulb.src = './assets/bg-black-off-bulb.jpg'
        btn.textContent = 'Turn On'
    }
}