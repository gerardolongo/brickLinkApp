import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class BrickLinkService {

    constructor(private httpClient: HttpClient) {

    }

    getResource(numItem: string) : Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/bricklink/${numItem}`, {responseType: 'text'})
    }

    downloadFile(numItem: string): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/bricklink/${numItem}`, {responseType: 'blob'})
    }
}
