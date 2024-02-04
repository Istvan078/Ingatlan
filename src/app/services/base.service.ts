import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { EstateModel } from '../models/estate.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  estatesRef : AngularFireList<any>
  categoriesRef : AngularFireList<any>

  constructor(private realTimeDatabase: AngularFireDatabase) { 
    this.estatesRef = realTimeDatabase.list('ujingatlan');
    this.categoriesRef = realTimeDatabase.list('kategoriak');
  }

  getEstates() {
    return this.estatesRef
  }

  getCategories() {
    return this.categoriesRef
  }

  addEstate(body: EstateModel) {
    return this.estatesRef.push(body)
  }

}
