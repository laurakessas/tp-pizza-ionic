import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzasAdminPage } from './pizzas-admin.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PizzasAdminPage', () => {
  let component: PizzasAdminPage;
  let fixture: ComponentFixture<PizzasAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasAdminPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzasAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
