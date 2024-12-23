import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TerrenoServicio } from '../servicios/terrenoservicio';
import { terrenoDto } from '../interfaces/terrenoDto';

@Component({
  selector: 'app-graficas-terreno',
  standalone: true,
  imports: [],
  templateUrl: './graficas-terreno.component.html',
  styleUrl: './graficas-terreno.component.css'
})
export class GraficasTerrenoComponent implements OnInit {

  constructor(private terrenoservicio: TerrenoServicio) { }
  chart: any;
  id: number = 1;
  terrenoResultado: any;

  ngOnInit(): void {
    ;
    this.getTerreno();
  }

  getTerreno() {
    this.terrenoservicio.GetTerreno(this.id).subscribe({
      next: (result: terrenoDto) => {
        this.terrenoResultado = result;
        this.createChart(this.terrenoResultado);
        console.log(this.terrenoResultado.alturaTerreno);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  createChart(result: terrenoDto) {

    let nombreColumnas: number[] = [];
    for(let i = 0; i < result.alturaTerreno.split(",").length; i++)
      {
        nombreColumnas.push(i + 1)
      }

    this.chart = new Chart("MyChart", {
      type: 'bar', 

      data: {
        labels: nombreColumnas,
        datasets: [
          {
            label: "Terreno",
            data: result.alturaTerreno.split(","),
            backgroundColor: 'rgba(60, 60, 60, 1)',
            barPercentage: 1.0,
            categoryPercentage: 1.0
          },
          {
            label: "Agua",
            data: result.unidadesTerreno.split(","),
            backgroundColor: 'rgba(0, 0, 255, 1)',
            barPercentage: 1.0,
            categoryPercentage: 1.0
          }
        ]
      },
      options: {
        scales: {
          x: {
            stacked: true
          },
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0
            }
          }
        },
        aspectRatio: 5
      }

    });
  }

}
