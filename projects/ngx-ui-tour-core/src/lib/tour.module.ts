import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TourHotkeyListenerComponent} from './tour-hotkey-listener.component';
import {TourService} from './tour.service';
import {BackdropConfig, TourBackdropService} from './tour-backdrop.service';
import { TourResizeObserverService } from './tour-resize-observer.service'

@NgModule({
    declarations: [TourHotkeyListenerComponent],
    exports: [TourHotkeyListenerComponent],
    imports: [CommonModule, RouterModule],
})
export class TourModule {
    public static forRoot(): ModuleWithProviders<TourModule> {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
                TourBackdropService,
                TourResizeObserverService
            ],
        };
    }
}

export {TourService, TourBackdropService, BackdropConfig, TourResizeObserverService};
