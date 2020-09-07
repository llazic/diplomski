import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {
  uri = 'http://localhost:3232';

  constructor(private http: HttpClient, private router : Router) {}

  dodajUslugu(naziv, trajanje, cena, firma_id) {
    const data = {
      naziv : naziv,
      trajanje : trajanje,
      cena : cena,
      firma_id : firma_id
    }
    return this.http.post(`${this.uri}/usluga`, data);
  }

  dohvatiUsluge(firma_id){
    return this.http.get(`${this.uri}/usluge/${firma_id}`);
  }

  dodajZaposlenog(ime, prezime, email, firma_id, usluge) {
    const data = {
      ime : ime,
      prezime : prezime,
      email : email,
      firma_id : firma_id,
      usluge : usluge
    }
    return this.http.post(`${this.uri}/zaposleni`, data);
  }
}