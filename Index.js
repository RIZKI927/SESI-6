let body = document.body
let info = document.getElementById('info')
let mode = document.getElementById('mode')
let mode2 = document.getElementById('mode2')
let mode3 = document.getElementById('mode3')
let mode4 = document.getElementById('mode4')
let home = document.getElementById('home')

const darkLimit = 5
const darkLimit2 = 5
const darkLimit3 = 5
const darkLimit4 = 5
let darkCounter = 0
let darkCounter2 = 0
let darkCounter3 = 0
let darkCounter4 = 0
let darkRemainingLeft
let darkRemainingLeft2
let darkRemainingLeft3
let darkRemainingLeft4


function darkMode() {
	if (darkRemainingLeft == 1) {
		info.textContent = "💥 JATAH SIA BEAK GOBLOK 💥"
		mode.style.display = "none"
		mode.textContent = "MODE PURPLE"
		home.textContent = "RESTART"
		console.log('jatah habis')
		return
	} else {
		mode.textContent = "MODE LIGHT"
	}
	if (darkRemainingLeft == 2) {
		mode.textContent = "MODE💜"
	}
	if (darkRemainingLeft == 3) {
		mode.textContent = "MODE LIGHT"
	}
	if (darkRemainingLeft == 4) {
		mode.textContent = "MODE💜"
	}

	darkCounter += 1
	darkRemainingLeft = darkLimit - darkCounter

	console.log('di klik:', darkCounter)
	console.log('kesempatan anda', darkRemainingLeft)

	info.textContent = `darkmode diklik ${darkCounter}x, sisa ${darkRemainingLeft}`

	body.classList.toggle('dark')
}

function darkModeOrange() {
	if (darkRemainingLeft2 == 1) {
		info.textContent = "💥 JATAH SIA BEAK GOBLOK 💥"
		mode2.style.display = "none"
		home.textContent = "RESTART"
		console.log('jatah habis')
		return
	}
	if (darkRemainingLeft2 == 2) {
		mode2.textContent = "MODE LIGHT"
	}
	if (darkRemainingLeft2 == 3) {
		mode2.textContent = "MODE💥"
	}
	if (darkRemainingLeft2 == 4) {
		mode2.textContent = "MODE LIGHT"
	}

	darkCounter2 += 1
	darkRemainingLeft2 = darkLimit2 - darkCounter2

	console.log('di klik:', darkCounter2)
	console.log('kesempatan anda', darkRemainingLeft2)

	info.textContent = `darkModeOrange diklik ${darkCounter2}x, sisa ${darkRemainingLeft2}`

	body.classList.toggle('orange')
}

function darkModeGreen() {
	if (darkRemainingLeft3 == 1) {
		info.textContent = "💥 JATAH KAMU BEAK GOBLOK 💥"
		mode3.style.display = "none"
		home.textContent = "RESTART"
		console.log('jatah habis')
		return
	}
	if (darkRemainingLeft3 == 2) {
		mode3.textContent = "MODE💚"
	}
	if (darkRemainingLeft3 == 3) {
		mode3.textContent = "MODE LIGHT"
	}
	if (darkRemainingLeft3 == 4) {
		mode3.textContent = "MODE💚"
	}

	darkCounter3 += 1
	darkRemainingLeft3 = darkLimit3 - darkCounter3

	console.log('di klik:', darkCounter3)
	console.log('kesempatan anda', darkRemainingLeft3)

	info.textContent = `darkModeGreen diklik ${darkCounter3}x, sisa ${darkRemainingLeft3}`

	body.classList.toggle('green')
}

function darkModeBobotoh() {
	if (darkRemainingLeft4 == 1) {
		info.textContent = "💥 JATAH KAMU BEAK GOBLOK TOLOL 💥"
		mode4.style.display = "none"
		home.textContent = "RESTART"
		console.log('jatah habis')
		return
	}
	if (darkRemainingLeft4 == 2) {
		mode4.textContent = "MODE Blue"
	}
	if (darkRemainingLeft4 == 3) {
		mode4.textContent = "MODE LIGHT"
	}
	if (darkRemainingLeft4 == 4) {
		mode4.textContent = "MODE Blue"
	}

	darkCounter4 += 1
	darkRemainingLeft4 = darkLimit4 - darkCounter4

	console.log('di klik:', darkCounter4)
	console.log('kesempatan anda', darkRemainingLeft4)

	info.textContent = `darkModeBobotoh diklik ${darkCounter4}x, sisa ${darkRemainingLeft4}`

	body.classList.toggle('bobotoh')
}

function reRender() {
	location.reload();
}