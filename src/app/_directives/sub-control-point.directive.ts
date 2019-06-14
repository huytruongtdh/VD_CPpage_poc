import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[sub-control-point-host]'
})
export class SubControlPointDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
