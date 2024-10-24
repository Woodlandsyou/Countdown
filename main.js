const container = document.getElementById('container');
let count = 10000000;


setInterval(() => {
    let time = count;
    container.children[0].textContent = `${Math.floor(time / 8640000)} d`;
    time -= Math.floor(time / 8640000) * 8640000;
    container.children[1].textContent = `${Math.floor(time / 360000)} h`;
    time -= Math.floor(time / 360000) * 360000;
    container.children[2].textContent = `${Math.floor(time / 60000)} m`;
    time -= Math.floor(time / 60000) * 60000;
    container.children[3].textContent = `${Math.floor(time / 1000)} s`;
    time -= Math.floor(time / 1000) * 1000;
    container.children[4].textContent = `${Math.floor(time)} ms`;
    count--;
}, 1);