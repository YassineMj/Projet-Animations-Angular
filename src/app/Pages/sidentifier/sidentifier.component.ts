import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from 'src/app/Services/animation.service';


@Component({
  selector: 'app-sidentifier',
  templateUrl: './sidentifier.component.html',
  styleUrls: ['./sidentifier.component.css']
})
export class SidentifierComponent implements OnInit{

  constructor(private _service:AnimationService , private router: Router){}

  ngOnInit(): void {
    this._service.objetAuth=null;

  }


  infoIdentifier={
    email:"",
    mdp:""
  }

  identifier() {
    this._service.getCompte(this.infoIdentifier.email, this.infoIdentifier.mdp).subscribe(
      response => {
        this._service.objetAuth=response
        console.log("Connexion réussie ! : "+this._service.objetAuth.id);
        // Redirection vers une route appropriée après la connexion réussie
        this.router.navigate(['/acceuil']); // Exemple de redirection vers la page de profil
      },
      error => {
        this._service.objetAuth=null;

        console.error("Erreur de connexion :", error);
        // Gérer l'erreur ici (affichage message, etc.)
      }
    );
  }
}
