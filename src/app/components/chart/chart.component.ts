import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() seriesData: number[] = [20, 40, 45, 30, 50];
  @Input() categories: string[] = ["29.06.2023", "01.07.2023", "02.07.2023", "03.07.2023", "04.07.2023"];
}
