import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  uri = '/api/animal';

  constructor(private http: HttpClient) { }

  addAnimal(name, gender, type) {
    const obj = {
      name,
      gender,
      type
    };
    return this.http.post(`${this.uri}/add`, obj)
  }

  getAdoptedAnimals() {
    return this
      .http
      .get(`${this.uri}/adopted`);
  }

  getAnimals() {
    return this
      .http
      .get(`${this.uri}`);
  }


  editAnimal(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  markAsAdopted(id) {
    return this
      .http
      .post(`${this.uri}/adopt/${id}`, {})
  }

  updateEditAnimal(name, gender, id) {

    const obj = {
      name,
      gender
    };

    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

}
