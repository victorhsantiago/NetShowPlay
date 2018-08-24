import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { CanaisComponent } from './core/canais/canais.component';
import { GestaoVideosComponent } from './core/gestao-videos/gestao-videos.component';
import { MinhaContaComponent } from './core/minha-conta/minha-conta.component';
import { MetricasComponent } from './core/metricas/metricas.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },              
    { 
        path: 'user/:userName', 
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    { 
        path: 'p/add', 
        component: PhotoFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'p/canais', 
        component: CanaisComponent,
    },
    { 
        path: 'p/gestao-videos', 
        component: GestaoVideosComponent,
    },
    { 
        path: 'p/minha-conta', 
        component: MinhaContaComponent,
    },
    { 
        path: 'p/metricas', 
        component: MetricasComponent,
    },
    { 
        path: 'p/:photoId', 
        component: PhotoDetailComponent,
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

