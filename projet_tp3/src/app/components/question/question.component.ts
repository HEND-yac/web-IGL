import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.interface';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit, OnDestroy, OnChanges {
  @Input() question!: Question;
  @Output() answerSelected = new EventEmitter<string>();
  @Output() timeExpired = new EventEmitter<void>();
  
  selectedOption: string = '';
  answered: boolean = false;
  timeRemaining: number = 15; // 15 secondes par question
  timer: any;

  ngOnInit(): void {
    this.resetQuestion();
  }

  ngOnChanges(): void {
    this.resetQuestion();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  resetQuestion(): void {
    this.clearTimer();
    this.selectedOption = '';
    this.answered = false;
    this.timeRemaining = 15;
    this.startTimer();
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        this.onTimeOut();
      }
    }, 1000);
  }

  clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  onTimeOut(): void {
    if (!this.answered) {
      this.answered = true;
      this.clearTimer();
      this.timeExpired.emit();
    }
  }

  onSelectOption(option: string): void {
    if (!this.answered) {
      this.selectedOption = option;
      this.answered = true;
      this.clearTimer();
      this.answerSelected.emit(option);
    }
  }

  isCorrectOption(option: string): boolean {
    return this.answered && option === this.question.reponse;
  }

  isWrongOption(option: string): boolean {
    return this.answered && option === this.selectedOption && option !== this.question.reponse;
  }

  get timerColor(): string {
    if (this.timeRemaining > 10) return '#27ae60';
    if (this.timeRemaining > 5) return '#f39c12';
    return '#e74c3c';
  }

  get progressPercentage(): number {
    return (this.timeRemaining / 15) * 100;
  }
}