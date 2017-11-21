import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getCustomerDetail(this.route.snapshot.params['id']);
  }

  getCustomerDetail(id) {
    this.http.get('http://localhost:8080/customer/'+id).subscribe(data => {
      this.customer = data;
    });
  }

}
