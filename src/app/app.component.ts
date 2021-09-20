import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: string='';
  textBox1: string = '0';
  textBox2: string = '';
  calc1: string = '';
  calc2: string = '';
  operator: string = '';
  title = 'Calculator';
  username: string = '';
  historyarray: string[] = [];
 



    



  constructor() {

   }

   


   onSave(): void {
     this.username += '7';
    console.log(this.username);
   }

    onButtonClick(value: string): void {
      if(this.textBox1.includes('.'))
      {
        
      }
      else
      {
      this.textBox1 += value;
      }
     console.log(this.textBox1);
  }
  showEvent(event : MouseEvent){
    const target = event.target as HTMLButtonElement;

      
      if(this.textBox1 == '0')
      {
        this.textBox1 = target.innerHTML;
      }
      else
      {
        this.textBox1 += target.innerHTML;
      }

     console.log(this.textBox1);

  }

  DecimalPointEvent(event : MouseEvent){
    const target = event.target as HTMLButtonElement;
    if(this.textBox1.includes('.'))
      {
        
      }
      else
      {
      this.textBox1 += target.innerHTML;
      }
     console.log(this.textBox1);

  }

  operatorEvent(event : MouseEvent){
    const target = event.target as HTMLButtonElement;
    this.calc1 = this.textBox1;
    if( this.operator == '' && this.calc1 != '0')
    {
      
      this.operator = target.innerHTML;
      this.textBox2 = this.textBox1 + this.operator;
    this.textBox1 = '';
    console.log(target.value);
    }
    else
    {
      
    }
    

    
  }

  clear(event : MouseEvent){
    const target = event.target as HTMLButtonElement;
    this.textBox1 = '0';
    this.textBox2 = '';
  }

  calculate(event : MouseEvent){
    const target = event.target as HTMLButtonElement;
    this.calc2 = this.textBox1;
    this.textBox2 += this.calc2 + '=';
    switch(this.operator) { 
      case '+': { 
         this.textBox1 = (parseFloat(this.calc1) + parseFloat(this.calc2)).toString() ; 
         break; 
      } 
      case '-': { 
        this.textBox1 = (parseFloat(this.calc1) - parseFloat(this.calc2)).toString() ;
         break;   
      } 
      case '/': { 
        if (this.calc2 == '0')
        {
          this.textBox1 = 'Cannot devide by Zero';
        }
        else
        {
        this.textBox1 = (parseFloat(this.calc1) / parseFloat(this.calc2)).toString() ;
        }
        break;   
     } 
     case '*': { 
      this.textBox1 = (parseFloat(this.calc1) * parseFloat(this.calc2)).toString() ; 
      break;   
   } 

      default: { 
         //statements; 
         break; 
      } 
    }
    this.textBox2 += this.textBox1;
    this.historyarray.push(this.textBox2);
    
    console.log(target.value);
    this.calc1 = '';
    this.calc2 = '';
    this.operator = '';
  }
}



