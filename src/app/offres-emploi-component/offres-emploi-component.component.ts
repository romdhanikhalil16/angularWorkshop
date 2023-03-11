import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css'],
})
export class OffresEmploiComponentComponent implements OnInit {
  nbOffreNonCloture: number = 0;
  listEmploi = [
    {
      reference: '0',
      titre: 'software developer',
      entreprise: 'vermeg',
      etat: true,
    },
    {
      reference: '1',
      titre: 'cloud engineer',
      entreprise: 'microsoft',
      etat: false,
    },
    {
      reference: '2',
      titre: 'embedded system developer',
      entreprise: 'hyundai',
      etat: true,
    },
  ];

  constructor() {}
  ngOnInit(): void {}
  //------------

  calculerNombreOffreNonCloture() {
    let nb = 0;
    for (let emploi of this.listEmploi) emploi.etat && nb++;
    this.nbOffreNonCloture = nb;
  }
  //------------

  chercherEmploiParEntreprise(element: any) {
    let listEmploiCopy = [...this.listEmploi];
    let searchInput = element.target.value;

    this.listEmploi = listEmploiCopy.filter((emp) =>
      emp.entreprise.toUpperCase().includes(searchInput.toUpperCase())
    );
  }
  //------------
}
