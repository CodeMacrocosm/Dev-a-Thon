let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.reset')
let pauseBtn = document.querySelector('.pause')

let hours = document.querySelector('#hrs')
let seconds = document.querySelector('#sec')
let minutes = document.querySelector('#mins')
let milliseconds = document.querySelector('#millisec')

var timer = new Timer();

timer.addEventListener('secondTenthsUpdated', () => {
  const obj = timer.getTimeValues()

  hours.innerHTML = obj.hours.toString();
  minutes.innerHTML = obj.minutes.toString();
  seconds.innerHTML = obj.seconds.toString();
  milliseconds.innerHTML = obj.secondTenths.toString();
})
startBtn.addEventListener('click', () => {
  timer.start({
    precision: 'secondTenths'
  })
})
pauseBtn.addEventListener('click', () => {
  timer.pause()
})
stopBtn.addEventListener('click', () => {
  timer.stop()
})
resetBtn.addEventListener('click', () => {
  timer.stop();
  hours.innerHTML = '00';
  milliseconds.innerHTML = '00';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';

})
