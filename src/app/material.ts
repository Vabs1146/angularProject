import{ 
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatMenuModule,MatSidenavModule,MatToolbarModule,
    MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
            MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatSidenavModule,MatToolbarModule,
            MatMenuModule,MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule
    ],

    exports:[
            MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatSidenavModule,MatToolbarModule,
            MatMenuModule,MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule
    ]
})
export class MaterialModule{}