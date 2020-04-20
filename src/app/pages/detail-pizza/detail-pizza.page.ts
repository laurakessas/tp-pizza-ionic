import { Component, OnInit } from '@angular/core';
import PizzaDto from 'src/app/models/pizza.dto';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { loadavg } from 'os';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.page.html',
  styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage implements OnInit {
  pizza: PizzaDto;
  pizzaId: number;
  constructor(private route: ActivatedRoute, private pizzaService: PizzaService, ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pizzaId = params.id;
      console.log("DetailPizzaPage -> ngOnInit -> pizzaId", this.pizzaId)
      this.load();

    })
  }

  async load() {
    this.pizza = await this.pizzaService.getOne(this.pizzaId).toPromise();
    console.log("pizza", this.pizza);


  }





}
