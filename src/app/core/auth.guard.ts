import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {  // function based 
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  const expectedRole = route.data?.['role'];

  if (token && userRole === expectedRole) {
    return true;
  }

  // Redirect to login if token missing or role mismatch
  router.navigate(['/login']);
  return false;
};
