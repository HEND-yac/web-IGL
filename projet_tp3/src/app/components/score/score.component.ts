import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  @Input() score: number = 0;
  @Input() correctAnswers: number = 0;
  @Input() wrongAnswers: number = 0;
  @Input() currentQuestion: number = 1;
  @Input() totalQuestions: number = 1;
}