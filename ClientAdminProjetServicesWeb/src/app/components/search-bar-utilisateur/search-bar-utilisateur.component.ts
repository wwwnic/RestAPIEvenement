import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchFormUtilisateur } from 'src/app/entities/SearchFormUtilisateur';

@Component({
  selector: 'app-search-bar-utilisateur',
  templateUrl: './search-bar-utilisateur.component.html',
  styleUrls: ['./search-bar-utilisateur.component.css']
})
export class SearchBarUtilisateurComponent implements OnInit {

  @Output() searchUtilisateurs = new EventEmitter<SearchFormUtilisateur>();

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
    let searchForm: SearchFormUtilisateur;
    if (this.searchForm.value.searchMethod == "getAll") {
      searchForm = {
        searchMethod: this.searchForm.value.searchMethod
      }
    }
    else if (this.searchForm.value.searchMethod == "" || this.searchForm.value.searchValue == "") {
      this.erreurMessage = ("Fill in the search method and value");
      return;
    }
    else if (this.searchForm.value.searchMethod == "getById") {
      this.erreurMessage = "";
      try {
        let searchValue = parseInt(this.searchForm.value.searchValue);
        searchForm = {
          searchMethod: this.searchForm.value.searchMethod,
          searchValue: searchValue
        }
      } catch (error) {
        this.erreurMessage = ("Please provide a number if you search for ID");
        console.log("Error found");
      }
      return;
    }
    else {
      this.erreurMessage = "";
      searchForm = {
        searchMethod: this.searchForm.value.searchMethod,
        searchValue: this.searchForm.value.searchValue
      }
    }
    this.searchUtilisateurs.emit(searchForm);
  }

}
