import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCardsPage } from './list-cards.page';

describe('ListCardsPage', () => {
  let component: ListCardsPage;
  let fixture: ComponentFixture<ListCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
