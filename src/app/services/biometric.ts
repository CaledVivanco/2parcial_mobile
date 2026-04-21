import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  async auth() {
    console.log('Biometría OK');
    return true;
  }

}
