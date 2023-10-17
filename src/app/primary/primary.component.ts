import {Component, inject, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";

// const employees =
//     [{"id": 1, "name": "Anbu", "age": 81},
//       {"id": 2, "name": "bala", "age": 18},
//       {"id": 3, "name": "sri", "age": 23}];

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css'],
  providers: [EmployeeService],
  // todo: providers: [EmployeeService], ->another way of implementing service,It is only work this component
  // & also only 1 instance is created for this component
//  but If we call services for more then 1 components like this,
//  Then more Number of instance will be created for each Component that is created by providers: [EmployeeService] statement
})
export class PrimaryComponent implements OnInit {

  /*    employees =
      [{"id": 1, "name": "Anbu", "age": 81},
        {"id": 2, "name": "bala", "age": 18},
        {"id": 3, "name": "sri", "age": 23}];*/

  employees: any;
  // es = inject(EmployeeService)//<- another way to inject the service.

  varname = "for programmer";
  scvalue ='';

  constructor(private _employees: EmployeeService) {
    // this.employees = _employees.getEmployees();
    this.scvalue = _employees.servicename;
  }

  ngOnInit(): void {
    // this.employees = this._employees.getEmployees();
    console.log(this.employees);
    console.log('value from service is '+this.scvalue);
    console.log('value from service is '+this._employees.servicename);
  }

}
