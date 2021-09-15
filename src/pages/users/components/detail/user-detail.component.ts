import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersFacade } from 'src/app/users.facade';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User> = of();

  constructor(private actRoute: ActivatedRoute, private facade: UsersFacade) {
  }
  
  ngOnInit(): void {
      let id = this.actRoute.snapshot.params.id;
      this.user$ = this.facade.getUser(id);
  }

}
