import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'employee-update',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './employee-update.html',
    styleUrls: ['./employee-update.css']
})
export class EmployeeUpdate implements OnInit {

    employeeForm: FormGroup;
    id!: number;

    constructor(
        private fb: FormBuilder,
        private service: EmployeeService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.employeeForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            department: [''],
            salary: ['']
        });
    }

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));

        this.service.getEmployeeById(this.id).subscribe({
            next: (data) => {
                this.employeeForm.patchValue(data);
            },
            error: (err) => {
                console.error('Error loading employee:', err);
            }
        });
    }

    update() {
        if (this.employeeForm.valid) {

            this.service.updateEmployee(this.id, this.employeeForm.value).subscribe({
                next: () => {
                    alert('Employee updated successfully!');
                    this.router.navigate(['/employees']);
                },
                error: (err) => {
                    console.error('Update error:', err);
                }
            });

        } else {
            alert('Please fill required fields correctly.');
        }
    }
}