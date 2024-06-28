import { Component } from '@angular/core';
import { OpenAiService } from '../service/openai.service';
import { ChildRegistrationService } from '../service/child-registration.service';

@Component({
  selector: 'app-make-wish',
  templateUrl: './make-wish.component.html',
  styleUrl: './make-wish.component.css'
})
export class MakeWishComponent {
  public userInput: string = '';
  public response: string = '';
  public childName: string = '';
  public isRegistered: boolean | null = null;
  public isUnderAge: boolean | null = null;

  ngOnInit(): void {
    // ..
  }

  constructor(private openAiService: OpenAiService,
    private childRegistrationService: ChildRegistrationService) { }

  checkChild() {
    this.isRegistered = this.childRegistrationService.isChildRegistered(this.childName);
    this.isUnderAge = this.childRegistrationService.isChildUnderAge(this.childName);
  }

  async sendRequest() {
    if (this.userInput.trim()) {
      this.response = 'Waiting for Santa...';
      try {
        this.response = await this.openAiService.getResponse(`Santa, I would like ${this.userInput}`);
        console.log(this.response);
      } catch (error) {
        this.response = 'Sorry, something went wrong.';
      }
    }
  }
}
