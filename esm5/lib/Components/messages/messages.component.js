/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from "@angular/core";
import { BootstrapVersion } from "../../../lib/Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../../Tokens/tokens";
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(bootstrapVersion) {
        this.bootstrapVersion = bootstrapVersion;
        this.messages = (/**
         * @return {?}
         */
        function () { return []; });
    }
    Object.defineProperty(MessagesComponent.prototype, "className", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.bootstrapVersion) {
                case BootstrapVersion.Three:
                    return "help-block";
                case BootstrapVersion.Four:
                    return "invalid-feedback";
            }
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: "bfv-messages",
                    template: "\n    <span [ngClass]=\"className\" *ngFor=\"let message of messages()\">{{message}}</span>\n  ",
                    styles: [
                        "\n      .invalid-feedback,\n      .valid-feedback {\n        display: block;\n      }\n    "
                    ]
                },] },
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = function () { return [
        { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
    MessagesComponent.propDecorators = {
        messages: [{ type: Input }]
    };
    return MessagesComponent;
}());
export { MessagesComponent };
if (false) {
    /** @type {?} */
    MessagesComponent.prototype.messages;
    /**
     * @type {?}
     * @private
     */
    MessagesComponent.prototype.bootstrapVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhEO0lBMkJFLDJCQUNxQyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVpoRSxhQUFROzs7UUFBRyxjQUFNLE9BQUEsRUFBRSxFQUFGLENBQUUsRUFBQztJQWF4QixDQUFDO0lBWEosc0JBQUksd0NBQVM7Ozs7UUFBYjtZQUNFLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM3QixLQUFLLGdCQUFnQixDQUFDLEtBQUs7b0JBQ3pCLE9BQU8sWUFBWSxDQUFDO2dCQUN0QixLQUFLLGdCQUFnQixDQUFDLElBQUk7b0JBQ3hCLE9BQU8sa0JBQWtCLENBQUM7YUFDN0I7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGlHQUVUO29CQUNELE1BQU0sRUFBRTt3QkFDTiw2RkFLQztxQkFDRjtpQkFDRjs7OztnQkFoQlEsZ0JBQWdCLHVCQStCcEIsTUFBTSxTQUFDLGlCQUFpQjs7OzJCQWIxQixLQUFLOztJQWVSLHdCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FoQlksaUJBQWlCOzs7SUFDNUIscUNBQzJCOzs7OztJQVl6Qiw2Q0FBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYmZ2LW1lc3NhZ2VzXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMoKVwiPnt7bWVzc2FnZX19PC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaW52YWxpZC1mZWVkYmFjayxcbiAgICAgIC52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtZXNzYWdlcyA9ICgpID0+IFtdO1xuXG4gIGdldCBjbGFzc05hbWUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmJvb3RzdHJhcFZlcnNpb24pIHtcbiAgICAgIGNhc2UgQm9vdHN0cmFwVmVyc2lvbi5UaHJlZTpcbiAgICAgICAgcmV0dXJuIFwiaGVscC1ibG9ja1wiO1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLkZvdXI6XG4gICAgICAgIHJldHVybiBcImludmFsaWQtZmVlZGJhY2tcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIl19