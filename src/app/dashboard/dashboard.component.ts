import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  number:number;
  name:any="vaibhavpatole077@gmail.com";

  constructor(private router: Router) { }

  ngOnInit() {
        //  $(document).ready(function(){
        //          $(".parent").hover(function() {
        //                  $(this).find('mat-list.child').show();
        //          },function(){
        //                  $(this).find('mat-list.child').hide();
        //          });
        //  });

        // $(document).ready(function(){
        //         $('#parent').click(function(){
        //                 $(this).find('#child').show();
        //         });
        // });

        $(document).ready(function(){
                $('#parent').click(function(e) {
                        e.stopPropagation();
                        var $el = $('mat-list',this);
                        $('#child').not($el).slideUp();
                        $el.stop(true, true).slideToggle();
                    });
                        $('#child ').click(function(e) {
                        e.stopImmediatePropagation();  
                    });
        });
  }
  
  change(){

  }
  
  set(event:number){
    this.number=event;
    switch(this.number){
        case 0:
                this.router.navigate(['/dashboard/production-form']);
                break;
        case 1:
                this.router.navigate(['/dashboard/crum-details']);
                break;
        case 2:this.router.navigate(['/dashboard/soution-details']);
                break;
        case 3:
                this.router.navigate(['/dashboard/mouldr-details']);
                break;
        case 4:this.router.navigate(['/dashboard/color-details/color-name']);
                break;
        case 5:this.router.navigate(['/dashboard/color-details/color-code']);
                break;
        case 6:this.router.navigate(['/dashboard/payroll-details']);
                break;
        default:alert("error");
    }
  }

  login(){
          this.router.navigate(['/login']);
  }
}
