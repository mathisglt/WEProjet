import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-suggestions',
  templateUrl: './quiz-suggestions.component.html',
  styleUrls: ['./quiz-suggestions.component.css']
})
export class QuizSuggestionsComponent implements OnInit {
  error: string | null = null;
  themes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchThemes();
  }

  fetchThemes() {
    this.http.get<any>('https://opentdb.com/api_category.php').subscribe({
      next: (response) => {
        console.log(response);
        if (response.trivia_categories) {
          this.themes = response.trivia_categories;
          this.themes = this.getRandomThemes(this.themes, 5);
        } else {
          this.error = 'Aucun thème trouvé.';
        }
      },
      error: (error) => {
        this.error = 'Erreur lors de la récupération des thèmes.';
      }
    });
  }

  getRandomThemes(themes: any[], count: number): any[] {
    const melange = themes.sort(() => 0.5 - Math.random());
    return melange.slice(0, count);
  }
}
