import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersFacade } from 'src/app/users.facade';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user!: User;

  constructor(private actRoute: ActivatedRoute, private facade: UsersFacade) {
    facade.loadUsers();
  }
  
  ngOnInit(): void {
      let id = this.actRoute.snapshot.params.id;
      this.user = this.facade.getUser(id)
  }

}
