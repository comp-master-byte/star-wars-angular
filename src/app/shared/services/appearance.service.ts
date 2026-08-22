import { Injectable } from "@angular/core";

const PALETTE_KEY = 'appearance-palette';
const THEME_KEY = 'appearance-theme';

type ColorPalette = {
  id: string;
  hex: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppearanceService {
  public currentPalette!: string;
  public currentTheme!: string;
  public themes: ColorPalette[] = [
    {id: 'white', hex: '#fff'},
    {id: 'dark', hex: '#000'},
  ]
  public palettes: ColorPalette[] = [
    { id: 'imperial-yellow', hex: '#FFE81F' },
    { id: 'rebel-red', hex: '#FF3B30' },
    { id: 'hoth-cyan', hex: '#22D3EE' },
    { id: 'jedi-green', hex: '#4ADE80' },
    { id: 'sith-purple', hex: '#A855F7' },
  ]

  init() {
    this.initPalette();
    this.initTheme();
  }

  private initPalette() {
    const currentPalette = localStorage.getItem(PALETTE_KEY);

    if(!currentPalette) {
      this.currentPalette = 'imperial-yellow';
      localStorage.setItem(PALETTE_KEY, this.currentPalette);
      return;
    }

    this.currentPalette = currentPalette;
  }

  private initTheme() {
    const currentTheme = localStorage.getItem(THEME_KEY);

    if(!currentTheme) {
      this.currentTheme = 'dark';
      localStorage.setItem(THEME_KEY, this.currentTheme);
      return;
    }

    this.currentTheme = currentTheme;
  }

  setColorPalette(paletteId: ColorPalette['id']) {
    this.currentPalette = paletteId;
    localStorage.setItem(PALETTE_KEY, this.currentPalette);
  }

  setTheme(themeId: ColorPalette['id']) {
    this.currentTheme = themeId;
    localStorage.setItem(THEME_KEY, this.currentTheme);
  }
}