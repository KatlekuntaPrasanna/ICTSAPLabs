import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private baseUrl = 'http://localhost:9091/api/employees';

    constructor(private http: HttpClient) { }

    // GET ALL
    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    // GET BY ID
    getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/${id}`);
    }

    // ADD
    addEmployee(emp: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, emp);
    }

    // UPDATE
    updateEmployee(id: number, emp: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.baseUrl}/${id}`, emp);
    }

    // DELETE
    deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}