
import { Component } from '@angular/core';
import { MedicineService } from '../medicine-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.css']
})
export class MedicineEditComponent {
  
  medicine = { name: '', company: '', expiry_date: '' };
  
  constructor(private route: ActivatedRoute,private medicineService: MedicineService,private router: Router) {} 
  
  ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id'); // Gets the 'id' parameter from the current route
        if (id) {
          this.medicineService.getMedicine(id).subscribe(data=> {
            this.medicine = data;
          });
        }
      }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.medicineService.editMedicine(id!, this.medicine).subscribe()
     this.router.navigate(['/medicine-list'])
  }
  
  back() {
    this.router.navigate(['/medicine-list']);
  }
}

