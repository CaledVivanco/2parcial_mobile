import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTransactionsPage } from './list-transactions.page';

describe('ListTransactionsPage', () => {
  let component: ListTransactionsPage;
  let fixture: ComponentFixture<ListTransactionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
