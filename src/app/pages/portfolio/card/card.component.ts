import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ) {
    // http://localhost:4200/portfolio/1 ex: rota com param...
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    // http://localhost:4200/portfolio/1 ex: rota filha com param...
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )

  // http://localhost:4200/portfolio/1?{name=jose&token=123} ex: rota com query param...
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )

    // http://localhost:4200/portfolio/1?{name=jose&token=123} ex: rota filha com query param...
    this.parametrizador.firstChild?.queryParams.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {
   // setInterval(() => {
   //   this.navegador.navigate(['/'])
   // }, 5000)
  }
}
