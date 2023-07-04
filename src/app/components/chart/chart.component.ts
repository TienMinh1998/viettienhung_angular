import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  seriesColors!: string[];
 @Input() items:any[] = [
    {
      text:"Post",
      seriesData : [],
      tooltext:"Bài viết",
      
    },
    {
      text:"Vocabulary",
      seriesData : [],
      tooltext:"Từ vựng"
    }
  ]

  @Input() categories: string[] = [];
  ngOnInit(): void {
    this.seriesColors = [
      '#477EE5',
      '#65C466'
    ];
  }
}
