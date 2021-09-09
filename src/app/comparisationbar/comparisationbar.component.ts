import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label ,Color} from 'ng2-charts';
import {ComparaisonbarService} from './comparaisonbar.service';
@Component({
  selector: 'app-comparisationbar',
  templateUrl: './comparisationbar.component.html',
  styleUrls: ['./comparisationbar.component.css']
})
export class ComparisationbarComponent implements OnInit {

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
      label:'Accuracy' }, 
  ];


  constructor(private comparaisonbarService: ComparaisonbarService) { }

  ngOnInit(): void {
    this.comparaisonbarService.getvalues().subscribe((resp:any)=>{
      this.barChartLabels = resp.labels
      this.barChartData[0].data = resp.data
    })
  }


  
}