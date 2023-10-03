const main = document.querySelector('main');

for(let i = 0;i < 700;i++){
    let snow = document.createElement('div');
    snow.classList.add('snow')
    let top = Math.random();
    let left = Math.random();
    let duration = Math.random() * 2;
    snow.style.cssText = `top: ${top * main.clientWidth}px; left: ${left * main.clientWidth}px; animation: ${duration}s comeSnow infinite linear;`
    main.appendChild(snow)
}
