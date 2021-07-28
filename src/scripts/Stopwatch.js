export default class Stopwatch {
  constructor(){
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.start()
  }

  start(){
    //now is in millisecons
    const now = Date.now();
    this.update();
  }

  update(){
    let date = new Date();
    let hoursPassed = Math.round(date.getHours() - this.hours)
    let minutesPassed = Math.round(date.getMinutes() - this.minutes);
    let secondsPassed = Math.round(date.getSeconds() - this.seconds);
    
    debugger
    let time = `${hoursPassed}:${minutesPassed}:${secondsPassed}`
    setInterval(() => {
      date = new Date();
      hoursPassed = Math.round(date.getHours() - this.hours);
      minutesPassed = Math.round(date.getMinutes() - this.minutes);
      secondsPassed = Math.round(date.getSeconds() - this.seconds);
      if(hoursPassed < 10) {
        hoursPassed = `0${hoursPassed}`
      }
      if(minutesPassed < 10) {
        minutesPassed = `0${minutesPassed}`
      }
      if(secondsPassed < 10) {
        secondsPassed = `0${secondsPassed}`
      }
      time = `${hoursPassed}:${minutesPassed}:${secondsPassed}`
      console.log(time)

    }, 1000)
  }
}