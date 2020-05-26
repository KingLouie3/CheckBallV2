import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  constructor() {}

  chartOptions = {
    responsive: true,
  };

  chartData = [];

  chartLabels = ['Points', 'Rebounds', 'Assists', 'Steals'];

  ngOnInit() {}
}
