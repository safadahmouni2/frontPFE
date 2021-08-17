import { ChartspieService } from './chartspie.service';
import { ComparaisonbarService } from './../comparisationbar/comparaisonbar.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
@Component({
  selector: 'app-chatspie',
  templateUrl: './chatspie.component.html',
  styleUrls: ['./chatspie.component.css']
})
export class ChatspieComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
              labels: [{
                //render: 'value',
                showActualPercentages: true,
                fontColor: ['white', 'white', 'white','white','white','white','white','white','white','white','white'],
                precision:0,
                textShadow: true,
              },
              {
                render: 'label',
                position: 'outside'
              }]
          },
  };
public piechartLabelsInfluence:Label[]=[];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartColors: Color[] = [
    {
     // borderColor: ['', '', '','',''],
      backgroundColor: ['rgba(249, 125, 0, 1)', 'rgba(102, 7, 159, 1)', 'blue','green','rgb(238, 130, 238)','rgba(149, 255, 21, 1)','grey','red','rgba(59, 205, 234, 1)','rgba(93, 54, 7, 1)']
  
    },
    
  ];
  constructor(private ChartspieService: ChartspieService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit(): void {
    this.ChartspieService.getvalues().subscribe((data:any)=>{
      this.piechartLabelsInfluence = data.labels
      this.pieChartData= data.data
      console.log(data)
    })
  }

}
