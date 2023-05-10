//  medicine-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})


export class MedicineListComponent implements OnInit {
  medicines: any[] = [];
  keyword: string = '';


constructor(private medicineService: MedicineService,private router: Router, private authService: AuthService) {
    
  }

  ngOnInit(): void {
   this.loadMedicines();
    }

  loadMedicines() {
      this.medicineService.getAllMedicines().subscribe(
        (data)=> {
          this.medicines = data;
        });
       }


  onAddMedicine() {
    this.router.navigate(['/medicine-add']);
   }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
   }

  onSearch(){
   this.getMedicineList();}

  getMedicineList(): void {
    if (this.keyword) {
      this.medicineService.searchMedicines(this.keyword) //serach
          .subscribe((data) => {
            this.medicines = data;
          });
      } else {
        this.medicineService.getAllMedicines   
      } 
    }  

  editMedicine(id: string, medicine: any): void {
    this.medicineService.editMedicine(id, medicine)
      .subscribe(()=>this.router.navigate(['medicine-edit', id])
      );}

  deleteMedicine(id: string) {
    if (confirm('Are you sure you want to delete this medicine?')) {
      this.medicineService.deleteMedicine(id).subscribe(
        () => {
          this.loadMedicines();
        });
    }}

  isExpired(expiryDate: string): boolean {
      const today = new Date();
      const expiry = new Date(expiryDate);
      return expiry < today;
    }
}
