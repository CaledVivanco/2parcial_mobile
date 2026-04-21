import { Component } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction';
import { BiometricService } from '../../../services/biometric';
import { fa, faker } from '@faker-js/faker';

@Component({
  selector: 'app-payment',
  standalone:false,
  templateUrl: './payment.page.html',
})
export class PaymentPage {

  constructor(
    private transactionService: TransactionService,
    private biometric: BiometricService
  ) {}

  async simularPago() {

    await this.biometric.auth(); 

    const transaccion = {
      merchant: faker.company.name(),
      amount: faker.number.int({ min: 1000, max: 100000 }),
      date: new Date()
    };

    await this.transactionService.guardarTransaccion(transaccion);

    console.log('Pago realizado ');
  }
}