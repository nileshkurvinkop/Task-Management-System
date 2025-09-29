import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  filterStatus: string = '';
  taskForm: any;  // declare without initializing
  editingTaskId: number | null = null;
  


  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    // Initialize the form here, after fb is available
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', [Validators.required, this.futureDateValidator]],
      priority: ['Low', Validators.required],
      status: ['Pending', Validators.required]
    });

    this.loadTasks();
  }
  editTask(task: any) {
  this.editingTaskId = task.TaskId;
  this.taskForm.setValue({
    title: task.Title,
    description: task.Description,
    dueDate: new Date(task.DueDate),
    priority: task.Priority,
    status: task.Status
  });
}


  loadTasks() {
    this.taskService.getTasks().subscribe((res: any) => (this.tasks = res));
    // console.log(this.taskService.getTasks())
  }

 addTask() {
  if (this.taskForm.invalid) return;

  if (this.editingTaskId) {
    // Update task
    this.taskService.updateTask(this.editingTaskId, this.taskForm.value).subscribe({
      next: () => {
        this.taskForm.reset({ priority: 'Low', status: 'Pending' });
        this.editingTaskId = null;
        this.loadTasks();
      },
      error: err => console.error('Error updating task:', err)
    });
  } else {
    // Add new task
    this.taskService.createTask(this.taskForm.value).subscribe({
      next: () => {
        this.taskForm.reset({ priority: 'Low', status: 'Pending' });
        this.loadTasks();
      },
      error: err => console.error('Error adding task:', err)
    });
  }
}


  //Delete Task
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
//filters Task
  filterTasks(status: string) {
    this.filterStatus = status;
  }

  futureDateValidator(control: any) {
    if (!control.value) return null;
    const selected = new Date(control.value);
    const now = new Date();
    return selected >= now ? null : { pastDate: true };
  }
   logout() {
    // Optionally clear any stored tokens here
    this.router.navigate(['/login']);
  }
}
