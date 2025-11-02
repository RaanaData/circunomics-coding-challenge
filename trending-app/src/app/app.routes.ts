import { Routes } from '@angular/router';
import { Component } from 'react';
import { Home } from './component/home/home';
import { About } from './component/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'repos-list',
    loadComponent: () =>
      import('./component/repos-list/repos-list').then(m => m.ReposList)

  },
    {
    path: 'about',
    component: About
  },
];
