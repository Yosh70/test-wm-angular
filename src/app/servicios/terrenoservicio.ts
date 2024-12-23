import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TerrenoServicio {
    API_URL: string = 'https://localhost:7230/';
    constructor(private httpclient: HttpClient) { }

    GetTerreno(id: number): Observable<any> {
        return this.httpclient.get(this.API_URL + `geografia/terreno/${id}`).pipe(res => res);

    }
}
