let count = 10000000;


setInterval(() => {
    let time = count;
    let h = Math.floor(time / 360000);
    time -= h * 360000;
    let m = Math.floor(time / 60000);
    time -= m * 60000;
    let s = Math.floor(time / 1000);
    time -= s * 1000;
    ms = Math.floor(time);
    document.getElementById('text').textContent = `${h} : ${m} : ${s} : ${ms}`;
    count--;
}, 1);