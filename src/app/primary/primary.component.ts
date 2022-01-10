import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";

// const employees =
//     [{"id": 1, "name": "Anbu", "age": 81},
//       {"id": 2, "name": "bala", "age": 18},
//       {"id": 3, "name": "sri", "age": 23}];

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css'],
})
export class PrimaryComponent implements OnInit {

  /*    employees =
      [{"id": 1, "name": "Anbu", "age": 81},
        {"id": 2, "name": "bala", "age": 18},
        {"id": 3, "name": "sri", "age": 23}];*/

  employees: any;

  varname = "for programmer";

  constructor(private _employees: EmployeeService) {
    this.employees = _employees.getEmployees();
  }

  //
  // ivalue = this.employees;

  ngOnInit(): void {
    // this.employees = this._employees.getEmployees();
    console.log(this.employees);
  }

  onclick() {
    console.log(this.employees);
  }


}
