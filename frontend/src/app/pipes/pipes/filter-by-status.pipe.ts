import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByStatus', standalone: true })
export class FilterByStatusPipe implements PipeTransform {
  transform(tasks: any[], status: string) {
    if (!status) return tasks;
    return tasks.filter(t => t.status === status);
  }
}
