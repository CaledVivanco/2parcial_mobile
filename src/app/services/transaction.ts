import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  guardarTransaccion(data: any) {
    console.log('Guardando:', data);
  }

}