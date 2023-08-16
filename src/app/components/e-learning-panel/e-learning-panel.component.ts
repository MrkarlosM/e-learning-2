import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-learning-panel',
  templateUrl: './e-learning-panel.component.html',
  styleUrls: ['./e-learning-panel.component.css']
})
export class ELearningPanelComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  data: any;
  options: any;
  data2: any;
  options2: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
          labels: ['Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4'],
          datasets: [
              {
                  label: 'Porcentaje Módulos completados',
                  data: [100, 25, 70, 62],
                  backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  borderWidth: 1
              }
          ]
      };

      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };

      this.data = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
            {
                label: 'Horas diarias',
                data: [6, 2, 1, 8, 2, 1, 4],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            }
        ]
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
    this.data2 = {
      labels: ['Ambiental', 'Sociocultural', 'Económico', 'Estructura Alto Nivel', 'Mejora'],
      datasets: [
          {
              label: 'Programa de Sostenibilidad',
              borderColor: documentStyle.getPropertyValue('--red-400'),
              pointBackgroundColor: documentStyle.getPropertyValue('--red-400'),
              pointBorderColor: documentStyle.getPropertyValue('--red-400'),
              pointHoverBackgroundColor: textColor,
              pointHoverBorderColor: documentStyle.getPropertyValue('--red-400'),
              data: [65, 59, 90, 81, 56]
          }
      ]
  };
  
  this.options2 = {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          r: {
              grid: {
                  color: textColorSecondary
              },
              pointLabels: {
                  color: textColorSecondary
              }
          }
      }
  };
  }
}
