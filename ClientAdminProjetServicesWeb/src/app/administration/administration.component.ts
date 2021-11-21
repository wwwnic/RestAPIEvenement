import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  AfterViewInit,
  Inject,
  ViewContainerRef,
  ViewChild
 } from '@angular/core';

 import { GestionUtilisateursComponent } from '../gestion-utilisateurs/gestion-utilisateurs.component'
 import { GestionEvenementsComponent } from '../gestion-evenements/gestion-evenements.component'
 import { GestionCommentairesComponent } from '../gestion-commentaires/gestion-commentaires.component'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit,AfterViewInit {

  menuSelection : string

  constructor(private factoryResolver : ComponentFactoryResolver) {
   }

  ngOnInit(): void {
    this.menuSelection = "utilisateurs";
  }

  @ViewChild('composantMenu',{read: ViewContainerRef}) myRef

  ngAfterViewInit() {
    this.genererComposant("utilisateurs")
  }

  menuActif(selection : string) {
    this.menuSelection = selection
    this.genererComposant(selection)
  }

  genererComposant(aGenerer : string){
    this.myRef.clear()
    var factory
    switch (aGenerer) {
      case "utilisateurs":{
        factory = this.factoryResolver.resolveComponentFactory(GestionUtilisateursComponent);
        break;
      }
      case "evenements": {
        factory = this.factoryResolver.resolveComponentFactory(GestionEvenementsComponent);
        break;
      }
      case "commentaires": {
        factory = this.factoryResolver.resolveComponentFactory(GestionCommentairesComponent);
        break;
      }
    }
    var ref = this.myRef.createComponent(factory)
    ref.changeDetectorRef.detectChanges()
  }

}
