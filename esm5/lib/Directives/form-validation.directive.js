/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Input, Output, HostListener } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
var FormValidationDirective = /** @class */ (function () {
    function FormValidationDirective() {
        this.validSubmit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FormValidationDirective.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidationDirective.prototype.markAsTouchedAndDirty = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var _this = this;
        if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return _this.markAsTouchedAndDirty(control.controls[key]);
            }));
        }
        else if (control instanceof FormArray) {
            control.controls.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return _this.markAsTouchedAndDirty(c); }));
        }
        else if (control instanceof FormControl && control.enabled) {
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        }
    };
    FormValidationDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: "[formGroup]",
                    exportAs: 'ngBootstrapFormValidator'
                },] },
    ];
    FormValidationDirective.propDecorators = {
        formGroup: [{ type: Input }],
        validSubmit: [{ type: Output }],
        onSubmit: [{ type: HostListener, args: ["submit",] }]
    };
    return FormValidationDirective;
}());
export { FormValidationDirective };
if (false) {
    /** @type {?} */
    FormValidationDirective.prototype.formGroup;
    /** @type {?} */
    FormValidationDirective.prototype.validSubmit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQUFBO1FBU0UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBdUJ4QyxDQUFDOzs7O0lBcEJDLDBDQUFROzs7SUFEUjtRQUVFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1REFBcUI7Ozs7SUFBckIsVUFBc0IsT0FBd0I7UUFBOUMsaUJBWUM7UUFYQyxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRztnQkFDdkMsT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFqRCxDQUFpRCxFQUNsRCxDQUFDO1NBQ0g7YUFBTSxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztTQUM5RDthQUFNLElBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzVELE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDBCQUEwQjtpQkFDckM7Ozs0QkFFRSxLQUFLOzhCQUVMLE1BQU07MkJBR04sWUFBWSxTQUFDLFFBQVE7O0lBcUJ4Qiw4QkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLHVCQUF1Qjs7O0lBQ2xDLDRDQUNxQjs7SUFDckIsOENBQ3NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQXJyYXksXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXBcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBcIltmb3JtR3JvdXBdXCIsXG4gIGV4cG9ydEFzOiAnbmdCb290c3RyYXBGb3JtVmFsaWRhdG9yJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBAT3V0cHV0KClcbiAgdmFsaWRTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdExpc3RlbmVyKFwic3VibWl0XCIpXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMubWFya0FzVG91Y2hlZEFuZERpcnR5KHRoaXMuZm9ybUdyb3VwKTtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcbiAgICAgIHRoaXMudmFsaWRTdWJtaXQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbWFya0FzVG91Y2hlZEFuZERpcnR5KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICBPYmplY3Qua2V5cyhjb250cm9sLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICB0aGlzLm1hcmtBc1RvdWNoZWRBbmREaXJ0eShjb250cm9sLmNvbnRyb2xzW2tleV0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgY29udHJvbC5jb250cm9scy5mb3JFYWNoKGMgPT4gdGhpcy5tYXJrQXNUb3VjaGVkQW5kRGlydHkoYykpO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sICYmIGNvbnRyb2wuZW5hYmxlZCkge1xuICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==