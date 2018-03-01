import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading.component';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, LoadingComponent, ErrorComponent],
  exports: [HeaderComponent, LoadingComponent, ErrorComponent]
})
export class CoreModule { }
