import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, ButtonComponent],
  exports: [CardComponent, ButtonComponent],
})
export class SharedUiComponentsModule {}
