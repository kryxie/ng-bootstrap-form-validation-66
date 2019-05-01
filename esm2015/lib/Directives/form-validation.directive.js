/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Input, Output, HostListener } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
export class FormValidationDirective {
    constructor() {
        this.validSubmit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    markAsTouchedAndDirty(control) {
        if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.markAsTouchedAndDirty(control.controls[key])));
        }
        else if (control instanceof FormArray) {
            control.controls.forEach((/**
             * @param {?} c
             * @return {?}
             */
            c => this.markAsTouchedAndDirty(c)));
        }
        else if (control instanceof FormControl && control.enabled) {
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        }
    }
}
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
if (false) {
    /** @type {?} */
    FormValidationDirective.prototype.formGroup;
    /** @type {?} */
    FormValidationDirective.prototype.validSubmit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQU94QixNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBU0UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBdUJ4QyxDQUFDOzs7O0lBcEJDLFFBQVE7UUFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBd0I7UUFDNUMsSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNsRCxDQUFDO1NBQ0g7YUFBTSxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUM5RDthQUFNLElBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzVELE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLDBCQUEwQjthQUNyQzs7O3dCQUVFLEtBQUs7MEJBRUwsTUFBTTt1QkFHTixZQUFZLFNBQUMsUUFBUTs7OztJQUx0Qiw0Q0FDcUI7O0lBQ3JCLDhDQUNzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUFycmF5LFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJbZm9ybUdyb3VwXVwiLFxuICBleHBvcnRBczogJ25nQm9vdHN0cmFwRm9ybVZhbGlkYXRvcidcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpXG4gIHZhbGlkU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcihcInN1Ym1pdFwiKVxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWRBbmREaXJ0eSh0aGlzLmZvcm1Hcm91cCk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkU3VibWl0LmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWRBbmREaXJ0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5jb250cm9scykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgdGhpcy5tYXJrQXNUb3VjaGVkQW5kRGlydHkoY29udHJvbC5jb250cm9sc1trZXldKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0FzVG91Y2hlZEFuZERpcnR5KGMpKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCAmJiBjb250cm9sLmVuYWJsZWQpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=