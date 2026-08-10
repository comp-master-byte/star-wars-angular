import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stub-page',
  imports: [],
  templateUrl: './stub-page.html',
  styleUrl: './stub-page.css',
})
export class StubPage {
  eyebrow = input('Coming soon');
  title = input('This page is still in hyperspace');
  description = input('The archives are being prepared. Check back later to explore this section of the galaxy.');
}
