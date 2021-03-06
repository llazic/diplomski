import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZaposleniService {
  uri = 'http://localhost:3232';

  constructor(private http: HttpClient, private router: Router) { }
  

  dohvatiRadnoVreme(zaposleni_id, datum){
    const data = {
      zaposleni_id : zaposleni_id,
      datum : datum,
    }
    return this.http.get(`${this.uri}/termini/zaposleni/${zaposleni_id}/${datum}`);
  }

  promeniLozinku(zaposleni_id, stara_lozinka, nova_lozinka) {
    const data = {
      zaposleni_id : zaposleni_id,
      stara_lozinka : stara_lozinka,
      nova_lozinka : nova_lozinka
    }
    return this.http.put(`${this.uri}/zaposleni/promeni_lozinku`, data);
  }
}
