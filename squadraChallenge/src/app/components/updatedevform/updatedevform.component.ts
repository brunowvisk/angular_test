import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ideveloperModel } from 'src/app/data/model/ideveloperModel';
import { ireturnDefaultModel } from 'src/app/data/model/ireturnDefaultModel';
import { ServicesService } from 'src/app/data/services/services.service';

@Component({
  selector: 'app-updatedevform',
  templateUrl: './updatedevform.component.html',
  styleUrls: ['./updatedevform.component.css']
})
export class UpdatedevformComponent implements OnInit {

  public devs: Array<ideveloperModel> = new Array();
  public dev: ideveloperModel;
  local_data: any;
  action: string;  
  devForm!: FormGroup;
  selectedFile!: File;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    createdAt: new FormControl(Date.now),
  });


  constructor(public dialog: MatDialog, private devService: ServicesService,
              public dialogRef: MatDialogRef<UpdatedevformComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: ideveloperModel) 
              {
                console.log(data);
                this.dev = data;
                this.local_data = {...data};
                this.action = this.local_data.action;
               }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event: 'Cancel'});
  }


  ngOnInit(): void {

  }

  onFileChanged(event: any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 


  closeButton(){
    this.dialog.closeAll();
  }

  onSubmit(){

    this.devService.updateDev(this.myForm.value).subscribe(res => {
      console.log("Novo desenvolvedor adicionado!")
      this.dialog.closeAll();
      window.parent.location.reload();
    })
}



}
