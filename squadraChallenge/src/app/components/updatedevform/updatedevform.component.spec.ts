import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedevformComponent } from './updatedevform.component';

describe('UpdatedevformComponent', () => {
  let component: UpdatedevformComponent;
  let fixture: ComponentFixture<UpdatedevformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedevformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedevformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
