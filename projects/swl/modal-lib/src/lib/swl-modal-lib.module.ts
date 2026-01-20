import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwlModalViewComponent } from './components/modal-view/modal-view.component';
import { SwlModalTemplateViewComponent } from './components/modal-template-view/modal-template-view.component';

@NgModule({
    declarations: [SwlModalViewComponent, SwlModalTemplateViewComponent],
    imports: [CommonModule],
    exports: [SwlModalViewComponent, SwlModalTemplateViewComponent],
})
export class SwlModalLibModule {}
