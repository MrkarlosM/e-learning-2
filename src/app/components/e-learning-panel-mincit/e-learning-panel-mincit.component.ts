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

    selectStyles2 = {
        'width': "80%",
        'margin-bottom': "5px",
        'max-width': "250px"
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

    documentStyle = getComputedStyle(document.documentElement);
    textColor = this.documentStyle.getPropertyValue('--text-color');
    textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

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

        this._mdl.getAllCourses().subscribe(data => {
            data.shift()
            this.cursos = data;
            console.log("Los cursos si son", this.cursos)
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
                        color: this.textColor
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
                    backgroundColor: [this.documentStyle.getPropertyValue('--red-500'), this.documentStyle.getPropertyValue('--green-500'), this.documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [this.documentStyle.getPropertyValue('--red-400'), this.documentStyle.getPropertyValue('--green-400'), this.documentStyle.getPropertyValue('--green-400')],
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
                        color: this.textColor
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
                    backgroundColor: [this.documentStyle.getPropertyValue('--yellow-500'), this.documentStyle.getPropertyValue('--blue-500'), this.documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [this.documentStyle.getPropertyValue('--yellow-400'), this.documentStyle.getPropertyValue('--blue-400'), this.documentStyle.getPropertyValue('--green-400')],
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
                        color: this.textColor
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
    async muestraPST() {
        //Recibe valores de cursos
        const arrcursos = this.courseForms.value.selectedCursos;
        //Arreglo de grupos (PSTs)
        let arrPst: any[] = []
        //Promesa que extrae los Grupos al ingresar la id del curso
        await Promise.all(arrcursos.map(async (courseID: any)=>{
            let data = await firstValueFrom(this._mdl.getPSTByCourse(courseID.id))
            if (data[0] !== undefined) {
                data.forEach((element: any) => {
                    arrPst.push(element)
                });
            }
        }))
        this.psts = arrPst
    }

    /*Listamos los usuarios de los PSTs seleccionados*/
    async listarPST() {

        let listUserofGroup: any[] = []
        let listUsers: any[] = []
        let listPST: any[] = []
        let listNorma: any[] = []
        //De los cursos seleccionados obtenemos la id de los cursos
        this.courseForms.value.selectedCursos.forEach((course: any) => {
            if (course !== undefined) {
                listNorma.push(course.id)
            }
        });

        //Obtenemos los grupos (PSTs) de las id de los cursos
        await Promise.all(listNorma.map(async (courseID: any) => {
            let data = await firstValueFrom(this._mdl.getPSTByCourse(courseID))
            if (data[0] !== undefined) {
                data.forEach((element: { id: any }) => {
                    listPST.push(element.id)
                });
            }
        }));

        //Obtenemos los usuarios de esos grupos (psts)
        await Promise.all(listPST.map(async (pstID: any) => {
            console.log("Usaré el id: ", pstID)
            let data = await firstValueFrom(this._mdl.getUsersByPST(pstID))
            console.log(data)
            if (data[0] !== undefined) {
                listUserofGroup.push(data[0])
                listUsers.push(data[0].userids)
            }
        }))

        //Verificamos si completaron o no.
        let completed = await this.checkCourseCompletion([listNorma, listUsers.flat()])
        console.log("COMPLETADOS", completed)
        //Ponemos los datos para visualizar
        this.basicData2 = {
            labels: ['Total Cursos Terminados por PST', 'Total Matriculados'],
            datasets: [
                {
                    label: 'Cobertura asistencia PST',
                    data: [completed, listUsers.flat().length],
                    backgroundColor: [this.documentStyle.getPropertyValue('--red-500'), this.documentStyle.getPropertyValue('--green-500'), this.documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [this.documentStyle.getPropertyValue('--red-400'), this.documentStyle.getPropertyValue('--green-400'), this.documentStyle.getPropertyValue('--green-400')],
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

    async checkCourseCompletion(usuarioCursos: any) {
        let completed = 0;
        let incomplete = 0;
        await Promise.all(usuarioCursos[0].map(
            async (curso: any) => {
                await Promise.all(usuarioCursos[1].map(
                    async (usuario: any) => {
                        try {
                            let data = await firstValueFrom(this._mdl.getCourseCompletionStatus(usuario, curso))
                            switch (data.completionstatus.completed) {
                                case true:
                                    completed = completed + 1;
                                    break;
                                case false:
                                    incomplete = incomplete + 1;
                                    break;
                                default:
                                    break;
                            }
                        } catch (error) {
                        }
                        console.log("El total de completas es: ", completed, " mientras que el total de incompletas es: ", incomplete)
                    }
                ));
            }
        ));
        console.log("Voy a mandar: ", completed, " y ", incomplete);
        return completed;
    }

}