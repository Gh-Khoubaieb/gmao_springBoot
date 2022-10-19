import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartConfiguration['options'] = {


    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
         //   display:false,
        grid:{display: false} ,
        beginAtZero: true,

         },
      y: {


        grid:{display: false} ,
          beginAtZero: true,



      }
    },

  }
  public barChartLabels = ['sagar', 'laxman', 'nimesh', 'vishal', 'nilam'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public chartData: any[] = [
    {
      "backgroundColor":["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
    }];
  public barChartData: ChartData<'bar'> = {

    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    datasets: [
      { data: [ 54, 67, 41,55, 62, 45, 55, 73, 60 , 76, 48,79 ],categoryPercentage:0.8,barPercentage:0.5,maxBarThickness: 8, label: 'Sales',backgroundColor: ["#4782DA"], },
      { data: [ 69, 66, 24,48, 52, 51, 44, 53,62 , 79,51,68],categoryPercentage:0.8,barPercentage:0.5,barThickness: 8, label: 'Revenue' , backgroundColor: ["#EEEEEE"],}
    ],
  };




}
