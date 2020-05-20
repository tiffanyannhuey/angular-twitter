import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable({
  providedIn: 'root'
})
export class SearchTweetsService {

  public tweets = new BehaviorSubject(<any>[]);

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  public search ( query: string ) {
    console.log(this.config.apiEndpoint + 'tweets', query )
    const tweetUrl = this.config.apiEndpoint + 'tweets';
    this.http.get<any>(tweetUrl).subscribe(response => {
      console.log(response)
      this.tweets.next(response.data.statuses);
    });
    
  }
}
