import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleARoutingModule} from './module-a-routing.module';
import {ModuleAComponent} from './module-a.component';

import {TourAnchorMatMenuDirective} from 'ngx-ui-tour-md-menu';

@NgModule({
    imports: [
        CommonModule,
        ModuleARoutingModule,
        TourAnchorMatMenuDirective
    ],
    declarations: [ModuleAComponent]
})
export class ModuleAModule {}
