import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { PizzaService } from '../services/pizza.service';
import { CartModule } from '../components/cart/cart.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), CartModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PizzaService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
