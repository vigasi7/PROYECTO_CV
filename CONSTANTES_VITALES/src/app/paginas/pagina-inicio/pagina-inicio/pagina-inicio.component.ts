import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../_services/user.service";
import { Router } from "@angular/router";
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit{

  content?: string;

  constructor(private userService:UserService, private router:Router, private token:TokenStorageService){}

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data=>{
        this.content = data;
      },
      err=>{
        this.router.navigate(['login']);
      }

    );

  }

}
