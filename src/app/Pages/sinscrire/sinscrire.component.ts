import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from 'src/app/Services/animation.service';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent {


  constructor(private _service:AnimationService , private router: Router){}

  inscrit={
    nomComplet: "",
    tel: "",
    email: "",
    mdp: "",
    classe: ""
  }

  sinscrire() {
    this._service.addCompte(this.inscrit).subscribe(
      response => {
        console.log("Compte ajouté avec succès !");
        // Rediriger vers une route appropriée avec l'identifiant du compte
        this.router.navigate(['/sidentifier']); // Exemple de redirection
      },
      error => {
        console.error("Erreur lors de l'inscription :", error);
        // Gérer l'erreur ici (affichage message, etc.)
      }
    );
  }
  
}
