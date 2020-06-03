import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';

import { PaginationComponent } from './ui/pagination/pagination.component'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    // LoginComponent,
    // ThousandsPipe,
    // PaginationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  entryComponents: [

  ],
  providers: [
    
  ]
})
export class SharedModule { }
