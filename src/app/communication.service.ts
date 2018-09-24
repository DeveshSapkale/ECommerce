import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class CommunicationService {
  baseUrl = 'http://localhost:53372/api/';
  constructor(private http: HttpClient) { }
  GetAllData(items: string) {
    return this.http.get(this.baseUrl + items);
  }

  CreateData(actionUrl, item) {
    return this.http.post(this.baseUrl + actionUrl,
      JSON.stringify(item),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  GetItem(id: number, actionUrl: string) {
    return this.http.get(this.baseUrl + actionUrl + '/' + id);
  }

  DeleteData(id: number, actionUrl: string) {
    return this.http.delete(this.baseUrl + actionUrl + '/' + id);
  }

  UpdateData(id: number, item, actionUrl: string) {
    return this.http.put(this.baseUrl + actionUrl + '/' + id
      , JSON.stringify(item),
      { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }

  GetCategories(actionUrl) {
    return this.http.get(this.baseUrl + actionUrl);
  }
}
