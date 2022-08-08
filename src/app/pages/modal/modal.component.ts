import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()  character: any;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {}

  public closeModal(): void {
    this.modalService.closeModal();
  }
}
