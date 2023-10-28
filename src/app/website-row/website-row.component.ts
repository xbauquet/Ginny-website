import {Component, Input} from '@angular/core';
import uniqolor from "uniqolor";

@Component({
  selector: 'app-website-row',
  templateUrl: './website-row.component.html',
  styleUrls: ['./website-row.component.scss']
})
export class WebsiteRowComponent {

  @Input() title!: string;
  @Input() theme!: string;
  @Input() reverse = false;
  @Input() darkImg!: string;
  @Input() lightImg!: string;
  @Input() imageWidth = "100%";

  getH1Style() {
    return 'background-image: linear-gradient(96deg, ' + this.lightenColor(this.getColor(), 50) + ' -16.88%, ' + this.getColor() + ' 83.22%); ';
  }

  getColor() {
    return uniqolor(this.title).color;
  }

  private lightenColor(color: string, amount: number) {
    return '#' + color
      .replace(/^#/, '')
      .replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
  }

  openApp() {
    window.open("https://ginny-ci.com", "_blank");
  }
}
