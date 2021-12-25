
let textEl = document.getElementById('text')
let speedEl = document.getElementById('speed')
let text = 'Trust me " I am a Programmer! "';
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

