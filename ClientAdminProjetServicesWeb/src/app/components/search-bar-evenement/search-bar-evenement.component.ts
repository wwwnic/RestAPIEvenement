import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SearchFormEvenement } from 'src/app/entities/SearchFormEvenement';

@Component({
  selector: 'app-search-bar-evenement',
  templateUrl: './search-bar-evenement.component.html',
  styleUrls: ['./search-bar-evenement.component.css']
})
export class SearchBarEvenementComponent implements OnInit {

  @Output() searchEvenements = new EventEmitter<SearchFormEvenement>();

  erreurMessage: string = "";
  // searchMethod!: Object = {};
  searchForm = new FormGroup({
    searchMethod: new FormControl('', Validators.required),
    searchValue: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  filterSearch() {
    //Probleme avec le try catch pour afficher un message erreur 
    //si il y a un string au lieu d'un number

    //La recherche avec Id Fonctionne, mais le filtre dans 
    //utilisateur.component ne fonctionne pas 

    let searchFormEvenement: SearchFormEvenement;
    if (this.searchForm.value.searchMethod == "getAll") {
      this.erreurMessage = "";
      searchFormEvenement = {
        searchMethod: this.searchForm.value.searchMethod
      }
    }
    else if (this.searchForm.value.searchMethod == "" || this.searchForm.value.searchValue == "") {
      this.erreurMessage = ("Fill in the search method and value");
      return;
    }
    else if (this.searchForm.value.searchMethod == "getByName") {
      this.erreurMessage = "";
      searchFormEvenement = {
        searchMethod: this.searchForm.value.searchMethod,
        searchValue: this.searchForm.value.searchValue
      }
    } else {
      //   this.erreurMessage = "";
      //   try {
      //     let searchValue = parseInt(this.searchForm.value.searchValue);
      //     searchFormEvenement = {
      //       searchMethod: this.searchForm.value.searchMethod,
      //       searchValue: searchValue
      //     }
      //   } catch (error) {
      //     this.erreurMessage = ("Please provide a number if you search for ID");
      //     console.log("Error found");
      //   }
      //   return;
      // }
      searchFormEvenement = {
        searchMethod: this.searchForm.value.searchMethod,
        searchValue: this.searchForm.value.searchValue
      }
    }
    this.searchEvenements.emit(searchFormEvenement);
  }
}



