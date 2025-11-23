import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, GameComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Quiz Game');
  gameStarted: boolean = false;
  
  startGame(): void {
    this.gameStarted = true;
  }
  
  goHome(): void {
    this.gameStarted = false;
  }
}
