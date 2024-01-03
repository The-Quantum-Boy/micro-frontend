import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter = 0;

  /*
    as both host and port is rendering on same window
    so we can access any either hosts or remote event
  */
  constructor() {
    window.addEventListener("controlMfeCounter", () => {
      this.handleCounter()
    })
  }

  handleCounter() {
    this.counter += 1;
  }

  handleHostText(e: any) {
    const customEvent = new CustomEvent("controlHostText", { detail: e?.target?.value })
    window.dispatchEvent(customEvent);
  }

}
