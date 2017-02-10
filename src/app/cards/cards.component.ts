import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: string;

  ts: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // this.type = this.route.snapshot.params['type'];

    this.route.params.subscribe((params: Params) => {
      this.type = params['type'];
    });

    // this.ts = +this.route.snapshot.queryParams['ts'];

    this.route.queryParams.subscribe((params: Params) => {
      this.ts = params['ts'];
    })

  }

  goType(type: string) {
    this.router.navigate(['cards', type], {
      queryParams: { ts: new Date().getTime() }
    });
    // this.router.navigate(['../' + type], { relativeTo: this.route });
    // this.router.navigateByUrl('/cards/' + type);
  }
}
