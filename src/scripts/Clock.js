export default class Clock {
  constructor() {
    // 1. Create a Date object.
    const currentTime = new Date();

    // 2. Store the hour, minute, and second.
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
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

    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    this.printTime();
  }

  _incrementSeconds() {
    // 1. Increment the time by one second.
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

const clock = new Clock();