import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTamplateComponent } from './main-tamplate.component';

describe('MainTamplateComponent', () => {
  let component: MainTamplateComponent;
  let fixture: ComponentFixture<MainTamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTamplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
