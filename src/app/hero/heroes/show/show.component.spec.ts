import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroShowComponent } from './show.component';

describe('ShowComponent', () => {
  let component: HeroShowComponent;
  let fixture: ComponentFixture<HeroShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
