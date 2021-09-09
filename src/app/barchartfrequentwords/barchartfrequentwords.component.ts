import { FrequentwordsService } from './frequentwords.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label ,Color} from 'ng2-charts';

@Component({
  selector: 'app-barchartfrequentwords',
  templateUrl: './barchartfrequentwords.component.html',
  styleUrls: ['./barchartfrequentwords.component.css']
})
export class BarchartfrequentwordsComponent implements OnInit {
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
  public barChartData: ChartDataSets[] = [
    { data: [],
      label:'Number of Words with count Vectorizer ',
      
  }, 
  ];
  public barChartColors: Color[] = [
    {
     // borderColor: ['', '', '','',''],
      backgroundColor: [
        'rgb(102, 0, 153)','rgb(136, 77, 167)','rgb(112, 41, 99)','rgb(222, 49, 99)','rgb(253, 63, 146))',
        'rgb(121, 28, 248)','rgb(46, 0, 108)','rgb(4, 139, 154)','rgb(128, 208, 208)','rgb(22, 184, 78)',
        'rgb(84, 249, 141)','rgb(20, 148, 20)','rgb(0, 255, 0)','rgb(1, 215, 88)','rgb(158, 253, 56)',
        'rgb(253, 191, 183)','rgb(196, 105, 143)','rgb(249, 66, 158)','rgb(254, 191, 210)','rgb(153, 122, 144)',
        'rgb(107, 13, 13)','rgb(255, 94, 77)','rgb(184, 32, 16)','rgb(150, 0, 24)','rgb(219, 23, 2)',
        'rgb(237, 127, 16))','rgb(230, 126, 48)','rgb(239, 155, 15)','rgb(254, 163, 71)','rgb(250, 164, 1)'
      ]
    },
  ];

  constructor(private frequentwordsService: FrequentwordsService) {
  
  }
  ngOnInit(): void {
    this.frequentwordsService.getvalues().subscribe((data:any)=>{
      this.barChartLabels = data.labels
      this.barChartData[0].data= data.data
    })
  }


}
