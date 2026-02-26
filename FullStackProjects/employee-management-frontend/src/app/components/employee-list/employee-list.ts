import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-employee-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './employee-list.html'
})
export class EmployeeList implements OnInit {

    employees: Employee[] = [];

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.loadEmployees();
    }

    loadEmployees() {
        this.employeeService.getEmployees().subscribe(data => {
            console.log("API DATA:", data);   // 🔥 Add this
            this.employees = data;
        });
    }
}