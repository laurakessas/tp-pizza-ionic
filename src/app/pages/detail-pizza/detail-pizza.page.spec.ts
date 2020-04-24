import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPizzaPage } from './detail-pizza.page';
import { IngredientService } from 'src/app/services/ingredient.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuModule } from 'src/app/components/menu/menu.module';

describe('DetailPizzaPage', () => {
  let component: DetailPizzaPage;
  let fixture: ComponentFixture<DetailPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPizzaPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, MenuModule],
      providers: [IngredientService]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
