import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    //mfe app will be loaded on demand if below route it will not load on refresh of app
    path: 'todo-list',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: "mfeApp",
        exposedModule: "./TodoListModule"
      })
        .then(m => m.TodoListModule)
        .catch(err => console.error(err));
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeCompArray = [HomeComponent];
