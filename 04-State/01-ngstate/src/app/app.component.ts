import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ThemeService } from './shared/theme/theme.service';
import { AppState } from './store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { getEditorVisible } from './store/selectors/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private ts: ThemeService,
    private store: Store<AppState>
  ) {}

  title: string = environment.title;
  selectedTheme = 'default';
  editorVisible = this.store.select(getEditorVisible);

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.ts.getTheme().subscribe((t) => {
      this.selectedTheme = t;
    });
  }

  toggleTheme() {
    this.selectedTheme = this.selectedTheme == 'default' ? 'dark' : 'default';
    console.log(this.selectedTheme);
  }
}
