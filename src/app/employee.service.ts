import {Injectable} from '@angular/core';
import {PrimaryComponent} from "./primary/primary.component";

@Injectable({
  providedIn: 'root'
  // providedIn: [PrimaryComponent]
})

export class EmployeeService {

  public employees = [{"id": 1, "name": "Anbu", "age": 81},
    {"id": 2, "name": "bala", "age": 18},
    {"id": 3, "name": "sri", "age": 23}];

  constructor() {
  }

  getEmployees() {
    return this.employees;
  }
}
