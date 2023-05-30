import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  public BASE_URL$: BehaviorSubject<String> = new BehaviorSubject<String>('');

  constructor() { }
  
}
