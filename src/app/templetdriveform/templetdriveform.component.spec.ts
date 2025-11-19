import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletdriveformComponent } from './templetdriveform.component';

describe('TempletdriveformComponent', () => {
  let component: TempletdriveformComponent;
  let fixture: ComponentFixture<TempletdriveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempletdriveformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletdriveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
