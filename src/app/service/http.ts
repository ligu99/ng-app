import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StroageService } from './stroage';

@Injectable()
export class HttpService {
    constructor(
        private stroage:StroageService,  
        private http: HttpClient
    ) { }
  
    public async getData(url: string): Promise<Object> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.set('Authorization', this.stroage.getStroage("token"));
        const response = await this.http.get(url, { headers: headers }).toPromise();
        return response;
    }

    public async postData(url: string, params: any): Promise<Object> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.stroage.getStroage("token") });
        const response = await this.http.post(url, JSON.stringify(params), { headers: headers, responseType: 'json' }).toPromise();
        return response;
    }

    public async postData2(url: string, params: any): Promise<Object> {
        const formData = new FormData();
        for (var p in params) {
            formData.append( p, params[p]);
        }
        const response = await this.http.post(url, formData,).toPromise();
        return response;
    }
}