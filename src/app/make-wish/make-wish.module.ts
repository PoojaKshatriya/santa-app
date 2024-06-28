import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MakeWishComponent } from './make-wish.component';
import { OpenAiService } from '../service/openai.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ MakeWishComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ OpenAiService ],
  exports: [
    MakeWishComponent
  ]
})
export class MakeWishModule { }