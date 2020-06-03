import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
@Input() totalPages: number;
@Input() parametrosPaginacion: any;
@Output() listar  = new EventEmitter<number>();
countU: any;

  constructor() { }

  ngOnInit() {
  }

  changePage(pageNumber) {
    this.parametrosPaginacion.pageNumber = pageNumber;
    this.listar.emit(this.parametrosPaginacion);
  }

  setPagination(page) {
    if (page == 0 && this.parametrosPaginacion.pageNumber != 1) {
      this.parametrosPaginacion.pageNumber = 1;
    } else if (page == 1 && this.parametrosPaginacion.pageNumber != this.totalPages) {
      this.parametrosPaginacion.pageNumber = this.totalPages;
    }
    this.listar.emit(this.parametrosPaginacion);
  }
 
}
