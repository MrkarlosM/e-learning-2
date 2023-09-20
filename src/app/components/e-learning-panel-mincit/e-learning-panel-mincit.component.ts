import { MoodleServiceService } from 'src/app/services/moodle-service.service';
import { DivipolaServiceService } from './../../services/divipola-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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
    TipoPST2 = [
        {
            tipo: "URBANA",
            code: 1
        },
        {
            tipo: "RURAL",
            code: 2
        }
    ]
    TipoPST3 = [
        {
            tipo: "URBANA",
            code: 1
        },
        {
            tipo: "RURAL",
            code: 2
        }
    ]
    selectedFilters2: any;
    selectedFilters3: any;
    mpios1: any[] = [];
    mpios2: any[] = [];
    mpios3: any[] = [];

    constructor(private _divipola: DivipolaServiceService, private _mdl: MoodleServiceService, private fb: FormBuilder) {
        this.courseForms = this.fb.group(
            {
                selectedCursos: [''],
                selectedPSTs: ['']
            }
        )

        this.selectedFilters1 = this.fb.group(
            {
                selectedDeptos1: [''],
                selectedMpios1: ['']
            }
        )

        this.selectedFilters2 = this.fb.group(
            {
                selectedDeptos2: [''],
                selectedMpios2: ['']
            }
        )

        this.selectedFilters3 = this.fb.group(
            {
                selectedDeptos3: [''],
                selectedMpios3: ['']
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
            //console.log(data);

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
            console.log("Los departamentos son: " + this.deptos);

        })
    }

    onSelectChange(event: any): void {
        this.selectedValue = event.target.value;
    }


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
        console.log("Los psts son: " + this.psts)
    }
    imprimePSTs() {

    }

    buscaMunicipios1() {
        const arrDptos = this.selectedFilters1.value.selectedDeptos1;
        let arrMpios: any[] = []
        arrDptos.forEach((element: { cod_depto: any }) => {
            this._divipola.getMunicipiosByDptoNumber(element.cod_depto).subscribe(data => {
                console.log("El municipio es: " + data)
                data.forEach((element: any) => {
                    arrMpios.push(element)
                });
            })
        });
        this.mpios1 = arrMpios
        console.log("Los municipios son: " + arrMpios)
    }

    buscaMunicipios2() {
        const arrDptos = this.selectedFilters2.value.selectedDeptos2;
        let arrMpios: any[] = []
        arrDptos.forEach((element: { cod_depto: any }) => {
            this._divipola.getMunicipiosByDptoNumber(element.cod_depto).subscribe(data => {
                console.log("El municipio es: " + data)
                data.forEach((element: any) => {
                    arrMpios.push(element)
                });
            })
        });
        this.mpios2 = arrMpios
        console.log("Los municipios son: " + arrMpios)
    }

    buscaMunicipios3() {
        const arrDptos = this.selectedFilters3.value.selectedDeptos3;
        let arrMpios: any[] = []
        arrDptos.forEach((element: { cod_depto: any }) => {
            this._divipola.getMunicipiosByDptoNumber(element.cod_depto).subscribe(data => {
                console.log("El municipio es: " + data)
                data.forEach((element: any) => {
                    arrMpios.push(element)
                });
            })
        });
        this.mpios3 = arrMpios
        console.log("Los municipios son: " + arrMpios)
    }

    listarPST() {
        const listUser: any[] = []
        this.courseForms.value.selectedPSTs.forEach((element: any) => {
            listUser.push(element.id)
        });
        this._mdl.getUsersByPST(this.courseForms.value.selectedPSTs).subscribe(data => {
        })
        console.log(listUser)
    }

}