import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OsService {

  private Url: string = "http://localhost:3000/os"

  constructor(private http: HttpClient) {
  }

  getOs(): Promise<any> {
    return this.http.get(this.Url).toPromise();
  }

  postOs(data: any): Promise<any> {
    return this.http.post(this.Url, data).toPromise();
  }

  getOsId(id: number): Observable<any> {
    return this.http.get(`${this.Url}/${id}`);
  }
}
