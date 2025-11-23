import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.interface';
import { QuestionComponent } from '../question/question.component';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-game',
  imports: [CommonModule, QuestionComponent, ScoreComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  questions: Question[] = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique'
    },
    {
      question: 'Quelle est la capitale de l\'Algérie ?',
      options: ['Alger', 'Tunis', 'Rabat', 'Le Caire'],
      reponse: 'Alger'
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge', 'Jaune'],
      reponse: 'Bleu'
    }
  ];

  currentQuestionIndex: number = 0;
  score: number = 0;
  correctAnswers: number = 0;
  wrongAnswers: number = 0;
  gameFinished: boolean = false;

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get totalQuestions(): number {
    return this.questions.length;
  }

  onAnswerSelected(selectedOption: string): void {
    const isCorrect = selectedOption === this.currentQuestion.reponse;
    
    if (isCorrect) {
      this.score += 10;
      this.correctAnswers++;
    } else {
      this.score = Math.max(0, this.score - 5);
      this.wrongAnswers++;
    }

    // Attendre 2 secondes avant de passer à la question suivante
    setTimeout(() => {
      this.nextQuestion();
    }, 2000);
  }

  onTimeExpired(): void {
    // Temps écoulé = réponse incorrecte
    this.score = Math.max(0, this.score - 5);
    this.wrongAnswers++;

    // Attendre 3 secondes pour afficher le message, puis passer à la question suivante
    setTimeout(() => {
      this.nextQuestion();
    }, 3000);
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finishGame();
    }
  }

  finishGame(): void {
    this.gameFinished = true;
  }

  restartGame(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
    this.gameFinished = false;
  }

  getPerformanceMessage(): string {
    const percentage = (this.correctAnswers / this.totalQuestions) * 100;
    
    if (percentage >= 80) {
      return 'Excellent travail ! 🏆';
    } else if (percentage >= 60) {
      return 'Bon travail ! 👍';
    } else {
      return 'Il faut réviser ! 📖';
    }
  }
}