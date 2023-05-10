import { Component } from '@angular/core';
import { MedicineService } from '../medicine-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css']
})

export class MedicineAddComponent {
  medicine = { name: '', company: '', expiry_date: '' };

  constructor(private medicineService: MedicineService,private router: Router) {}

  onSubmit() {
    this.medicineService.addMedicine(this.medicine)
      .subscribe(() => {
        this.router.navigate(['/medicine-list']);
      });
  }

}

