import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientsAdminPage } from './ingredients-admin.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IngredientsAdminPage', () => {
  let component: IngredientsAdminPage;
  let fixture: ComponentFixture<IngredientsAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsAdminPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientsAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
