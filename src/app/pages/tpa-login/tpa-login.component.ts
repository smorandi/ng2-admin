import {Component, OnInit} from "@angular/core";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services/authentication.service";
import {AlertService} from "../../_services/alert.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tpa-login',
  templateUrl: "./tpa-login.html"
})
export class TpaLoginComponent implements OnInit {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  returnUrl: string;

  constructor(fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.authenticationService.login(this.username.value, this.password.value).subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
        }
      );
    }
  }
}
