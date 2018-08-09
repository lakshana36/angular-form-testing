import { TestBed, async ,ComponentFixture,inject} from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule,FormControl,FormGroup,Validators} from "@angular/forms";
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { BrowserModule,By} from "@angular/platform-browser";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    // refine the test module by declaring the test component
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, FormsModule, HttpModule,BrowserModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

     // create component and test fixture
    fixture= TestBed.createComponent(AppComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    
  }));
  
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'Employee Application Form'`, async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toEqual('Employee Application Form');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //    fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Employee Application Form!');
  // }));
  it('form invalid when empty', () => {
    expect(component.application_form.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let email = component.application_form.controls['email']; 
    expect(email.valid).toBeTruthy(); 
  });
  it('submitting a form ', () => {
    component.application_form.controls['firstname'].setValue("parker");
    component.application_form.controls['fullname'].setValue("parker william");
    component.application_form.controls['bloodgroup'].setValue("A+");
    component.application_form.controls['email'].setValue("parker@virtusa.com");
    component.application_form.controls['employeecode'].setValue("8048200");
    expect(component.application_form.valid).toBeTruthy();
    });
});
