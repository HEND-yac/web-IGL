import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  // Game state
  questions: Array<any> = [
    {
      id: 1,
      question: 'Quelle est la capitale de la France ?',
      options: ['Paris', 'Lyon', 'Marseille', 'Toulouse'],
      reponse: 'Paris',
      answered: false,
      selected: null
    },
    {
      id: 2,
      question: 'Combien de continents y a-t-il sur terre ?',
      options: ['5', '6', '7', '8'],
      reponse: '7',
      answered: false,
      selected: null
    },
    {
      id: 3,
      question: "Quelle couleur obtient-on en mélangeant le bleu et le jaune ?",
      options: ['Vert', 'Orange', 'Violet', 'Rose'],
      reponse: 'Vert',
      answered: false,
      selected: null
    }
  ];

  score: number = 0;
  history: Array<{ question: string; selected: string; correct: boolean }> = [];
  currentIndex: number = 0; // index of the visible question (one at a time)
  feedback: { message: string; correct: boolean } | null = null;
  gameFinished: boolean = false;

  // Called when a player selects an option
  onSelectOption(selectedOption: string, question: any) {
    if (question.answered) return; // verrouillage: ne plus répondre

    question.answered = true;
    question.selected = selectedOption;

    const correct = selectedOption === question.reponse;
    if (correct) {
      this.score += 10;
      this.feedback = { message: 'Bonne réponse ! +10 points', correct: true };
    } else {
      this.score -= 5;
      this.feedback = { message: 'Mauvaise réponse. -5 points', correct: false };
    }

    this.history.push({ question: question.question, selected: selectedOption, correct });

    // Effacer le feedback après 1.8s
    setTimeout(() => (this.feedback = null), 1800);

    // Avancer vers la question suivante non répondue
    const next = this.questions.findIndex((q) => !q.answered);
    if (next >= 0) {
      this.currentIndex = next;
    } else {
      // toutes répondues
      this.currentIndex = -1;
    }
  }

  isCorrect(option: string, question: any): boolean {
    return question.answered && option === question.reponse;
  }

  isSelected(option: string, question: any): boolean {
    return question.selected === option;
  }

  allAnswered(): boolean {
    return this.questions.every((q) => q.answered === true);
  }

  finishGame() {
    this.gameFinished = true;
  }

  resetGame() {
    this.questions.forEach((q) => {
      q.answered = false;
      q.selected = null;
    });
    this.score = 0;
    this.history = [];
    this.currentIndex = 0;
    this.feedback = null;
    this.gameFinished = false;
  }
}
