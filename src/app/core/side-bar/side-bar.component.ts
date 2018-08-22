import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'ap-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  user$: Observable<User>

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.user$ = this.userService.getUser()
	}

}
