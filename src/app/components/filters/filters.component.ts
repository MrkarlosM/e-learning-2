import { MoodleServiceService } from 'src/app/services/moodle-service.service';
import { DivipolaServiceService } from './../../services/divipola-service.service';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output () salida: EventEmitter<Event[]> = new EventEmitter();
  //Variables
  courseForms: FormGroup;
  psts: any[]  = [];
  cursos: any;
  mpios: any[] = [];
  deptos: any;

  //Selects auxiliares
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

  //Estilos
  selectStyles = {
    'width': "100%",
    'max-width': "660px",
    'min-width': "660px"
  }
  selectStyles2 = {
    'width': "33%",
    'max-width': "220px",
    'min-width': "220px"
  }

  constructor(private fb: FormBuilder, private _mdl: MoodleServiceService, private _divipola: DivipolaServiceService) {
    this.courseForms = this.fb.group(
      {
        selectedCursos: [''],
        selectedPSTs: [''],
        selectedDeptos: [''],
        selectedMpios: [''],
        selectedTipos: ['']
      }
    )

  }

  ngOnInit() {
    this._mdl.getAllCourses().subscribe(data => {
      data.shift()
      this.cursos = data;
      console.log("Los cursos si son", this.cursos)
      this.courseForms.patchValue({
        selectedCursos: this.cursos
      });
      console.log("Los cursos seleccionados son: ", this.courseForms.value.selectedCursos)
    })

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

  /*Con la lista de cursos, seleccionamos grupos: 1 Grupo = 1 PST
Devolvemos la lista de PSTs (Grupos)*/
  async muestraPST() {
    //Recibe valores de cursos
    const arrcursos = this.courseForms.value.selectedCursos;
    //Arreglo de grupos (PSTs)
    let arrPst: any[] = []
    //Promesa que extrae los Grupos al ingresar la id del curso
    await Promise.all(arrcursos.map(async (courseID: any) => {
      let data = await firstValueFrom(this._mdl.getPSTByCourse(courseID.id))
      if (data[0] !== undefined) {
        data.forEach((element: any) => {
          arrPst.push(element)
        });
      }
    }))
    this.psts = arrPst
    this.emite()
  }

  //Busca Municipios con relación a los Departamentos Seleccionados
  buscaMunicipios() {
    const arrDptos = this.courseForms.value.selectedDeptos;
    let arrMpios: any[] = []
    arrDptos.forEach((element: { cod_depto: any }) => {
      this._divipola.getMunicipiosByDptoNumber(element.cod_depto).subscribe(data => {
        data.forEach((element: any) => {
          arrMpios.push(element)
        });
      })
    });
    this.mpios = arrMpios
    this.emite()
  }

  emite(){
    this.salida.emit(this.psts);
  }

}
