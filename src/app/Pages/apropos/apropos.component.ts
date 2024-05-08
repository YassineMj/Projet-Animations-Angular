import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from 'src/app/Services/animation.service';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {


  constructor(private _service: AnimationService, private router: Router) { }

  ngOnInit(): void {
    if (this._service.objetAuth == null) {
      // Redirection vers la page de connexion
      this.router.navigate(['/sidentifier']);
    }
  }
  

}