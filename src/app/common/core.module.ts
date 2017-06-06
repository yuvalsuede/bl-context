import {NgModule, ModuleWithProviders, SkipSelf, Optional} from '@angular/core';
import {AppContext} from "./app-context.service";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [],
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AppContext
      ]
    };
  }
}
