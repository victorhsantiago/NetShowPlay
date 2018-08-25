import { NgModule } from '@angular/core';
import { PhotoDetailComponent } from './photo-detail.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyComponent } from './photo-owner-only/photo-owner-only.component';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.component.directive';

@NgModule({
    declarations: [PhotoDetailComponent, PhotoCommentsComponent, PhotoOwnerOnlyComponent, PhotoOwnerOnlyDirective],
    exports: [PhotoDetailComponent, PhotoCommentsComponent],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})

export class PhotoDetailModule { }