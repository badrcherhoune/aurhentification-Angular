import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

export const authentificationGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(AuthentificationService);
  let authentificated = service.isauthentificated();
  if(authentificated == false){
    router.navigateByUrl("/login");
    return false;
  }else {
    return true;
  }
};
