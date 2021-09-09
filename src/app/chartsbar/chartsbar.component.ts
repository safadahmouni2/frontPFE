import { ChartsbarService } from './chartsbar.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label ,Color} from 'ng2-charts';

@Component({
  selector: 'app-chartsbar',
  templateUrl: './chartsbar.component.html',
  styleUrls: ['./chartsbar.component.css']
})
export class ChartsbarComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
     maintainAspectRatio: true,
      plugins: {
                labels: {
                  render: 'value',
                  showActualPercentages: true,
                  //fontColor: ['white', 'white', 'white','white','white','white','white','white','white','white','white'],
                  precision:0,
                  textShadow: true,
                },
                
            },
    };
  public barChartLabels: Label[] =  [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: any[] = [];
  public barChartColors: Color[] = [
    {
     // borderColor: ['', '', '','',''],
      backgroundColor: ['rgba(249, 125, 0, 1)', 'rgba(102, 7, 159, 1)', 'blue','green',
      'rgb(238, 130, 238)','rgba(149, 255, 21, 1)','grey','red','rgba(59, 205, 234, 1)','rgba(93, 54, 7, 1)']
  
    },
  ];
  bg:any = ['rgba(249, 125, 0, 1)', 'rgba(102, 7, 159, 1)', 'blue','green',
  'rgb(238, 130, 238)','rgba(149, 255, 21, 1)','grey','red','rgba(59, 205, 234, 1)','rgba(93, 54, 7, 1)']

  constructor(private chartsbarService: ChartsbarService) {
  
  }
  ngOnInit(): void {
    this.chartsbarService.getvalues().subscribe((data:any)=>{
      this.barChartLabels = data.labels
      this.barChartData[0].data = data.data
      this.barChartData[0].label = data.influence[0]
      for(var i=1;i<data.data.length;i++){
        this.barChartData.push({
          label:data.influence[i],
          backgroundColor:this.bg[i],
        })
      }
    })
  }


}
