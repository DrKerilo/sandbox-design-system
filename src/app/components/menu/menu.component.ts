import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Display } from 'src/app/common/interfaces/display';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input() display: Display;

    @Output() displayChange = new EventEmitter<Display>();

    constructor() { }

    ngOnInit(): void {
    }

    toggleDisplaySize() {
        this.display.displaySize = !this.display.displaySize;
        this.displayChange.emit(this.display);
    }

    toggleDisplayType() {
        this.display.displayType = !this.display.displayType;
        this.displayChange.emit(this.display);
    }
}
