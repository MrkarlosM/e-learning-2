import { Component, Input } from '@angular/core';

interface Curso {
name: string
}

@Component({
  selector: 'app-test-out',
  templateUrl: './test-out.component.html',
  styleUrls: ['./test-out.component.css']
})
export class TestOutComponent {

  @Input () valor!: any[];
}
