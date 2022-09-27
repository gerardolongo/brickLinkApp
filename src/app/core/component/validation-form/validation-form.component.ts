import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BrickLinkService} from "../../service/brickLinkService";

@Component({
    selector: 'validation-form',
    templateUrl: './validation-form.component.html',
    styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit {
    result: string = '';
    form: FormGroup;
    submitted: boolean = false;
    isLoading: boolean = false;

    constructor(private formBuilder: FormBuilder,
                private brickLinkService: BrickLinkService) {

        this.form = this.formBuilder.group({
            numItem: ['', Validators.required],
            text: ['']
        });
    }

    ngOnInit(): void { }

    get f() {
        return this.form.controls;
    }

    get numItem() { return this.form.get('numItem')?.value; }

    get text() { return this.form.get('text')?.value; }

    onSubmit(): void {
        this.submitted = true;
        this.result = '';
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        this.brickLinkService.getResource(this.numItem)
            .subscribe( {
                    next: (result) => {
                        this.form.reset('numItem')
                        this.submitted = false;
                        this.isLoading = false;
                        this.result = result;
                        this.form.get('text')?.setValue(result);
                    },
                    error: (e) => {
                        this.isLoading = false;
                        this.submitted = false
                    },
                }
            );
    }

}
