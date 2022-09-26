import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'brickLinkApp';

    result: string = '';
    form: FormGroup;
    submitted: boolean = false;
    API_URL = environment.apiUrl;

    constructor(protected httpClient: HttpClient,
                private formBuilder: FormBuilder) {

        this.form = this.formBuilder.group({
            numItem: ['', Validators.required]
        });
    }

    ngOnInit(): void {

    }

    get numItem() { return this.form.get('numItem')?.value; }

    onSubmit(): void {
        this.submitted = true;
        this.result = '';
        //this.form.disable();
       this.httpClient.get(`${environment.apiUrl}/bricklink/${this.numItem}`, { responseType: 'text' })
       .subscribe(result => {
            this.submitted = false;
            this.result = result;
        }, err => this.submitted = false);
    }
}
