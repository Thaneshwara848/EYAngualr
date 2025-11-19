import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedriveformComponent } from './reactivedriveform.component';

describe('ReactivedriveformComponent', () => {
  let component: ReactivedriveformComponent;
  let fixture: ComponentFixture<ReactivedriveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactivedriveformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivedriveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
