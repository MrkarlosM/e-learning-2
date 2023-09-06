import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-e-learning-panel',
    templateUrl: './e-learning-panel.component.html',
    styleUrls: ['./e-learning-panel.component.css']
})
export class ELearningPanelComponent implements OnInit {

    @Input() inputFromMinCIT: string = "";

    basicData: any;
    basicOptions: any;
    basicData2: any;
    basicOptions2: any;
    basicData3: any;
    basicOptions3: any;
    data: any;
    options: any;
    data2: any;
    options2: any;
    tableArray: any;
    tableArray2: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


        switch (this.inputFromMinCIT) {
            default:
                this.basicData = {
                    labels: ['Colaboradores que han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                    datasets: [
                        {
                            label: 'Cobertura asistencia PST',
                            data: [7, 10],
                            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                            borderWidth: 1
                        }
                    ]
                };

                this.basicOptions = {
                    cutout: '60%',
                    plugins: {
                        title: {
                            display: true,
                            text: 'Cobertura Asistencia',
                            font: {
                                size: 20
                            },
                        },
                        legend: {
                            labels: {
                                color: textColor
                            }
                        }
                    }
                };

                this.basicData2 = {
                    labels: ['Colaboradores que Iniciaron y No han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                    datasets: [
                        {
                            label: 'Cobertura asistencia PST',
                            data: [3, 10],
                            backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--green-500')],
                            hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--green-400')],
                            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                            borderWidth: 1
                        }
                    ]
                };

                this.basicOptions2 = {
                    cutout: '60%',
                    plugins: {
                        title: {
                            display: true,
                            text: 'Deserción',
                            font: {
                                size: 20
                            }
                        },
                        legend: {
                            labels: {
                                color: textColor
                            }
                        }
                    }
                };

                this.basicData3 = {
                    labels: ['Colaboradores que finalizaron OVA', 'Total Colaboradores Matriculados'],
                    datasets: [
                        {
                            label: 'Cobertura asistencia PST',
                            data: [4, 10],
                            backgroundColor: [documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--green-500')],
                            hoverBackgroundColor: [documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--green-400')],
                            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                            borderWidth: 1
                        }
                    ]
                };

                this.basicOptions3 = {
                    cutout: '60%',
                    plugins: {
                        title: {
                            display: true,
                            text: 'Cumplimiento OVA',
                            font: {
                                size: 20
                            },
                            padding: {
                                top: 10,
                                bottom: 10
                            }
                        },
                        legend: {
                            labels: {
                                color: textColor
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
                this.tableArray = [
                    {
                        MoodleID: 1,
                        nombre: "Juan Díaz",
                        nota1: "5",
                        nota2: "4",
                        nota3: "1",
                        notaf: "3.33"
                    },
                    {
                        MoodleID: 2,
                        nombre: "Pedro Jiménez",
                        nota1: "5",
                        nota2: "3",
                        nota3: "3",
                        notaf: "3.66"
                    },
                    {
                        MoodleID: 3,
                        nombre: "Carlos Martínez",
                        nota1: "5",
                        nota2: "5",
                        nota3: "5",
                        notaf: "5"
                    },
                ];
        }
        let arrGraphs = [documentStyle, textColor, textColorSecondary, surfaceBorder]
        return arrGraphs
    }
    ngOnChanges(inputFromMinCIT: SimpleChanges, arrGraphs: any) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        // Esta función se ejecutará cada vez que cambie el valor de 'valor'.
        console.log('Valor cambió:', inputFromMinCIT, arrGraphs);
        if (this.inputFromMinCIT === "1") {
            this.tableArray = [
                {
                    MoodleID: 1,
                    nombre: "Juan Díaz",
                    nota1: "5",
                    nota2: "4",
                    nota3: "1",
                    notaf: "3.33"
                },
                {
                    MoodleID: 2,
                    nombre: "Pedro Jiménez",
                    nota1: "5",
                    nota2: "3",
                    nota3: "3",
                    notaf: "3.66"
                },
                {
                    MoodleID: 3,
                    nombre: "Carlos Martínez",
                    nota1: "5",
                    nota2: "5",
                    nota3: "5",
                    notaf: "5"
                },
            ];

            this.basicData = {
                labels: ['Colaboradores que han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [7, 10],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Cobertura Asistencia',
                        font: {
                            size: 20
                        },
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.basicData2 = {
                labels: ['Colaboradores que Iniciaron y No han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [3, 10],
                        backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--green-400')],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions2 = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Deserción',
                        font: {
                            size: 20
                        }
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.basicData3 = {
                labels: ['Colaboradores que finalizaron OVA', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [4, 10],
                        backgroundColor: [documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--green-400')],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions3 = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Cumplimiento OVA',
                        font: {
                            size: 20
                        },
                        padding: {
                            top: 10,
                            bottom: 10
                        }
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

        }
        else if (this.inputFromMinCIT === "2") {
            this.tableArray = [
                {
                    MoodleID: 1,
                    nombre: "John Gómez",
                    nota1: "4",
                    nota2: "4",
                    nota3: "4",
                    notaf: "4"
                },
                {
                    MoodleID: 2,
                    nombre: "James Méndez",
                    nota1: "5",
                    nota2: "3",
                    nota3: "3",
                    notaf: "3.66"
                },
                {
                    MoodleID: 3,
                    nombre: "Alejandro Pérez",
                    nota1: "3",
                    nota2: "3",
                    nota3: "3",
                    notaf: "3"
                },
            ];
            this.basicData = {
                labels: ['Colaboradores que han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [7, 30],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Cobertura Asistencia',
                        font: {
                            size: 20
                        },
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.basicData2 = {
                labels: ['Colaboradores que Iniciaron y No han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [5, 30],
                        backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--green-400')],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions2 = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Deserción',
                        font: {
                            size: 20
                        }
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.basicData3 = {
                labels: ['Colaboradores que finalizaron OVA', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [4, 30],
                        backgroundColor: [documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--green-400')],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions3 = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Cumplimiento OVA',
                        font: {
                            size: 20
                        },
                        padding: {
                            top: 10,
                            bottom: 10
                        }
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };


            console.log(this.basicData.datasets.data)
        }
        else {
            this.basicData = {
                labels: ['Colaboradores que han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [7, 10],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Cobertura Asistencia',
                        font: {
                            size: 20
                        },
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.basicData2 = {
                labels: ['Colaboradores que Iniciaron y No han Finalizado Cursos', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [3, 10],
                        backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--green-400')],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions2 = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Deserción',
                        font: {
                            size: 20
                        }
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.basicData3 = {
                labels: ['Colaboradores que finalizaron OVA', 'Total Colaboradores Matriculados'],
                datasets: [
                    {
                        label: 'Cobertura asistencia PST',
                        data: [4, 10],
                        backgroundColor: [documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--green-400')],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            };

            this.basicOptions3 = {
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: 'Cumplimiento OVA',
                        font: {
                            size: 20
                        },
                        padding: {
                            top: 10,
                            bottom: 10
                        }
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.tableArray = [
                {
                    MoodleID: 1,
                    nombre: "Juan Díaz",
                    nota1: "5",
                    nota2: "4",
                    nota3: "1",
                    notaf: "3.33"
                },
                {
                    MoodleID: 2,
                    nombre: "Pedro Jiménez",
                    nota1: "5",
                    nota2: "3",
                    nota3: "3",
                    notaf: "3.66"
                },
                {
                    MoodleID: 3,
                    nombre: "Carlos Martínez",
                    nota1: "5",
                    nota2: "5",
                    nota3: "5",
                    notaf: "5"
                },
            ];
        }
    }
}
