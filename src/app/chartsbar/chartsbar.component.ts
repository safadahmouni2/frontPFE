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
  public barChartLabels: Label[] =  ['محمد عبو  ','قيس سعيد  ', 'عبير موسي', 'راشد الغنوشي','الصافي سعيد','يوسف الشاهد','هشام المشيشي '
  ,'ياسين العياري','سيف الدين المخلوف','فيصل التبيني'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [342, 518, 564, 662, 313, 355, 461,499,502,506],
      label:'Posts',
      
  }, 
  ];
  public barChartColors: Color[] = [
    {
     // borderColor: ['', '', '','',''],
      backgroundColor: ['rgba(249, 125, 0, 1)', 'rgba(102, 7, 159, 1)', 'blue','green',
      'rgb(238, 130, 238)','rgba(149, 255, 21, 1)','grey','red','rgba(59, 205, 234, 1)','rgba(93, 54, 7, 1)']
  
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
