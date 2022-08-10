import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() characterfromSon = new EventEmitter();

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {}

  public searchCharacter(search: string, event: any): void {
    event.preventDefault();
    this.characterService.searchCharacter(search).subscribe( data => {
      this.characterfromSon.emit(data.results);
    });
  }

}
