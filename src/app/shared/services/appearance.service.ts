import { Injectable } from "@angular/core";

const PALETTE_KEY = 'appearance-palette';
const THEME_KEY = 'appearance-theme';

type Palette = 
  | 'imperial-yellow'
  | 'rebel-red'
  | 'hoth-cyan'
  | 'jedi-green'
  | 'sith-purple';

type Theme = 'light' | 'dark';
type AppearancePalette = Record<Palette, string>;
type AppearanceTheme = Record<Theme, string>;

@Injectable({
  providedIn: 'root',
})
export class AppearanceService {
  public currentPalette!: Palette;
  public currentTheme!: Theme;
  public themes: AppearanceTheme = {
    'light': '#fff',
    'dark': '#000',
  }
  public palettes: AppearancePalette = {
    'imperial-yellow': '#FFE81F',
    'rebel-red': '#FF3B30',
    'hoth-cyan': '#22D3EE',
    'jedi-green': '#4ADE80',
    'sith-purple': '#A855F7',
  }
  public paletteKeys = Object.keys(this.palettes) as Palette[];
  public themeKeys = Object.keys(this.themes) as Theme[];

  init() {
    this.initPalette();
    this.initTheme();
  }

  private initPalette() {
    const palette = localStorage.getItem(PALETTE_KEY) as Palette;

    if(!palette) {
      this.setPalette('imperial-yellow');
      return;
    }

    this.setPalette(palette);
  }

  private initTheme() {
    const theme = localStorage.getItem(THEME_KEY) as Theme;

    if(!theme) {
      this.setTheme('dark');
      return;
    }

    this.setTheme(theme);
  }

  setPalette(palette: Palette) {
    this.currentPalette = palette;
    localStorage.setItem(PALETTE_KEY, this.currentPalette);
    document.documentElement.style.setProperty('--accent-palette', this.palettes[this.currentPalette]);
  }

  setTheme(theme: Theme) {
    this.currentTheme = theme;
    localStorage.setItem(THEME_KEY, this.currentTheme);
    document.documentElement.style.setProperty('--accent-theme', this.themes[this.currentTheme]);
  }
}