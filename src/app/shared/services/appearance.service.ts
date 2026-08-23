import { Injectable } from "@angular/core";
import { CARDS_VIEW_KEY } from "@shared/consts";

const PALETTE_KEY = 'appearance-palette';
const THEME_KEY = 'appearance-theme';

type Palette = 
  | 'imperial-yellow'
  | 'rebel-red'
  | 'hoth-cyan'
  | 'jedi-green'
  | 'sith-purple';

type Theme = 
  | 'imperial-black'
  | 'carbon-steel'
  | 'void-crimson';

type AppearancePalette = Record<Palette, string>;
type AppearanceTheme = Record<Theme, string>;
type CardsViewMode = 'compact' | 'default';

@Injectable({
  providedIn: 'root',
})
export class AppearanceService {
  public cardsViewMode!: CardsViewMode;
  public currentPalette!: Palette;
  public currentTheme!: Theme;
  public themes: AppearanceTheme = {
    'imperial-black': '#080808', // 0A0A0A | 080808 | 050505 | 030303
    'carbon-steel': '#12161C',
    'void-crimson': '#160E12',
    // Светлая тем: Приложение нужно будет сильно адаптировать к ней, пока не готовы добавлять
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
    this.initCardsViewMode();
  }

  private initCardsViewMode() {
    const cardsViewMode = localStorage.getItem(CARDS_VIEW_KEY) as CardsViewMode;

    if(!cardsViewMode) {
      this.setCardsViewMode('default');
      return;
    }

    this.setCardsViewMode(cardsViewMode);
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
      this.setTheme('imperial-black');
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
    document.documentElement.style.setProperty('--theme-main', this.themes[this.currentTheme]);
  }

  setCardsViewMode(mode: CardsViewMode): void {
    this.cardsViewMode = mode;
    localStorage.setItem(CARDS_VIEW_KEY, mode);
  }
}