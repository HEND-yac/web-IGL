import { Component } from '@angular/core';
import { Student } from './typestudent'; 
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [FormsModule,UpperCasePipe],
  templateUrl: './etudiant.html',
  styleUrls: ['./etudiant.css'],
})
export class Etudiant {

    etudiant: Student = {
    id: 1,
    name: 'Hend Yacoub',
    classe: 'TI'
  };
}