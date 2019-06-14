import { Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver, Type } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { SubControlPointDirective } from 'src/app/_directives/sub-control-point.directive';
import { GetControlPointMetadata } from 'src/app/_helpers/control-point-components-list';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-control-point-page',
  templateUrl: './control-point-page.component.html',
  styleUrls: ['./control-point-page.component.css']
})
export class ControlPointPageComponent implements OnInit {
  @ViewChild(SubControlPointDirective, { static: true }) subControlPointHost: SubControlPointDirective;

  controlPointData: { title: string, subComponents: [] };
  controlPointType: string;
  renderedComponents: any[];

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolve: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.controlPointType = this.route.snapshot.paramMap.get('id');
    this.controlPointData = GetControlPointMetadata(this.controlPointType);

    // get common data (job detail and 4 control points data from api)
    this.getJobDetail()
      .subscribe(job => {
        this.renderSubComponents(job);
      });
  }

  getJobDetail(): Observable<any> {
    return of({
      jobId: 1,
      jobName: 'job 1'
    });
  }

  renderSubComponents(job) {
    // reset data
    this.renderedComponents = [];
    const viewContainerRef = this.subControlPointHost.viewContainerRef;
    viewContainerRef.clear();

    // render sub components instances and pass data
    this.controlPointData.subComponents.forEach((cpoint: { component: Type<any>, data: any }) => {
      const componentFactory = this.componentFactoryResolve.resolveComponentFactory(cpoint.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      const renderedComponent = componentRef.instance;

      // pass common data to each components
      renderedComponent.cpData = Object.assign({}, cpoint.data);
      renderedComponent.cpData.job = job;
      this.renderedComponents.push(renderedComponent);
    });
  }

  save() {
    // 2 type of saving: global saving and local saving
    const globalDataSaving = this.getGlobalSavingData();
    // call api to post data
    console.log(globalDataSaving);
  }

  submit() {
    const validSubmiting = this.renderedComponents
      .map(x => x.checkValidSubmitData())
      .every(x => x);

    if (validSubmiting) {
      // save before submit
      this.save();
      // call api to submit CP
    }
  }

  getGlobalSavingData() {
    return this.renderedComponents
      .filter(x => typeof x.getFormData === 'function')
      .map(x => x.getFormData());
  }
}
