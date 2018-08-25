import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CanaisComponent } from './canais/canais.component';
import { GestaoVideosComponent } from './gestao-videos/gestao-videos.component';
import { MetricasComponent } from './metricas/metricas.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { AlertModule } from '../shared/components/alert/alert.module';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        CanaisComponent,
        GestaoVideosComponent,
        MetricasComponent,
        MinhaContaComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        CanaisComponent,
        GestaoVideosComponent,
        MetricasComponent,
        MinhaContaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }