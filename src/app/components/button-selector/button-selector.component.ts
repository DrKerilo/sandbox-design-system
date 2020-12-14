import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-button-selector',
    templateUrl: './button-selector.component.html',
    styleUrls: ['./button-selector.component.scss']
})
export class ButtonSelectorComponent implements OnInit {
    public options = {
        types: ['primary', 'secondary', 'primary-ghost', 'destructive'],
        sizes: ['small', 'normal', 'big'],
        pictos: ['none', 'icon-left', 'icon-right', 'icon-only'],
        isDisabled: [false, true],
        isPageIndicator: [false, true],
        isPageSelected: [false, true]
    };

    public selectedType: string = this.options.types[0];
    public selectedSize: string = this.options.sizes[1];
    public selectedPicto: string = this.options.pictos[0];
    public isDisabled: boolean = this.options.isDisabled[0];
    public isPageIndicator: boolean = this.options.isPageIndicator[0];
    public isPageSelected: boolean = this.options.isPageSelected[0];

    constructor() { }

    ngOnInit(): void {
    }

    onChangeType(value) {
        console.log('type: ', value);
        this.selectedType = value;
    }

    onChangeSize(value) {
        console.log('size: ', value);
        this.selectedSize = value;
    }

    onChangePicto(value) {
        console.log('picto: ', value);
        this.selectedPicto = value;
    }

    onChangeState(value) {
        console.log('isDisabled: ', value);
        this.isDisabled = value === 'true';
    }

    onChangePageInd(value) {
        console.log('isPageIndicator: ', value);
        this.isPageIndicator = value === 'true';
    }

    onChangePageSelected(value) {
        console.log('isPageSelected: ', value);
        this.isPageSelected = value === 'true';
    }

}
