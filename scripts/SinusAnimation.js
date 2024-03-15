function startAnimation() {
    let i = 0;
    let interval = setInterval(() => {
        i++;
        amplitude = (i / 100) * 60;
        if (i == 100) {
            clearInterval(interval);
        };
        audio.volume = (i / 100) * 0.50;

    }, 7)
}

function endAnimation() {
    let i = 100;
    let interval = setInterval(() => {
        i--;
        amplitude = (i / 100) * 60;
        if (i == 0) {
            clearInterval(interval);
            audio.pause();
        };
        audio.volume = (i / 100) * 0.50;

    }, 7)
}


const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

const Parameters = function () {
    this.speed = 0.1;
    this.amplitude = 40;
    this.frequency = 3;
    this.reverse = false;
    return this;
}

const params = new Parameters();

const details = 20;

let amplitude = 0;

document.getElementById("music-button").appendChild(canvas);

// canvas.style.backgroundColor = "black";
canvas.setAttribute("style", "height: 25%; width: 65%")

const points = [];

for (let i = 0; i < details * 24; i++) {
    points.push(Math.sin(i * Math.PI / details));
}

const calc = t => {
    points.forEach((p, i) => {
        points[i] = Math.sin(i * Math.PI / details + t);
    });
};

const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "black");

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

const draw = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 17;
    ctx.strokeStyle = grd;
    ctx.moveTo(0, canvas.height / 2);
    points.forEach((p, i) => {
        ctx.lineTo(i * 2.4, (p * amplitude * clamp(((130-i)/40)+0.2, 0, 1)) + canvas.height / 2);
    });
    ctx.stroke();
};

let t = 0;

const animate = () => {
    t = t - 0.16;
    calc(t);
    draw();
    requestAnimationFrame(animate);
};

animate();