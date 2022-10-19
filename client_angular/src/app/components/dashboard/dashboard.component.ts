import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartData, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 2115, 1568, 1585, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327 ],
        stack: 'a',
        backgroundColor: 'rgba(243,246,249,0.8)',
        pointBackgroundColor    : 'transparent',
        borderColor : '#4782DA',
        pointBorderColor: '#4782DA',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 958, 724, 629, 883, 915, 1214, 1476, 1212, 1554,2128, 1466, 1827] ,
        borderDash: [4, 4],
        backgroundColor: 'transparent',
        borderColor: 'black',
        pointBackgroundColor: 'transparent',
        pointBorderColor: '#5C5C5E',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
        stack: 'a'
      },

    ],
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {  stacked: true,
        grid: {
          display: false
        }
        },
      y:{

      }
    },

    plugins: {
      legend: { display: false },


    }
  };

  public lineChartType: ChartType = 'line';



  public doughnutChartLabels: string[] = [ 'Social', 'Search Engineer', 'Direct', 'Other' ];
  public DoughnutChartOptions: any = {
    cutout: "84%",

    responsive: true,
    maintainAspectRatio: false,
    elements: {

      line: {
        tension: 0.1
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y:{
        display: false,
        grid: {
          display: false
        }
      }
    },

plugins:{
  legend: { display: false },
}



  };
  public doughnutChartData: ChartData<'doughnut'> = {

    labels: this.doughnutChartLabels,
    datasets: [



      { data: [ 260, 125,54, 146], label: 'Series C', backgroundColor: [
          '#4782DA',
          '#FF1D0D',
          '#FF9800',
          'rgba(214,214,214,0.5)',

        ] , spacing:4 , hoverBorderWidth:5,}

    ],

  };
  public doughnutChartType: ChartType = 'doughnut';



  public barChartOptions: ChartConfiguration['options'] = {

    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {

      x:  {
        stacked: true,


        grid: {
          display: false
        }

      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {

      legend: {

        display: false,
      },

    }

  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {

    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    datasets: [
      { data: [ 54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48,79 ],label: 'Mobile', maxBarThickness:5,  backgroundColor: '#4782DA' },
      { data: [ 123, 133, 65, 103, 113, 96, 99,126,121,155,100,148 ], label: 'Desktop',maxBarThickness:5  , backgroundColor: '#C3D6F3'}
    ]
  };
}
