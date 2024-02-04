import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent {
  estates: any[] = [];
  categories: any[] = [];
  columns: any[] = [];

  constructor(private base: BaseService, private config: ConfigService) {
    this.base
      .getEstates()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((ch) => ({ key: ch.payload.key, ...ch.payload.val() }))
        )
      )
      .subscribe((estates) => (this.estates = estates));

    this.base
      .getCategories()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((ch) => ({ key: ch.payload.key, ...ch.payload.val() }))
        )
      )
      .subscribe((categories) => (this.categories = categories));

    this.columns = this.config.getColumns();
  }


}
