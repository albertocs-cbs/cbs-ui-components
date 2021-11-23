import { NgModule } from '@angular/core';
import { CbsUiComponentsComponent } from './cbs-ui-components.component';
import { CardComponent } from './card/card/card.component';


@NgModule({
  declarations: [
    CbsUiComponentsComponent,
    CardComponent
  ],
  imports: [
  ],
  exports: [
    CbsUiComponentsComponent,
    CardComponent
  ]
})
export class CbsUiComponentsModule { }
