import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CameraDirective } from './directives/camera.directive';

const _PROVIDDERS = [
    AuthService
];

const _DECLARATIONS = [
    CameraDirective
];

@NgModule({
    imports: [],
    exports: [
        ..._DECLARATIONS
    ],
    declarations: [
        ..._DECLARATIONS
    ],
    providers: [
        ..._PROVIDDERS
    ],
})
export class SharedModule { }
