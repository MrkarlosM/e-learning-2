import { MoodleServiceService } from 'src/app/services/moodle-service.service';
import { DivipolaServiceService } from './../../services/divipola-service.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom, lastValueFrom } from 'rxjs';


@Component({
    selector: 'app-e-learning-panel-mincit',
    templateUrl: './e-learning-panel-mincit.component.html',
    styleUrls: ['./e-learning-panel-mincit.component.css']
})
export class ELearningPanelMincitComponent implements OnInit {
    basicData: any;
    basicOptions: any;
    basicData2: any;
    basicOptions2: any;
    basicData3: any;
    basicOptions3: any;
    selectedValue: any;
    variable: any;
    deptos: any;
    mpios: any;
    cursos: any;
    selectedCursos: any;
    courseForms: FormGroup;
    psts: any[] = [];
    selectedPSTs: any;

    selectedFilters1: FormGroup;
    selectedDeptos: any;
    selectedMpios: any;

    selectStyles = {
        'width': "80%",
        'margin-bottom': "5px"
    }

    TipoPST = [
        {
            tipo: "URBANA",
            code: 1
        },
        {
            tipo: "RURAL",
            code: 2
        }
    ]
    selectedFilters2: FormGroup;
    selectedFilters3: FormGroup;
    mpios1: any[] = [];
    mpios2: any[] = [];
    mpios3: any[] = [];
    testing: any
    constructor(private _divipola: DivipolaServiceService, private _mdl: MoodleServiceService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
        this.courseForms = this.fb.group(
            {
                selectedCursos: [''],
                selectedPSTs: ['']
            }
        )

        this.selectedFilters1 = this.fb.group(
            {
                selectedDeptos1: [''],
                selectedMpios1: [''],
                selectedTipos1: ['']
            }
        )

        this.selectedFilters2 = this.fb.group(
            {
                selectedDeptos2: [''],
                selectedMpios2: [''],
                selectedTipos2: ['']
            }
        )

        this.selectedFilters3 = this.fb.group(
            {
                selectedDeptos3: [''],
                selectedMpios3: [''],
                selectedTipos3: ['']
            }
        )
    }
    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this._mdl.getAllCourses().subscribe(data => {
            data.shift()
            this.cursos = data;
        })

        this.basicData = {
            labels: ['No. PST Realizando Cursos', 'Total PST Inscritos'],
            datasets: [
                {
                    label: 'Cobertura asistencia PST',
                    data: [400, 600],
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
            labels: ['Total Cursos Terminados por PST', 'Total Matriculados'],
            datasets: [
                {
                    label: 'Cobertura asistencia PST',
                    data: [300, 600],
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
            labels: ['Colaboradores que finalizaron OVA por PST', 'Total Matriculados'],
            datasets: [
                {
                    label: 'Cobertura asistencia PST',
                    data: [200, 600],
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

        this._divipola.getAllMunicipios().subscribe(data => {

            const divipolaUnica: any[] = [];
            const divipolaSet: Set<string> = new Set();

            data.forEach((item: any) => {
                const itemStr = `${item.cod_depto}-${item.dpto}`;
                if (!divipolaSet.has(itemStr)) {
                    divipolaSet.add(itemStr);
                    divipolaUnica.push(item);
                }
            });
            this.deptos = divipolaUnica.slice(0, 33);
        })
    }

    onSelectChange(event: any): void {
        this.selectedValue = event.target.value;
    }

    /*Con la lista de cursos, seleccionamos grupos: 1 Grupo = 1 PST
    Devolvemos la lista de PSTs (Grupos)*/
    muestraPST() {
        const arrcursos = this.courseForms.value.selectedCursos;
        let arrPst: any[] = []
        arrcursos.forEach((element: { id: any; }) => {
            this._mdl.getPSTByCourse(element.id).subscribe(data => {
                if (data.length) {
                    arrPst.push(data[0])
                }
            })
        });
        this.psts = arrPst
    }

    /*Para cada uno de los grupos, listamos los miembros (ids) de los cursos*/

    async listarPST() {
        let listUserofGroup: any[] = []
        let listUsers: any[] = []
        let listPST: any[] = []
        let listNorma: any[] = []
        this.courseForms.value.selectedCursos.forEach((course: any) => {
            if (course !== undefined) {
                listNorma.push(course.id)
            }

        });
        await Promise.all(listNorma.map(async (courseID: any) => {
            let data = await firstValueFrom(this._mdl.getPSTByCourse(courseID))
            if (data[0] !== undefined) {
                data.forEach((element: { id: any }) => {
                    listPST.push(element.id)
                });
            }
        }));
        console.log("Lista de psts:", listPST)
        await Promise.all(listPST.map(async (pstID: any) => {
            console.log("Usaré el id: ", pstID)
            let data = await firstValueFrom(this._mdl.getUsersByPST(pstID))
            console.log(data)
            if (data[0] !== undefined) {
                listUserofGroup.push(data[0])
                listUsers.push(data[0].userids)
            }
        }))
        this.basicData2.datasets[0].data = [2, listUsers.flat().length]
        console.log("Los Usuarios por grupo son: ", listUserofGroup)
        console.log("Los Usuarios totales son: ", listUsers.flat().length)
        console.log(this.basicData2.datasets[0].data)
        this.basicData2 = {
            labels: ['Total Cursos Terminados por PST', 'Total Matriculados'],
            datasets: [
                {
                    label: 'Cobertura asistencia PST',
                    data: [2, listUsers.flat().length],
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

                    }
                }
            }
        };
    }

    imprimePSTs() {

    }

    buscaMunicipios1() {
        const arrDptos = this.selectedFilters1.value.selectedDeptos1;
        let arrMpios: any[] = []
        arrDptos.forEach((element: { cod_depto: any }) => {
            this._divipola.getMunicipiosByDptoNumber(element.cod_depto).subscribe(data => {
                data.forEach((element: any) => {
                    arrMpios.push(element)
                });
            })
        });
        this.mpios1 = arrMpios
    }

    buscaMunicipios2() {
        const arrDptos = this.selectedFilters2.value.selectedDeptos2;
        let arrMpios: any[] = []
        arrDptos.forEach((element: { cod_depto: any }) => {
            this._divipola.getMunicipiosByDptoNumber(element.cod_depto).subscribe(data => {
                data.forEach((element: any) => {
                    arrMpios.push(element)
                });
            })
        });
        this.mpios2 = arrMpios
    }

    buscaMunicipios3() {
        const arrDptos = this.selectedFilters3.value.selectedDeptos3;
        let arrMpios: any[] = []
        arrDptos.forEach((element: { cod_depto: any }) => {
            this._divipola.getMunicipiosByDptoNumber(element.cod_depto).subscribe(data => {
                data.forEach((element: any) => {
                    arrMpios.push(element)
                });
            })
        });
        this.mpios3 = arrMpios
    }



}