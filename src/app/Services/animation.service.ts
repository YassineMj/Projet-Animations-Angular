import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  objetAuth:any=null;

  private baseUrl = 'http://localhost:8080/api'; // Mettez à jour l'URL selon votre configuration

  constructor(private http: HttpClient) { }

  addCompte(compte: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-compte`, compte)
      .pipe(
        catchError(error => {
          throw 'Erreur lors de l\'ajout du compte: ' + error;
        })
      );
  }

  getCompte(email: string, mdp: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-compte?email=${email}&mdp=${mdp}`)
      .pipe(
        catchError(error => {
          throw 'Erreur lors de la récupération du compte: ' + error;
        })
      );
  }

  addAnimation(idCompte: number, idAnimation: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-animation?idCompte=${idCompte}&idAnimation=${idAnimation}`, {})
      .pipe(
        catchError(error => {
          throw 'Erreur lors de l\'ajout de l\'animation au compte: ' + error;
        })
      );
  }

  deleteAnimation(idCompte: number, idAnimation: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete-animation?idCompte=${idCompte}&idAnimation=${idAnimation}`)
      .pipe(
        catchError(error => {
          throw 'Erreur lors de la suppression de l\'animation du compte: ' + error;
        })
      );
  }

  getAnimations(idCompte: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-animations-by-id-compte?idCompte=${idCompte}`)
      .pipe(
        catchError(error => {
          throw 'Erreur lors de la récupération des animations du compte: ' + error;
        })
      );
  }

  getAllThemes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-all-theme`);
  }

  getAnimationsByTheme(themeId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-animations-by-theme?idTheme=${themeId}`);
  }

  getAnimationsByCompteId(idCompte: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-animations-by-id-compte?idCompte=${idCompte}`);
  }

}
