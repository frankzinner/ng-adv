import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventBusService } from 'src/app/shared/eventbus/event-bus.service';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { ThemeService } from '../theme/theme.service';
import { SidebarActions } from './sidebar-actions';
import { ToggleEditorAction } from '../../store/actions/app.actions';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(
    // private eb: EventBusService,
    private ts: ThemeService,
    private store: Store<AppState>
  ) {}

  // editorDisplayed = false;

  ngOnInit() {}

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    this.store.dispatch(new ToggleEditorAction());
    // if (this.editorDisplayed) {
    //   this.eb.triggerCmd(SidebarActions.HIDE_MARKDOWN);
    // } else {
    //   this.eb.triggerCmd(SidebarActions.SHOW_MARKDOWN);
    // }
    // this.editorDisplayed = !this.editorDisplayed;
  }

  uploadCloud() {
    console.log('Uploading to Cloud');
  }
}
