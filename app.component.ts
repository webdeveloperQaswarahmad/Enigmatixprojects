import { Component } from '@angular/core';
import { FormControl ,FormGroup,FormControlName, NgForm, Validators} from '@angular/forms';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    client:any;
  constructor(private userData:UserdataService){
    userData.user().subscribe((item)=>{
                console.log('given api data is',item);
                
            this.client=item}
            )
  }
  
  title = 'my-app';
 
  child='Send data child to parent component';
  cdata=10;
  disabled = 'false';
  today = Date()
  
  
  //  Style Binding 
  display=true;
  toggle(){
        this.display=!this.display
  }
  name = 'hi';
  // if else else if  conditions
  show = 'red';
  // switch statement 
  color = 'welcome';
  // For loop 
  users = ['one', 'two', 'three', 'four', 'five'];
  userDetails = [
    { name: 'Harry', email: 'harray@gmail.com', address: 'xyz', phone: '12345678' },
    { name: 'Brook', email: 'brook@gmail.com', address: 'abc', phone: '98765432' },
    { name: 'Junaid', email: 'Junaid@gmail.com', address: 'Lodhran', phone: '0342123123' },
    { name: 'Ayaaz', email: 'ayaaz@gmail.com', address: 'mno', phone: '1111111111' }
  ];
  account = [
    { first: 'ahmad', last: 'ali', accounts: ['google', 'facebook'] },
    { first: 'Hi!', last: 'Harry', accounts: ['email', 'twitter'] },

  ]

  firstName(val: string) {
    console.log(val);

  }
  displayVal = '';
  getValue(value: string) {
    console.log(value)
    this.displayVal = value;
  }

  value = 0;
  getData(val: string) {
    val === 'add' ? this.value++ : this.value--;
  }

// Dynamic style Binding
bgColor='green'
design = 'white';
updatColor() {
  this.design = 'orange';
  this.bgColor='black'
};

list:any[]=[]
add(item:string){

this.list.push({id:this.list.length,name:item});
console.log(this.list);
}
remove(id:number){
  this.list=this.list.filter(item=>item.id!=id)

}
updateChild(){
  this.cdata= Math.floor(Math.random()*10)
}

userDetail=[
  {name:'ahmad',email:'ahmad@gmail.com'},
  {name:'ali',email:'ali@gmail.com'},
  {name:'burhan',email:'burhan@gmail.com'},
  {name:'sarfaraz',email:'sarfaraz@gmail.com'},
  

]

getV(item:any){
  console.log(item);
  

}
userLogin(item:any){
  console.log(item);
}

 // Reactive Form 
 userD=new FormGroup({
  user:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required,),

});
loginUser(){
  console.log(this.userD.value);
  
}
get userValidator(){
  return this.userD.get('user')
}
get passwordValidator(){
  return this.userD.get('password')
}
postUserFormData(data:any){
  console.log(data);
  // this.userD.send(item).subscribe((item=>{
  //     console.log();
      
  // }))
  // return this.userD.saveUser(data).subscribe((item)=>{
  //   console.log(item);
    

  // })

}
}
