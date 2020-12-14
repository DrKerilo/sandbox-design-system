import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Display } from 'src/app/common/interfaces/display';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

    public sizes = ['big', 'normal', 'small'];
    public types = ['primary', 'secondary', 'primary-ghost', 'destructive'];
    @Input() display: Display;

    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        const matIcons = {
            'check': '../../../../assets/icons/check.svg',
        };

        // tslint:disable-next-line: forin
        for (const key in matIcons) {
            this.matIconRegistry.addSvgIcon(key,
                this.domSanitizer.bypassSecurityTrustResourceUrl(matIcons[key]));
        }
    }

    ngOnInit(): void {
    }


}
