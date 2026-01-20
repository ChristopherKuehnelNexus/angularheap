import { TemplateRef } from '@angular/core';
import { ButtonClass } from './button-class.type';
import { ModalSize } from './modal-size.enum';
import { StatusColor } from './status-color.enum';

export interface SwlModalConfig {
    title: string;
    content?: string;
    contentTemplate?: TemplateRef<any>;
    headerStatusColor: StatusColor;
    showYesNo?: boolean;
    showDelete?: boolean;
    buttonCancelText?: string;
    buttonOkText?: string;
    buttonCancelClass?: ButtonClass | string;
    buttonOkClass?: ButtonClass | string;
    modalSize?: ModalSize;
}
