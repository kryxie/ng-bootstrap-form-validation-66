/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from "@angular/core";
import { BootstrapVersion } from "../../../lib/Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../../Tokens/tokens";
export class MessagesComponent {
    /**
     * @param {?} bootstrapVersion
     */
    constructor(bootstrapVersion) {
        this.bootstrapVersion = bootstrapVersion;
        this.messages = (/**
         * @return {?}
         */
        () => []);
    }
    /**
     * @return {?}
     */
    get className() {
        switch (this.bootstrapVersion) {
            case BootstrapVersion.Three:
                return "help-block";
            case BootstrapVersion.Four:
                return "invalid-feedback";
        }
    }
}
MessagesComponent.decorators = [
    { type: Component, args: [{
                selector: "bfv-messages",
                template: `
    <span [ngClass]="className" *ngFor="let message of messages()">{{message}}</span>
  `,
                styles: [
                    `
      .invalid-feedback,
      .valid-feedback {
        display: block;
      }
    `
                ]
            },] },
];
/** @nocollapse */
MessagesComponent.ctorParameters = () => [
    { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
];
MessagesComponent.propDecorators = {
    messages: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MessagesComponent.prototype.messages;
    /**
     * @type {?}
     * @private
     */
    MessagesComponent.prototype.bootstrapVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0J4RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBYTVCLFlBQ3FDLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBWmhFLGFBQVE7OztRQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQztJQWF4QixDQUFDOzs7O0lBWEosSUFBSSxTQUFTO1FBQ1gsUUFBUSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO2dCQUN6QixPQUFPLFlBQVksQ0FBQztZQUN0QixLQUFLLGdCQUFnQixDQUFDLElBQUk7Z0JBQ3hCLE9BQU8sa0JBQWtCLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOOzs7OztLQUtDO2lCQUNGO2FBQ0Y7Ozs7WUFoQlEsZ0JBQWdCLHVCQStCcEIsTUFBTSxTQUFDLGlCQUFpQjs7O3VCQWIxQixLQUFLOzs7O0lBQU4scUNBQzJCOzs7OztJQVl6Qiw2Q0FBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYmZ2LW1lc3NhZ2VzXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMoKVwiPnt7bWVzc2FnZX19PC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaW52YWxpZC1mZWVkYmFjayxcbiAgICAgIC52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtZXNzYWdlcyA9ICgpID0+IFtdO1xuXG4gIGdldCBjbGFzc05hbWUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmJvb3RzdHJhcFZlcnNpb24pIHtcbiAgICAgIGNhc2UgQm9vdHN0cmFwVmVyc2lvbi5UaHJlZTpcbiAgICAgICAgcmV0dXJuIFwiaGVscC1ibG9ja1wiO1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLkZvdXI6XG4gICAgICAgIHJldHVybiBcImludmFsaWQtZmVlZGJhY2tcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIl19