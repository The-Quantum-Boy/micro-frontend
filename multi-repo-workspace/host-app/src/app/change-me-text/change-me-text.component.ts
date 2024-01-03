import { Component } from '@angular/core';

@Component({
  selector: 'app-change-me-text',
  templateUrl: './change-me-text.component.html',
  styleUrls: ['./change-me-text.component.scss']
})
export class ChangeMeTextComponent {
  changeMeText = "Change me text in host";

  constructor() {
    window.addEventListener("controlHostText", (e: any) => {
      this.changeMeText = e?.detail;
    })
  }
}
