let p = document.getElementById("equal")
p.textContent = `0 Light Years`
function moduls(m, M) {
	function oss() {
		return (m - M + 5)/5
	}
	let result = 10 ** oss() * 3.26156
	let tho = Math.round(result)
	let a = tho.toString().split("").reverse()
	let jot = [];
	
	for (let i = 0; i < a.length; i++){
		if( i % 3 === 0 && i !== 0) {
			jot += "," + a[i]
		}else {
			jot += a[i]
		}
	}
	return `${jot.split("").reverse().join("")} Light Years`
}
let userInput = document.querySelector("[name = m]")
let ageInput = document.querySelector("[name = M]")

document.getElementById("result").onclick = function (e) {
	let sita = ""
	let userVaild = false
	let userAge = false
	if (isNaN(+userInput.value) === false && userInput.value !== "") {
		userVaild = true
	}
	if (isNaN(+ageInput.value) === false && ageInput.value !== "" ) {
		userAge = true
	}
	if ( userVaild === false || userAge === false) {
		sita = `Wrong Inputs`
		
	}
	if (sita === `Wrong Inputs`) {
		p.textContent = sita
		e.preventDefault();
	}else {
		p.textContent = (moduls(+userInput.value, +ageInput.value))
	}
}
let time = 777059000;

let counter = setInterval(() => {
	 let days = Math.floor (time /  (1000 * 60 * 60 * 24))
	 console.log(days)
	 document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days;
	 let hr = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
	 console.log(hr)
	 document.querySelector(".hr").innerHTML = hr < 10 ? `0${hr}`: hr;
	 let mins = Math.floor(time % ( 1000 * 60 * 60) / ( 1000 * 60))
	 document.querySelector(".mins").innerHTML = mins < 10 ? `0${mins}`: mins;
	 let sec = time % ( 1000 * 60) / 1000
	 document.querySelector(".sec").innerHTML = sec < 10 ? `0${sec}`: sec;
	 if (time === 0) {
		clearInterval(counter)
	 }
	 time -= 1000
	}, 1000)
