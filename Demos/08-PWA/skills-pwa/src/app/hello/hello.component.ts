import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  @Input() greeting: string;

  constructor() {
    this.greeting = '';
  }

  ngOnInit() {}
}
