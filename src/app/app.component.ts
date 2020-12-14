import { Component } from '@angular/core';
import { Display } from './common/interfaces/display';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public display: Display = {
        displaySize: true,
        displayType: false
    };

    onDisplayChange(display) {
        this.display = display;
    }
}
