import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';


@Injectable({ providedIn: 'root' })
export class TaskService {
  private baseUrl = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token'); // your JWT token
    return { Authorization: `Bearer ${token}` };
  }
// Fetch all tasks from the backend API
  getTasks(): Observable<any> {
    return this.http.get<any>(this.baseUrl, { headers: this.getAuthHeaders() });
  }

// Create a new task by sending task data to the backend API
  createTask(task: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, task, { headers: this.getAuthHeaders() });
  }

// Update an existing task using its ID and updated task data
  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, task, { headers: this.getAuthHeaders() });
  }
  
// Delete a task by its ID
  deleteTask(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
