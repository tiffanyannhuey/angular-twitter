import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SearchTweetsService } from '../services/search-tweets.service';


@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.scss']
})
export class TwitterSearchComponent implements OnInit {

  twitterForm: FormGroup;
  public tweetlist: any[];

  constructor(
    private _formBuilder: FormBuilder,
    private _searchService: SearchTweetsService
  ) { }

  ngOnInit() {
    this.twitterForm = this._formBuilder.group({
      query: ''
    })

    this._searchService.tweets.subscribe(data => {
      if (data && data.length > 0) {
        console.log('what is this', data);
        this.tweetlist = data;
      }
    })
  }

  submitForm( text: string ): void {
    this._searchService.search( text );

  }


}
