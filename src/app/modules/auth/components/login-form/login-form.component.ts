import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from './../../shared/interfaces';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  innerErrorMessage: string;

  
  @Input() set errorMessage(message: string) {
    this.innerErrorMessage = message;
  }
  
  @Input() loading: boolean = false;

  @Output() loginSubmit: EventEmitter<ILogin> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSubmit() {
    this.innerErrorMessage = null;
    if (this.form.valid) {
      this.loginSubmit.emit(this.form.value);
    }
  }

}
