import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/app/data/services/services.service';

@Component({
  selector: 'app-devform',
  templateUrl: './devform.component.html',
  styleUrls: ['./devform.component.css']
})
export class DevformComponent implements OnInit {

  devForm!: FormGroup;
  selectedFile!: File;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    createdAt: new FormControl(Date.now),
  });

  constructor(public dialog: MatDialog,
              private devService: ServicesService) { }

  ngOnInit(): void {
  }

  closeButton(){
    this.dialog.closeAll();
  }

  onFileChanged(event: any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 

  get f(){
    return this.myForm.controls;
  }

  onUpload() {
    // upload code goes here
  }

  onSubmit(){

    // this.devService.postNewPet(this.petForm.value).subscribe(res => {
    //   console.log("New pet created")
    //   this.dialog.closeAll();
    //   window.parent.location.reload();
    // })
}



}
