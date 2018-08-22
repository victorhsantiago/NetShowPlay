import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lowercase.validator';
import { UserNotTakenService } from './usernottaken.validator.service';

@Component({
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

	signupForm: FormGroup

	constructor(private formBuilder: FormBuilder, private userNotTakenService: UserNotTakenService) { }

	ngOnInit(): void {
		this.signupForm = this.formBuilder.group({
			email: ['',
				[
					Validators.required,
					Validators.email
				]
			],
			fullName: ['',
				[
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(40)
				]
			],
			userName: ['',
				[
					Validators.required,
					// Validators.pattern(/^[a-z0-9_\-]+$/),
					lowerCaseValidator,
					Validators.minLength(3),
					Validators.maxLength(30)
				],
				this.userNotTakenService.checkUserNameTaken()
			],
			password: ['',
				[
					Validators.required,
					Validators.minLength(8),
					Validators.maxLength(14)
				]
			]
		})
	}
}
