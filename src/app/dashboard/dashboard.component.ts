import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { th } from 'date-fns/locale';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lat = 24.61908609709258;
  lng =  93.89928817749023;
  address: string;
  date = new Date();
  options:any;
  todayDate: Date;
  constructor() {

    console.log(this.todayDate)
   }


  // table chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    hover:false
  };
  public barChartLabels = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barColors = [
    {
      backgroundColor: [
        'Yellow',
        'Yellow',
        'Yellow',
        'Yellow',
        'Yellow',
        'Yellow',
      ],
      hoverBackgroundColor:[
        'Yellow',
        'Yellow',
        'Yellow',
        'Yellow',
        'Yellow',
        'Yellow',
      ]
    }
  ];
  public barChartData = [
    {data: [2.5, 4, 14, 21, 24, 30],label:'Fuel chart'},
  ];


  // circular bar chart
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  

  ngOnInit(): void {
    this.chartOptions = {
      series: [76, 67, 61],
      chart: {
        height: 250,
        type: "radialBar",
        toolbar: {
        show: true
        },
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ["#006400", "#FFA500", "#FF0000"],
      // labels: ["Pinterest", "Facebook", "LinkedIn", "Twitter","YouTube"],
      legend: {
        show: false,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: false
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3
        }
      }
    };
  }

  onChooseLocation(event){
    console.log(event)
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;
   }

  //  calender
   viewDate: Date = new Date();
   
   view: CalendarView = CalendarView.Month;
    CalendarView = CalendarView;

   setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    
    this.todayDate=date;
    console.log(this.date);
    //this.openAppointmentList(date)
  }
   
 
   
}
