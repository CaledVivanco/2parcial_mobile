import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  async login(email: string, password: string) {
    console.log('Login con:', email, password);

    
    return Promise.resolve(true);
  }
}