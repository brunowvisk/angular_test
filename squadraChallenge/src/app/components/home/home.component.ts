import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { ideveloperModel } from 'src/app/data/model/ideveloperModel';
import { ireturnDefaultModel } from 'src/app/data/model/ireturnDefaultModel';
import { ServicesService } from 'src/app/data/services/services.service';
import { DevformComponent } from '../devform/devform.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public devs: Array<ideveloperModel> = new Array();

  displayedColumns: string[] = ['id','avatar', 'name', 'createdAt', 'options'];
  dataSource = new MatTableDataSource<ideveloperModel>(this.devs);
  selection = new SelectionModel<ideveloperModel>(true, []);


  constructor(public dialog: MatDialog,
              private devService: ServicesService) { }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<ideveloperModel>(this.devs);
  
  }

  ngOnInit() {
    this.getAllDevs();
  }

  getAllDevs(){
    this.devService.getAllDevelopers().subscribe((data: ideveloperModel[]) => {
       this.devs = data;
      console.log(this.devs);
      console.log(data);
      this.dataSource = new MatTableDataSource<ideveloperModel>(this.devs);
      console.log(this.dataSource);
      setTimeout(()=>{
        this.dataSource = this.dataSource;
       })
    });
  }

  openDevModalForm(){
    const dialogRef = this.dialog.open(DevformComponent, {
      width: '60%',
    });
    dialogRef.afterClosed().subscribe((res => {
      console.log('Form closed!');
    }))

  }

  updateDevForm(){

  }

  deleteDev(id: string){

  }




}
