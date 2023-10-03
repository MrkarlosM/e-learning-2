import { HttpClient } from '@angular/common/http';
import { Curso } from './../models/interfaces/cursos';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoodleServiceService {
  endpoint: string = "http://54.225.85.252/moodle/webservice/rest/server.php?wstoken=572a4be5e96480be08346559ac5080ca"

  constructor(public http: HttpClient) { }
  //Todos los cursos
  getAllCourses(): Observable<any> {
    const mdl_function = "core_course_get_courses";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json");
  }

  //Obtiene los grupos de los cursos
  getPSTByCourse(course: any): Observable<any> {
    const mdl_function = "core_group_get_course_groups";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json" + `&courseid=${course}`);
  }

  //Obtiene los miembros del grupo
  getUsersByPST(group: any): Observable<any> {
    const mdl_function = "core_group_get_group_members";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json" + `&groupids[0]=${group}`);
  }

  //Obtiene usuarios por su ID
  getUserById(id: any): Observable<any> {
    const mdl_function = "core_user_get_users";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json" + `&criteria[0][key]=id&criteria[0][value]=${id}`);
  }

  //
  getUserByLocation(): Observable<any> | string {
    const xd = "";
    return xd
  }

  //Obtiene el estado de completitud de un curso por parte de un usuario con su userid y su courseid
  getCourseCompletionStatus(userid: any, courseid: any): Observable<any> {
    const mdl_function = "core_completion_get_course_completion_status";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json" + `&courseid=${courseid}` + `&userid=${userid}`);
  }
}
