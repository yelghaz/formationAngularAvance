import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  buyTicketForm: FormGroup;
  // dynamicForm = [{form1: [{key: "emailControl", value: null}, {key: "phoneControl", value: null}, {key: "address", value: [{key: "streetControl", value: []}, {key: "postalcodeControl", value: []}]}]}]
  constructor(private fb: FormBuilder) { 
    this.buyTicketForm = this.fb.group({
      emailControl: [null, [Validators.required]],
        phoneControl: [null],
        address:this.fb.group({
          streetControl : [],
          postalcodeControl: []
        }),
      tickets:this.fb.array([this.createTicket()],Validators.required)
  })
  }
  ngOnInit(): void {}

  createTicket():FormGroup{
    return this.fb.group({
      name:[null,Validators.required],
      age:[null,Validators.required]
    })
  }

  get tickets():FormArray{
    return <FormArray> this.buyTicketForm.get('tickets');
  }

  addTicket() {
    this.tickets.push(this.createTicket());
}
  buyTickets() {

  }
}
