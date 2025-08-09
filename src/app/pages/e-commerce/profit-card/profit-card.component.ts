import { Component } from "@angular/core";
import { NbCardModule } from "@nebular/theme";

@Component({
  selector: "ngx-profit-card",
  styleUrls: ["./profit-card.component.scss"],
  templateUrl: "./profit-card.component.html",
})
export class ProfitCardComponent {
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
