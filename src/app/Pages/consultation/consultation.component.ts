import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from 'src/app/Services/animation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit{

  constructor(private _service: AnimationService, private router: Router) { }

  ngOnInit(): void {
    if (this._service.objetAuth == null) {
      // Redirection vers la page de connexion
      this.router.navigate(['/sidentifier']);
    }

    this.getAnimationsByCompteId();
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

  isAnimationPassed(animation: any): boolean {
    const currentDate = new Date();
    const animationDate = new Date(animation.dateDebut);
    return animationDate < currentDate;
  }

  desinscrire(idAnimation:any){
    this._service.deleteAnimation(this._service.objetAuth.id,idAnimation).subscribe(
      data => {
        alert("Désinscrire");
        this.ngOnInit();
      },
      error => {
        console.error('Erreur', error);
      }
    );
  }

}
