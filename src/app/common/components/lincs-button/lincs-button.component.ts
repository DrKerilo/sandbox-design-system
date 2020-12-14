import { Component, Input, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../../enum/button-enum';

@Component({
    selector: 'app-lincs-button',
    templateUrl: './lincs-button.component.html',
    styleUrls: ['./lincs-button.component.scss']
})
export class LincsButtonComponent implements OnInit {

    @Input() type = ButtonType.Primary;
    @Input() size = ButtonSize.Normal;
    @Input() picto: string;
    @Input() icon: string;
    @Input() isPageIndicator = false;
    @Input() isPageSelected = false;

    constructor() { }

    ngOnInit(): void {
    }

}
