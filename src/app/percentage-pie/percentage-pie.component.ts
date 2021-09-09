import { PercentagepieService } from './percentagepie.service';
import { ComparaisonbarService } from './../comparisationbar/comparaisonbar.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import 'chartjs-plugin-labels';
@Component({
  selector: 'app-percentage-pie',
  templateUrl: './percentage-pie.component.html',
  styleUrls: ['./percentage-pie.component.css']
})
export class PercentagePieComponent implements OnInit {
  // Pie

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      labels: [{
        //render: 'value',
        showActualPercentages: true,
        fontColor: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        precision: 0,
        textShadow: true,
      },
      {
        render: 'label',
        position: 'outside'
      }]
    },
  };
  public pieChartLabelsPerson: Label[] = [];
  // piechartLabelsInfluence:Label[]=['1','2','3','5','6','4','7','8','9','10'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartColors: Color[] = [
    {
      // borderColor: ['', '', '','',''],
      backgroundColor: ['rgba(249, 125, 0, 1)', 'rgba(102, 7, 159, 1)', 'blue', 'green', 'rgb(238, 130, 238)', 'rgba(149, 255, 21, 1)', 'grey', 'red', 'rgba(59, 205, 234, 1)', 'rgba(93, 54, 7, 1)']

    },

  ];
  constructor(private PercentagepieService: PercentagepieService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.PercentagepieService.getvalues().subscribe((resp: any) => {
      this.pieChartLabelsPerson = resp.labels
      this.pieChartData = resp.data
    })
  }

}