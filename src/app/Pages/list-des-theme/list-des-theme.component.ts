import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from 'src/app/Services/animation.service';

@Component({
  selector: 'app-list-des-theme',
  templateUrl: './list-des-theme.component.html',
  styleUrls: ['./list-des-theme.component.css']
})
export class ListDesThemeComponent implements OnInit {


  constructor(private _service: AnimationService, private router: Router) { }

  listThemes:any;


  ngOnInit(): void {
    if (this._service.objetAuth == null) {
      // Redirection vers la page de connexion
      this.router.navigate(['/sidentifier']);
    }

    // Appel de la méthode pour récupérer les thèmes
    this._service.getAllThemes().subscribe(
      data => {
        this.getAnimationsByCompteId();   

        this.listThemes = data;
        this.getAnimations(this.listThemes[0].id)
      },
      error => {
        console.error('Erreur lors de la récupération des thèmes:', error);
      }
    );

    
  }

  listAnimations:any;

  getAnimations(idTheme: any) {
    this._service.getAnimationsByTheme(idTheme).subscribe(
      data => {
        this.listAnimations = data;
        console.log(this.listAnimations);
        
      },
      error => {
        console.error('Erreur lors de la récupération des animations:', error);
      }
    );
  }

  animationsByidCompte: any

  getAnimationsByCompteId(): void {
    this._service.getAnimationsByCompteId(this._service.objetAuth.id)
      .subscribe(
        (data: any) => {
          this.animationsByidCompte = data;
          console.log('Animations chargées :', this.animationsByidCompte);
        },
        error => {
          console.error('Erreur lors du chargement des animations:', error);
        }
      );
  }

  isAlreadyReserved(animationId: number): boolean {
    return this.animationsByidCompte.some((animation: { id: number; }) => animation.id === animationId)
      && this.listAnimations.some((animation: { id: number; }) => animation.id === animationId);
  }

  addAnimationToCompte(idAnimation: any) {
    const animation = this.listAnimations.find((animation: { id: any; }) => animation.id === idAnimation);
    if (animation) {
      // Calculer la différence en millisecondes entre les dates
      const currentDate = new Date();
      const animationDate = new Date(animation.dateDebut);
      const differenceInMs = animationDate.getTime() - currentDate.getTime();
      
      // Calculer la différence en jours
      const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
      console.log(differenceInDays);
      
  
      if (differenceInDays <= 7) {
        // Traitement spécifique si la différence est de 7 jours ou moins
        console.log(`L'animation ${animation.titre} débute dans ${differenceInDays} jours.`);
        this._service.addAnimation(this._service.objetAuth.id,animation.id).subscribe(
          data => {
            alert(data.message);
            this.ngOnInit();
          },
          error => {
            console.error('Erreur lors de sinscriresur l animation', error);
          }
        );
      } else {
        // Traitement pour les autres cas
        alert(`L'animation ${animation.titre} débute dans plus de 7 jours.`);
      }
    } else {
      console.error(`Animation with ID ${idAnimation} not found.`);
    }
  }
}