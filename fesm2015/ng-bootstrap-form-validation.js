import { Directive, EventEmitter, Input, Output, HostListener, InjectionToken, Component, Inject, Injectable, HostBinding, Optional, Host, SkipSelf, ContentChildren, ContentChild, ElementRef, defineInjectable, inject, NgModule } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormControlName, ControlContainer } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormValidationDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const BootstrapVersion = {
    Three: 0,
    Four: 1,
};
BootstrapVersion[BootstrapVersion.Three] = 'Three';
BootstrapVersion[BootstrapVersion.Four] = 'Four';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CUSTOM_ERROR_MESSAGES = new InjectionToken("ng-bootstrap-form-validation custom error messages");
/** @type {?} */
const BOOTSTRAP_VERSION = new InjectionToken("ng-bootstrap-form-validation module options");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessagesComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_ERRORS = [
    {
        error: "required",
        format: (/**
         * @param {?} label
         * @return {?}
         */
        label => `${label} is required`)
    },
    {
        error: "pattern",
        format: (/**
         * @param {?} label
         * @return {?}
         */
        label => `${label} is invalid`)
    },
    {
        error: "minlength",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        (label, error) => `${label} must be at least ${error.requiredLength} characters`)
    },
    {
        error: "maxlength",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        (label, error) => `${label} must be no longer than ${error.requiredLength} characters`)
    },
    {
        error: "requiredTrue",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        (label, error) => `${label} is required`)
    },
    {
        error: "email",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        (label, error) => `Invalid email address`)
    },
    {
        error: "max",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        (label, error) => `${label} must be no greater than ${error.max}`)
    },
    {
        error: "min",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        (label, error) => `${label} must be no less than ${error.min}`)
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorMessageService {
    /**
     * @param {?} customErrorMessages
     */
    constructor(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = DEFAULT_ERRORS;
        this.errorMessages = customErrorMessages.reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc.concat(cur)), this.defaultErrors);
    }
}
ErrorMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
ErrorMessageService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
];
/** @nocollapse */ ErrorMessageService.ngInjectableDef = defineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(inject(CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormGroupComponent {
    /**
     * @param {?} elRef
     * @param {?} errorMessageService
     */
    constructor(elRef, errorMessageService) {
        this.elRef = elRef;
        this.errorMessageService = errorMessageService;
        this.customErrorMessages = [];
        this.validationDisabled = false;
        this.messages = (/**
         * @return {?}
         */
        () => this.getMessages());
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return (this.FormControlNames.some((/**
         * @param {?} c
         * @return {?}
         */
        c => !c.valid && c.dirty && c.touched)) &&
            !this.validationDisabled);
    }
    /**
     * @return {?}
     */
    get hasSuccess() {
        return (!this.FormControlNames.some((/**
         * @param {?} c
         * @return {?}
         */
        c => !c.valid)) &&
            this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            c => c.dirty && c.touched)) &&
            !this.validationDisabled);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.messagesBlock) {
            this.messagesBlock.messages = this.messages;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.errorMessages = this.errorMessageService.errorMessages
            .concat(this.customErrorMessages)
            .reverse();
    }
    /**
     * @return {?}
     */
    get label() {
        /** @type {?} */
        const label = this.elRef.nativeElement.querySelector("label");
        return label && label.textContent ? label.textContent.trim() : "This field";
    }
    /**
     * @return {?}
     */
    get isDirtyAndTouched() {
        return this.FormControlNames.some((/**
         * @param {?} c
         * @return {?}
         */
        c => c.dirty && c.touched));
    }
    /**
     * @private
     * @return {?}
     */
    getMessages() {
        /** @type {?} */
        const messages = [];
        if (!this.isDirtyAndTouched || this.validationDisabled) {
            return messages;
        }
        /** @type {?} */
        const names = this.FormControlNames.map((/**
         * @param {?} f
         * @return {?}
         */
        f => f.name));
        this.FormControlNames.filter((/**
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        (c, i) => !c.valid &&
            !!c.errors &&
            // filter out FormControlNames that share the same name - usually for radio buttons
            names.indexOf(c.name) === i)).forEach((/**
         * @param {?} control
         * @return {?}
         */
        control => {
            Object.keys(control.errors).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const error = this.errorMessages.find((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => err.error === key));
                if (!error) {
                    return;
                }
                messages.push(error.format(this.label, control.errors[key]));
            }));
        }));
        return messages;
    }
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable:component-selector
                selector: ".form-group",
                template: `
    <ng-content></ng-content>
    <bfv-messages *ngIf="!messagesBlock" [messages]="messages"></bfv-messages>
  `
            },] },
];
/** @nocollapse */
FormGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ErrorMessageService }
];
FormGroupComponent.propDecorators = {
    FormControlNames: [{ type: ContentChildren, args: [FormControlName,] }],
    customErrorMessages: [{ type: Input }],
    validationDisabled: [{ type: Input }],
    hasErrors: [{ type: HostBinding, args: ["class.has-error",] }],
    hasSuccess: [{ type: HostBinding, args: ["class.has-success",] }],
    messagesBlock: [{ type: ContentChild, args: [MessagesComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    // tslint:disable-next-line:no-non-null-assertion
    return [...(/** @type {?} */ (parent.path)), name];
}
class FormControlDirective {
    /**
     * @param {?} parent
     * @param {?} bootstrapVersion
     */
    constructor(parent, bootstrapVersion) {
        this.parent = parent;
        this.bootstrapVersion = bootstrapVersion;
    }
    /**
     * @return {?}
     */
    get validClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.valid &&
            (this.control.touched || this.control.dirty));
    }
    /**
     * @return {?}
     */
    get invalidClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.invalid &&
            this.control.touched &&
            this.control.dirty);
    }
    /**
     * @return {?}
     */
    get path() {
        return controlPath(this.formControlName, this.parent);
    }
    /**
     * @return {?}
     */
    get control() {
        return this.formDirective && this.formDirective.getControl(this);
    }
    /**
     * @return {?}
     */
    get formDirective() {
        return this.parent ? this.parent.formDirective : null;
    }
    /**
     * @return {?}
     */
    get bootstrapFour() {
        return this.bootstrapVersion === BootstrapVersion.Four;
    }
}
FormControlDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: ".form-control,.form-check-input,.custom-control-input"
            },] },
];
/** @nocollapse */
FormControlDirective.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
];
FormControlDirective.propDecorators = {
    formControlName: [{ type: Input }],
    formControl: [{ type: Input }],
    validClass: [{ type: HostBinding, args: ["class.is-valid",] }],
    invalidClass: [{ type: HostBinding, args: ["class.is-invalid",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgBootstrapFormValidationModule {
    /**
     * @param {?=} userOptions
     * @return {?}
     */
    static forRoot(userOptions = {
        bootstrapVersion: BootstrapVersion.Four
    }) {
        return {
            ngModule: NgBootstrapFormValidationModule,
            providers: [
                {
                    provide: CUSTOM_ERROR_MESSAGES,
                    useValue: userOptions.customErrorMessages || [],
                    multi: true
                },
                {
                    provide: BOOTSTRAP_VERSION,
                    useValue: userOptions.bootstrapVersion
                },
                ErrorMessageService
            ]
        };
    }
}
NgBootstrapFormValidationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    FormValidationDirective,
                    FormGroupComponent,
                    MessagesComponent,
                    FormControlDirective
                ],
                exports: [
                    FormValidationDirective,
                    FormGroupComponent,
                    MessagesComponent,
                    FormControlDirective
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FormValidationDirective, MessagesComponent, FormGroupComponent, BootstrapVersion, NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION, FormControlDirective as ɵb, ErrorMessageService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uLnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9Ub2tlbnMvdG9rZW5zLnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyIsIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvZGVmYXVsdC1lcnJvcnMudHMiLCJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL1NlcnZpY2VzL2Vycm9yLW1lc3NhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvQ29tcG9uZW50cy9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9EaXJlY3RpdmVzL2Zvcm0tY29udHJvbC5kaXJlY3RpdmUudHMiLCJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUFycmF5LFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJbZm9ybUdyb3VwXVwiLFxuICBleHBvcnRBczogJ25nQm9vdHN0cmFwRm9ybVZhbGlkYXRvcidcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpXG4gIHZhbGlkU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcihcInN1Ym1pdFwiKVxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWRBbmREaXJ0eSh0aGlzLmZvcm1Hcm91cCk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkU3VibWl0LmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWRBbmREaXJ0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5jb250cm9scykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgdGhpcy5tYXJrQXNUb3VjaGVkQW5kRGlydHkoY29udHJvbC5jb250cm9sc1trZXldKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0FzVG91Y2hlZEFuZERpcnR5KGMpKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCAmJiBjb250cm9sLmVuYWJsZWQpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBCb290c3RyYXBWZXJzaW9uIHtcbiAgVGhyZWUsXG4gIEZvdXJcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi4vRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL01vZGVscy9lcnJvci1tZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fRVJST1JfTUVTU0FHRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48RXJyb3JNZXNzYWdlW10+KFxuICBcIm5nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24gY3VzdG9tIGVycm9yIG1lc3NhZ2VzXCJcbik7XG5cbmV4cG9ydCBjb25zdCBCT09UU1RSQVBfVkVSU0lPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxCb290c3RyYXBWZXJzaW9uPihcbiAgXCJuZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uIG1vZHVsZSBvcHRpb25zXCJcbik7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYmZ2LW1lc3NhZ2VzXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMoKVwiPnt7bWVzc2FnZX19PC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaW52YWxpZC1mZWVkYmFjayxcbiAgICAgIC52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtZXNzYWdlcyA9ICgpID0+IFtdO1xuXG4gIGdldCBjbGFzc05hbWUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmJvb3RzdHJhcFZlcnNpb24pIHtcbiAgICAgIGNhc2UgQm9vdHN0cmFwVmVyc2lvbi5UaHJlZTpcbiAgICAgICAgcmV0dXJuIFwiaGVscC1ibG9ja1wiO1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLkZvdXI6XG4gICAgICAgIHJldHVybiBcImludmFsaWQtZmVlZGJhY2tcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIiwiaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vTW9kZWxzL2Vycm9yLW1lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JTOiBFcnJvck1lc3NhZ2VbXSA9IFtcbiAge1xuICAgIGVycm9yOiBcInJlcXVpcmVkXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJwYXR0ZXJuXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgaW52YWxpZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pbmxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJtYXhsZW5ndGhcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+XG4gICAgICBgJHtsYWJlbH0gbXVzdCBiZSBubyBsb25nZXIgdGhhbiAke2Vycm9yLnJlcXVpcmVkTGVuZ3RofSBjaGFyYWN0ZXJzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRUcnVlXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJlbWFpbFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYEludmFsaWQgZW1haWwgYWRkcmVzc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuICR7ZXJyb3IubWF4fWBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pblwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gbGVzcyB0aGFuICR7ZXJyb3IubWlufWBcbiAgfVxuXTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VSUk9SUyB9IGZyb20gXCIuLi9kZWZhdWx0LWVycm9yc1wiO1xuaW1wb3J0IHsgQ1VTVE9NX0VSUk9SX01FU1NBR0VTIH0gZnJvbSBcIi4uL1Rva2Vucy90b2tlbnNcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRFcnJvcnMgPSBERUZBVUxUX0VSUk9SUztcblxuICBwdWJsaWMgZXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDVVNUT01fRVJST1JfTUVTU0FHRVMpIHB1YmxpYyBjdXN0b21FcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXVtdXG4gICkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IGN1c3RvbUVycm9yTWVzc2FnZXMucmVkdWNlKFxuICAgICAgKGFjYywgY3VyKSA9PiBhY2MuY29uY2F0KGN1ciksXG4gICAgICB0aGlzLmRlZmF1bHRFcnJvcnNcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vU2VydmljZXMvZXJyb3ItbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBcIi5mb3JtLWdyb3VwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxiZnYtbWVzc2FnZXMgKm5nSWY9XCIhbWVzc2FnZXNCbG9ja1wiIFttZXNzYWdlc109XCJtZXNzYWdlc1wiPjwvYmZ2LW1lc3NhZ2VzPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oRm9ybUNvbnRyb2xOYW1lKVxuICBGb3JtQ29udHJvbE5hbWVzOiBRdWVyeUxpc3Q8Rm9ybUNvbnRyb2xOYW1lPjtcblxuICBASW5wdXQoKVxuICBjdXN0b21FcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHZhbGlkYXRpb25EaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmhhcy1lcnJvclwiKVxuICBnZXQgaGFzRXJyb3JzKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+ICFjLnZhbGlkICYmIGMuZGlydHkgJiYgYy50b3VjaGVkKSAmJlxuICAgICAgIXRoaXMudmFsaWRhdGlvbkRpc2FibGVkXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmhhcy1zdWNjZXNzXCIpXG4gIGdldCBoYXNTdWNjZXNzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiAhYy52YWxpZCkgJiZcbiAgICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5zb21lKGMgPT4gYy5kaXJ0eSAmJiBjLnRvdWNoZWQpICYmXG4gICAgICAhdGhpcy52YWxpZGF0aW9uRGlzYWJsZWRcbiAgICApO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChNZXNzYWdlc0NvbXBvbmVudClcbiAgcHVibGljIG1lc3NhZ2VzQmxvY2s6IE1lc3NhZ2VzQ29tcG9uZW50O1xuXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW107XG5cbiAgcHVibGljIG1lc3NhZ2VzID0gKCkgPT4gdGhpcy5nZXRNZXNzYWdlcygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VTZXJ2aWNlOiBFcnJvck1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZXNCbG9jaykge1xuICAgICAgdGhpcy5tZXNzYWdlc0Jsb2NrLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UuZXJyb3JNZXNzYWdlc1xuICAgICAgLmNvbmNhdCh0aGlzLmN1c3RvbUVycm9yTWVzc2FnZXMpXG4gICAgICAucmV2ZXJzZSgpO1xuICB9XG5cbiAgZ2V0IGxhYmVsKCkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtcbiAgICByZXR1cm4gbGFiZWwgJiYgbGFiZWwudGV4dENvbnRlbnQgPyBsYWJlbC50ZXh0Q29udGVudC50cmltKCkgOiBcIlRoaXMgZmllbGRcIjtcbiAgfVxuXG4gIGdldCBpc0RpcnR5QW5kVG91Y2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiBjLmRpcnR5ICYmIGMudG91Y2hlZCk7XG4gIH1cblxuICBwcml2YXRlIGdldE1lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIGlmICghdGhpcy5pc0RpcnR5QW5kVG91Y2hlZCB8fCB0aGlzLnZhbGlkYXRpb25EaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gdGhpcy5Gb3JtQ29udHJvbE5hbWVzLm1hcChmID0+IGYubmFtZSk7XG5cbiAgICB0aGlzLkZvcm1Db250cm9sTmFtZXMuZmlsdGVyKFxuICAgICAgKGMsIGkpID0+XG4gICAgICAgICFjLnZhbGlkICYmXG4gICAgICAgICEhYy5lcnJvcnMgJiZcbiAgICAgICAgLy8gZmlsdGVyIG91dCBGb3JtQ29udHJvbE5hbWVzIHRoYXQgc2hhcmUgdGhlIHNhbWUgbmFtZSAtIHVzdWFsbHkgZm9yIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgbmFtZXMuaW5kZXhPZihjLm5hbWUpID09PSBpXG4gICAgKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5lcnJvcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmVycm9yTWVzc2FnZXMuZmluZChlcnIgPT4gZXJyLmVycm9yID09PSBrZXkpO1xuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goZXJyb3IuZm9ybWF0KHRoaXMubGFiZWwsIGNvbnRyb2wuZXJyb3JzW2tleV0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIEhvc3QsXG4gIFNraXBTZWxmLFxuICBJbmplY3Rcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbnRyb2xDb250YWluZXIsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBCb290c3RyYXBWZXJzaW9uIH0gZnJvbSBcIi4uL0VudW1zL0Jvb3RzdHJhcFZlcnNpb25cIjtcbmltcG9ydCB7IEJPT1RTVFJBUF9WRVJTSU9OIH0gZnJvbSBcIi4uL1Rva2Vucy90b2tlbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xQYXRoKG5hbWU6IHN0cmluZywgcGFyZW50OiBDb250cm9sQ29udGFpbmVyKTogc3RyaW5nW10ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gIHJldHVybiBbLi4ucGFyZW50LnBhdGghLCBuYW1lXTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwiLmZvcm0tY29udHJvbCwuZm9ybS1jaGVjay1pbnB1dCwuY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtQ29udHJvbDogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmlzLXZhbGlkXCIpXG4gIGdldCB2YWxpZENsYXNzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJvb3RzdHJhcEZvdXIgJiZcbiAgICAgIHRoaXMuY29udHJvbC52YWxpZCAmJlxuICAgICAgKHRoaXMuY29udHJvbC50b3VjaGVkIHx8IHRoaXMuY29udHJvbC5kaXJ0eSlcbiAgICApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXMtaW52YWxpZFwiKVxuICBnZXQgaW52YWxpZENsYXNzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJvb3RzdHJhcEZvdXIgJiZcbiAgICAgIHRoaXMuY29udHJvbC5pbnZhbGlkICYmXG4gICAgICB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJlxuICAgICAgdGhpcy5jb250cm9sLmRpcnR5XG4gICAgKTtcbiAgfVxuXG4gIGdldCBwYXRoKCkge1xuICAgIHJldHVybiBjb250cm9sUGF0aCh0aGlzLmZvcm1Db250cm9sTmFtZSwgdGhpcy5wYXJlbnQpO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUgJiYgdGhpcy5mb3JtRGlyZWN0aXZlLmdldENvbnRyb2wodGhpcyk7XG4gIH1cblxuICBnZXQgZm9ybURpcmVjdGl2ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGJvb3RzdHJhcEZvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwVmVyc2lvbiA9PT0gQm9vdHN0cmFwVmVyc2lvbi5Gb3VyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gdGhpcyB2YWx1ZSBtaWdodCBiZSBudWxsLCBidXQgd2UgdW5pb24gdHlwZSBpdCBhcyBzdWNoIHVudGlsXG4gICAgLy8gdGhpcyBpc3N1ZSBpcyByZXNvbHZlZDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjU1NDRcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBAU2tpcFNlbGYoKVxuICAgIHByaXZhdGUgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgIEBJbmplY3QoQk9PVFNUUkFQX1ZFUlNJT04pIHByaXZhdGUgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvblxuICApIHt9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL1NlcnZpY2VzL2Vycm9yLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQ1VTVE9NX0VSUk9SX01FU1NBR0VTLCBCT09UU1RSQVBfVkVSU0lPTiB9IGZyb20gXCIuL1Rva2Vucy90b2tlbnNcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zIH0gZnJvbSBcIi4vTW9kZWxzL05nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvZm9ybS1jb250cm9sLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUsXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgIEZvcm1Db250cm9sRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSxcbiAgICBGb3JtR3JvdXBDb21wb25lbnQsXG4gICAgTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRm9ybUNvbnRyb2xEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jvb3RzdHJhcEZvcm1WYWxpZGF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgdXNlck9wdGlvbnM6IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zID0ge1xuICAgICAgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvbi5Gb3VyXG4gICAgfVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENVU1RPTV9FUlJPUl9NRVNTQUdFUyxcbiAgICAgICAgICB1c2VWYWx1ZTogdXNlck9wdGlvbnMuY3VzdG9tRXJyb3JNZXNzYWdlcyB8fCBbXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQk9PVFNUUkFQX1ZFUlNJT04sXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZXJPcHRpb25zLmJvb3RzdHJhcFZlcnNpb25cbiAgICAgICAgfSxcbiAgICAgICAgRXJyb3JNZXNzYWdlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BbUJhLHVCQUF1QjtJQUxwQztRQVNFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQXVCdkM7Ozs7SUFwQkMsUUFBUTtRQUNOLElBQUksQ0FBQyxxQkFBcUIs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