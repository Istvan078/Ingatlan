import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-hirdetes',
  templateUrl: './hirdetes.component.html',
  styleUrls: ['./hirdetes.component.css']
})
export class HirdetesComponent implements OnInit{
  date = new Date().toLocaleDateString()
  actualDate: any;
  formBuilder: FormBuilder = new FormBuilder()
  form!: FormGroup
  categories: any[] = []
  errorMessage: any;
  constructor(private base: BaseService, private router: Router) {
    this.base
    .getCategories()
    .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map((ch) => ({ key: ch.payload.key, ...ch.payload.val() }))
      )
    )
    .subscribe((categories) => (this.categories = categories));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      kategoriaid: "Kérem válasszon",
      hirdetesDatuma: new Date().toLocaleDateString(),
      kepUrl: null,
      leiras: [null, [Validators.required, Validators.minLength(4)]],
      tehermentes: true,
      cim: [null, [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit() {
    this.base.addEstate(this.form.value).then(
      () => this.router.navigate(['offers'])
    ).catch(
      (err) => this.errorMessage = err.message
    )    
  }
}
