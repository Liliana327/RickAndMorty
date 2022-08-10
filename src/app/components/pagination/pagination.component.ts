import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public paginas: number[] = [];
  public pageActual: number | undefined;
  public publicTotalPages = 34;
  public initialPosition!: number;
  public finalePositions!: number;

  constructor(
    public characterService: CharacterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initPaginator(1);
    this.activatedRoute.paramMap?.subscribe( (position: Params) => {
      const page = position['params'].page;
      this.pageActual = page;
    });
  }

  initPaginator(numero: number): void {
    let next = numero;

    this.initialPosition = Math.min(Math.max(1, next - 4), this.publicTotalPages - 5);
    this.finalePositions = Math.max(Math.min(this.publicTotalPages, next + 4), 6);

    this.publicTotalPages > 5 ?
    this.paginas = new Array(this.finalePositions - this.initialPosition + 1).fill(0).map((_valor, indice) => indice + this.initialPosition)
    : this.paginas = new Array(this.publicTotalPages).fill(0).map((_valor, indice) => indice + 1);
  }

  public counterPrev(): void {
    this.characterService.counterPrev();
    this.initPaginator(this.characterService.counter);
  }

  public counterNex(): void {
    this.characterService.counterNex();
    this.initPaginator(this.characterService.counter);
  }

}
