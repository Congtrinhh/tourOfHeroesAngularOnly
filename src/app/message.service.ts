import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public messages: string[] = [];

  constructor() {}

  add(message: string): void {
    this.messages = [message, ...this.messages];
    if (this.messages.length > 10) {
      this.messages.pop();
    }
  }

  clear(): void {
    this.messages = [];
  }
}
