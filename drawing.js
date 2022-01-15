
const canvas = document.getElementById("BigCanvas")
canvas.style = "outline: 2px solid #000"
const ctx1 = canvas.getContext("2d");
ctx1.lineJoin = ctx1.lineCap = "round";

limpiar()

let pastMouse = null;
canvas.ontouchend = canvas.onmouseleave = () => pastMouse = null
document.addEventListener("mouseup", canvas.onmouseleave)
document.oncontextmenu = e => e.preventDefault()

canvas.ontouchmove = canvas.onmousemove = e => {
	const currentPos = e.touches? [e.touches[0].pageX - canvas.getBoundingClientRect().left, e.touches[0].pageY - canvas.getBoundingClientRect().top] : [e.offsetX, e.offsetY]
	console.log(e)
	if (pastMouse) {
		if (e.buttons & 1 ||  e.touches) {
			ctx1.strokeStyle = "#000";
			ctx1.lineWidth = 8 * 2;
			ctx1.beginPath()
			ctx1.moveTo(...pastMouse)
			ctx1.lineTo(...currentPos)
			ctx1.stroke()
		}
		else if (e.buttons & 2) {
			ctx1.strokeStyle = "#fff";
			ctx1.lineWidth = 8 * 3;
			ctx1.beginPath()
			ctx1.moveTo(...pastMouse)
			ctx1.lineTo(...currentPos)
			ctx1.stroke()
		}
	}
	pastMouse = currentPos
	// console.log(e)
	e.preventDefault()
}

function limpiar() {
	ctx1.fillStyle = "#fff";
	ctx1.fillRect(0, 0, canvas.width, canvas.height);
}