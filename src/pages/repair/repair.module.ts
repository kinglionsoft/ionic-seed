import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RepairPage }   from './list/list';
import { RepairService } from './repair.service';
import { RmbPipe } from './pipes/rmb.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    imports: [IonicModule],
    exports: [],
    declarations: [RepairPage,RmbPipe,HighlightDirective],
    entryComponents:[RepairPage],
    providers: [
        RepairService
    ]

})
export class RepairModule { }
