import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  model: any = {};
  cover!: string;
  showError = false;


  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl; 
      };

      reader.readAsDataURL(file); 
      this.showError = false;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      form.control.markAllAsTouched();
      if(!this.cover){
        this.showError = true;
      }
      return;
    }
    console.log(form.value);
  }
}
