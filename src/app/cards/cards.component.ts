import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.type = this.route.snapshot.params['type'];

    // this.route.params.subscribe((params: Params) => {
    //   this.type = params['type'];
    // });

  }

}
