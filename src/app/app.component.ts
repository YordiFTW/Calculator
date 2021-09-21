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
  calc2: string = '0';
  operator: string = '';
  title = 'Calculator';
  username: string = '';
  historyarray: string[] = [];
  squared: number = 0;
 



    



  constructor() {

   }

   


  //  onSave(): void {
  //    this.username += '7';
  //   console.log(this.username);
  //  }

  //   onButtonClick(value: string): void {
  //     if(this.textBox1.includes('.'))
  //     {
        
  //     }
  //     else
  //     {
  //     this.textBox1 += value;
  //     }
  //    console.log(this.textBox1);
  // }
  showEvent(event : MouseEvent){
    const target = event.target as HTMLButtonElement;
      if(this.textBox1 == '-0')
      {
        this.textBox1 = '-' + target.innerHTML;
      }
      
      else if(this.textBox1 == '0' || this.textBox1=="Cannot devide by Zero")
      {
        this.textBox1 = target.innerHTML;
      }
      else
      {
        this.textBox1 += target.innerHTML;
      }

     console.log(this.textBox1);

  }
  ConvertToPlusOrMinus (event : MouseEvent){


    if (this.textBox1 == 'Cannot devide by Zero')
    {
        this.textBox1 = '-0'; //Om NaN waardes te omzijlen.
    }

    else if(this.textBox1.indexOf('-') == 0)
    {
     this.textBox1 = this.textBox1.slice(1);
    }
    else
    {
      this.textBox1 = '-' + this.textBox1;
    }
    
  }

  DecimalPointEvent(event : MouseEvent){
    const target = event.target as HTMLButtonElement;
    if(this.textBox1.includes('.'))
      {
        // doe niks, de waarde heeft al een decimale punt.
      }
      else
      {
      this.textBox1 += target.innerHTML;
      }
     console.log(this.textBox1);

  }

  operatorEvent(event : MouseEvent){
    const target = event.target as HTMLButtonElement;

    

    if(this.textBox1 == 'Cannot devide by Zero') 
    {
      this.calc1 = '0'; //om NaN waardes the verkomen wanneer iemand probeert door te rekenen met de 'Cannot devide by Zero' error.
    }
    else
    {
      this.calc1 = this.textBox1;
    }
    
    if( parseFloat(this.calc1) == 0)
    {
      // als er nog geen getal ingevoerd is en dus nogsteeds nul is, dan werken the operator buttons niet, dit zorgt ervoor dat 
      //de gebruiker geen onjuiste berekening kan invullen.
    }
    else
    {
      this.operator = target.innerHTML;
      this.textBox2 = this.textBox1 + this.operator;
      this.textBox1 = '0';
      console.log(target.value);
    }
    

    
  }

  clear(event : MouseEvent){
    const target = event.target as HTMLButtonElement;
    this.textBox1 = '0';
    this.textBox2 = '';
    this.operator = '';
    this.squared = 0;
  }

  root(event : MouseEvent){
    
      this.calc1 = this.textBox1;
      this.textBox2 = '√';
      this.textBox1 = Math.sqrt(parseInt(this.calc1)).toString() ;
      this.textBox2 += this.calc1 + '=' + this.textBox1;
   
     
  }
  percent(event : MouseEvent){
    this.calc1 = this.textBox1;
      
      this.textBox1 = (parseInt(this.calc1) / 100).toString() ;
      this.textBox2 = this.calc1 + '%' + '=' + this.textBox1;
  }



  calculate(event : MouseEvent){
    if (this.operator == '')
    {
      //doe niks, er is nog geen nieuwe berekening ingevuld.
    }

    else
    {
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
      case '^': { 
        if (this.calc2.includes('-'))
        {
          this.textBox1 = '0';
        }
        else
        {
           this.squared = parseInt(this.calc1);
           for(let n = 2; n <= parseInt(this.calc2); n++)
           {
             this.calc1 = (parseFloat(this.calc1) * this.squared).toString() ;
          
           }
           this.textBox1 = this.calc1.toString();
        }
        
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

      case '%': { 
        this.textBox1 = (parseFloat(this.calc1) / 100).toString() ; 
        break; 
   } 
   
      default: { 
         break; 
      } 
    }

    
      this.textBox2 += this.textBox1;
    
    
    
    this.historyarray.push(this.textBox2);
    
    console.log(target.value);
    this.calc1 = '';
    this.calc2 = '';
    this.operator = '';
    this.squared = 0;
  }
  }
}



