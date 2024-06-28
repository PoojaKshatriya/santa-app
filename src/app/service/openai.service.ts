import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private backendUrl = 'http://localhost:3000/generate';

  constructor() { }

  async getResponse(prompt: string): Promise<string> {
    try {
      const response = await axios.post(this.backendUrl, { prompt });
      return response.data[0].generated_text.trim();
    } catch (error) {
      console.error('Error communicating with backend:', error);
      throw error;
    }
  }
}
