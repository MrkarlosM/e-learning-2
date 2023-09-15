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

  //PST dado un curso
  getPSTByCourse(course: any): Observable<any> {
    const mdl_function = "core_group_get_course_groups";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json" + `&courseid=${course}`);
  }

  getUsersByPST(group: any): Observable<any> {
    const mdl_function = "core_group_get_group_members";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json" + `&courseid=${group}`);
  }

  getUserById(id: any): Observable<any> {
    const mdl_function = "core_user_get_users";
    return this.http.get(this.endpoint + `&wsfunction=${mdl_function}` + "&moodlewsrestformat=json" + `criteria[0][key]=id&criteria[0][value]=${id}`);
  }
}
