import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, firstValueFrom, forkJoin } from 'rxjs';
import { MoodleServiceService } from 'src/app/services/moodle-service.service';

@Component({
    selector: 'app-e-learning-panel',
    templateUrl: './e-learning-panel.component.html',
    styleUrls: ['./e-learning-panel.component.css']
})
export class ELearningPanelComponent implements OnInit {

    @Input() inputFromMinCIT: string = "3";

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
    usuarioPST: any;
    estudiantes: any;

    constructor(private _mdl: MoodleServiceService) {

    }

    async ngOnInit() {
        this.updateGraphs(0,0,0);
        let courseID = this.inputFromMinCIT;
        let groupID: number = 4;
        this.getPST(courseID, groupID);
        let users = await this.getUsersofST(groupID);
        let status = await this.getCompletion(users, courseID)
        this.updateGraphs(users.length, status.completed, status.incomplete);
        

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

    /*Obtiene un PST particular
    courseID = ID Norma
    groupID = ID PST
    */
    async getPST(courseID: any, groupID: any) {
        try {
            const grupos = await firstValueFrom(this._mdl.getPSTByCourse(courseID));
            const grupoActual = grupos.find((grupo: { id: any }) => grupo.id === groupID);

            if (grupoActual) {
                console.log('Grupo encontrado:', grupoActual);
                this.usuarioPST = grupoActual;
                console.log("Id PST:", this.usuarioPST.id);
                return this.usuarioPST.id;
            } else {
                console.log('Grupo no encontrado');
                return null; // Otra acción en caso de que el grupo no se encuentre
            }
        } catch (error) {
            console.error('Error en la suscripción:', error);
            throw error;
        }
    }

    updateGraphs(totalUsers: any, statusCompleted: any, statusIncompleted: any) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        console.log("Los estudiantes son: ", totalUsers)

        this.basicData = {
            labels: ['Colaboradores que han Finalizado Cursos', 'Total Colaboradores Matriculados'],
            datasets: [
                {
                    label: 'Cobertura asistencia PST',
                    data: [statusCompleted, totalUsers],
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
                    data: [statusIncompleted, totalUsers],
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
                    data: [4, totalUsers],
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

    async getUsersofST(groupID: any) {
        try {
            const users = await firstValueFrom(this._mdl.getUsersByPST(groupID));
            this.estudiantes = users[0].userids;
            console.log(this.estudiantes);
            return this.estudiantes;
        } catch (error) {
            console.error('Error en la suscripción:', error);
            throw error;
        }
    }

    async getCompletion(userIDs: any[], courseID: any) {
        let completed = 0;
        let incomplete = 0;
      
        await Promise.all(
          userIDs.map(async (usuario: any) => {
            try {
              const data = await firstValueFrom(this._mdl.getCourseCompletionStatus(usuario, courseID));
              switch (data.completionstatus.completed) {
                case true:
                  completed++;
                  break;
                case false:
                  incomplete++;
                  break;
                default:
                  break;
              }
            } catch (error) {
              // Manejar errores si es necesario
            }
          })
        );
      
        const result = { completed, incomplete };
      
        console.log("El total de completos es:", result.completed, "mientras que el total de incompletos es:", result.incomplete);
      
        return result;
      }

    }
