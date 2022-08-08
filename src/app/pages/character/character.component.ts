import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ModalService } from '../../services/modal.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public characters: any = [];
  public loading = true;
  public infoPagination: any;
  public selectedCharacter: number = 0;
  public search: boolean = false;

  constructor(
    private characterService: CharacterService,
    public modalService: ModalService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  public getCharacter(page?: number): void {
    this.activatedRouter.paramMap.subscribe((params: Params) => {
      const page = params['params'].page;
      this.characterService.getcharcters(page).subscribe((data: any) => {
        this.loading = false;
        this.characters = data.results;
        this.infoPagination = data.info;
      });
    });
  }

  public openModal(character: any): void {
    this.selectedCharacter = character;
    this.modalService.openModal();
  }

  public getCharacterSon(event: any): void {
    this.characters = event;
    this.search = true;
  }
}
