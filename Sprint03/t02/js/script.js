class Timer {
  constructor(id, delay, count) {
    this.id = id;
    this.delay = delay;
    this.count = count;
  }
  start() {
      console.log(`Timer ${this.id} started (delay=${this.delay}, stopCount=${this.count})`);
  }
  tick(timing) {
      console.log(`Timer ${this.id} Tick! | cycles left ${this.count}`);
      this.count--; 
      if (this.count === 0) {
          this.stop();
          clearInterval(timing);
      }
  }
  stop() {
    console.log(`Timer ${this.id} stopped`);
  }
}

function runTimer(id, delay, count) {
  let timer = new Timer(id, delay, count);
  timer.start();
  let timing = setInterval(() => timer.tick(timing), timer.delay);
}

//runTimer("Bleep", 1000, 5);