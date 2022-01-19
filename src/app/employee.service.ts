import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  public employees = [
    {"id": 1, "name": "Anbu", "age": 81},
    {"id": 2, "name": "bala", "age": 18},
    {"id": 3, "name": "sri", "age": 23}];

  public servicename = "asdf";

  constructor() {
  }

  getEmployees() {
    return this.employees;
  }
}
