import { Injectable } from "@angular/core";

export type CookieSameSite = 'Strict' | 'Lax' | 'None';

export interface CookieOptions {
  expires?: Date;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: CookieSameSite;
}

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  set(key: string, value: string, options: CookieOptions = {}): void {
    if (!this.isAvailable()) {
      return;
    }

    document.cookie = [
      `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      ...this.getOptions(options),
    ].join('; ');
  }

  get(key: string): string | null {
    if (!this.isAvailable()) {
      return null;
    }

    const encodedKey = `${encodeURIComponent(key)}=`;
    const cookie = document.cookie
      .split(';')
      .map((item) => item.trim())
      .find((item) => item.startsWith(encodedKey));

    return cookie ? this.decode(cookie.slice(encodedKey.length)) : null;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string, options: Pick<CookieOptions, 'path' | 'domain'> = {}): void {
    this.set(key, '', {
      ...options,
      expires: new Date(0),
      maxAge: 0,
    });
  }

  private getOptions(options: CookieOptions): string[] {
    const result: string[] = [];

    if (options.expires) {
      result.push(`expires=${options.expires.toUTCString()}`);
    }

    if (typeof options.maxAge === 'number') {
      result.push(`max-age=${options.maxAge}`);
    }

    if (options.path) {
      result.push(`path=${options.path}`);
    }

    if (options.domain) {
      result.push(`domain=${options.domain}`);
    }

    if (options.secure) {
      result.push('secure');
    }

    if (options.sameSite) {
      result.push(`samesite=${options.sameSite}`);
    }

    return result;
  }

  private decode(value: string): string {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  }

  private isAvailable(): boolean {
    return typeof document !== 'undefined';
  }
}
