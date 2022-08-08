import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public showModal = false;

  constructor() { }
  public openModal(): void {
    this.showModal = true;
  }

  public closeModal(): void {
    this.showModal = false;
  }
}
