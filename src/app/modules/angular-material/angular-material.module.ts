import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const materialComponents=[
 MatDialogModule,
 MatCardModule,
 MatButtonModule,
 MatInputModule,
 MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
  ]
})
export class AngularMaterialModule { }
