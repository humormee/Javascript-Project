export default class Clock {
  constructor() {
    

    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timer = document.getElementById("timer");
    this.isStopped = false;
    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  stop() {
    this.isStopped = true;
  }

  resume() {
    // this.isStopped = false;
  }

  reset() {
    this.isStopped = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timer = document.getElementById("timer");
    this.printTime();

  }

  printTime() {
    let hours = this.hours;
    let minutes = this.minutes;
    let seconds = this.seconds;

    if(this.hours < 10){
      hours = `0${this.hours}`
    }
    if(this.minutes < 10){
      minutes = `0${this.minutes}`
    }
    if(this.seconds < 10){
      seconds = `0${this.seconds}`
    }
    const timeString = [hours, minutes, seconds].join(":");
    debugger
    this.timer.textContent = timeString;
    
  }

  _tick() {
    if(!this.isStopped) this._incrementSeconds();

    this.printTime();
  }

  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}