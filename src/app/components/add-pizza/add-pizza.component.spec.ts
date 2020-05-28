import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPizzaComponent } from './add-pizza.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddPizzaComponent', () => {
  let component: AddPizzaComponent;
  let fixture: ComponentFixture<AddPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPizzaComponent],
      imports: [IonicModule.forRoot(), FormsModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
