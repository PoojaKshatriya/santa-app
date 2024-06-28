import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { OpenAiService } from './service/openai.service';
import { ChildRegistrationService } from './service/child-registration.service';
import { MakeWishModule } from './make-wish/make-wish.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,  
        ReactiveFormsModule,
        MakeWishModule
    ],
    providers: [OpenAiService, ChildRegistrationService]
})
export class AppModule { }
