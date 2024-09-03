import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Mado";

  public condiciona = this.name != "Mado" ? "O nome é diferente " : "O nome é igual a condicional";
  
  public isDisable = true;
  public srcValue = "";
  public sum(val1:number, val2:number){
    return val1 + val2;
  }

  constructor(){
    setTimeout(()=>{
      this.name = 'Marcus Augusto de OLiveira';
    }, 2000);

  }




}
