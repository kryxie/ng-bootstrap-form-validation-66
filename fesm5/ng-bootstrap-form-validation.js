import { Directive, EventEmitter, Input, Output, HostListener, InjectionToken, Component, Inject, Injectable, ContentChildren, ContentChild, ElementRef, HostBinding, defineInjectable, inject, Optional, Host, SkipSelf, NgModule } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormControlName, ControlContainer } from '@angular/forms';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var BootstrapVersion = {
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
var CUSTOM_ERROR_MESSAGES = new InjectionToken("ng-bootstrap-form-validation custom error messages");
/** @type {?} */
var BOOTSTRAP_VERSION = new InjectionToken("ng-bootstrap-form-validation module options");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_ERRORS = [
    {
        error: "required",
        format: (/**
         * @param {?} label
         * @return {?}
         */
        function (label) { return label + " is required"; })
    },
    {
        error: "pattern",
        format: (/**
         * @param {?} label
         * @return {?}
         */
        function (label) { return label + " is invalid"; })
    },
    {
        error: "minlength",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        function (label, error) {
            return label + " must be at least " + error.requiredLength + " characters";
        })
    },
    {
        error: "maxlength",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        function (label, error) {
            return label + " must be no longer than " + error.requiredLength + " characters";
        })
    },
    {
        error: "requiredTrue",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        function (label, error) { return label + " is required"; })
    },
    {
        error: "email",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        function (label, error) { return "Invalid email address"; })
    },
    {
        error: "max",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        function (label, error) { return label + " must be no greater than " + error.max; })
    },
    {
        error: "min",
        format: (/**
         * @param {?} label
         * @param {?} error
         * @return {?}
         */
        function (label, error) { return label + " must be no less than " + error.min; })
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorMessageService = /** @class */ (function () {
    function ErrorMessageService(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = DEFAULT_ERRORS;
        this.errorMessages = customErrorMessages.reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        function (acc, cur) { return acc.concat(cur); }), this.defaultErrors);
    }
    ErrorMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ErrorMessageService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
    ]; };
    /** @nocollapse */ ErrorMessageService.ngInjectableDef = defineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(inject(CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
    return ErrorMessageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent(elRef, errorMessageService) {
        var _this = this;
        this.elRef = elRef;
        this.errorMessageService = errorMessageService;
        this.customErrorMessages = [];
        this.validationDisabled = false;
        this.messages = (/**
         * @return {?}
         */
        function () { return _this.getMessages(); });
    }
    Object.defineProperty(FormGroupComponent.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return !c.valid && c.dirty && c.touched; })) &&
                !this.validationDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "hasSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return !c.valid; })) &&
                this.FormControlNames.some((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return c.dirty && c.touched; })) &&
                !this.validationDisabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.messagesBlock) {
            this.messagesBlock.messages = this.messages;
        }
    };
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.errorMessages = this.errorMessageService.errorMessages
            .concat(this.customErrorMessages)
            .reverse();
    };
    Object.defineProperty(FormGroupComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var label = this.elRef.nativeElement.querySelector("label");
            return label && label.textContent ? label.textContent.trim() : "This field";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "isDirtyAndTouched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.dirty && c.touched; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    FormGroupComponent.prototype.getMessages = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var messages = [];
        if (!this.isDirtyAndTouched || this.validationDisabled) {
            return messages;
        }
        /** @type {?} */
        var names = this.FormControlNames.map((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.name; }));
        this.FormControlNames.filter((/**
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        function (c, i) {
            return !c.valid &&
                !!c.errors &&
                // filter out FormControlNames that share the same name - usually for radio buttons
                names.indexOf(c.name) === i;
        })).forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            Object.keys(control.errors).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var error = _this.errorMessages.find((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return err.error === key; }));
                if (!error) {
                    return;
                }
                messages.push(error.format(_this.label, control.errors[key]));
            }));
        }));
        return messages;
    };
    FormGroupComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable:component-selector
                    selector: ".form-group",
                    template: "\n    <ng-content></ng-content>\n    <bfv-messages *ngIf=\"!messagesBlock\" [messages]=\"messages\"></bfv-messages>\n  "
                },] },
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ErrorMessageService }
    ]; };
    FormGroupComponent.propDecorators = {
        FormControlNames: [{ type: ContentChildren, args: [FormControlName,] }],
        customErrorMessages: [{ type: Input }],
        validationDisabled: [{ type: Input }],
        hasErrors: [{ type: HostBinding, args: ["class.has-error",] }],
        hasSuccess: [{ type: HostBinding, args: ["class.has-success",] }],
        messagesBlock: [{ type: ContentChild, args: [MessagesComponent,] }]
    };
    return FormGroupComponent;
}());

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
    return __spread((/** @type {?} */ (parent.path)), [name]);
}
var FormControlDirective = /** @class */ (function () {
    function FormControlDirective(parent, bootstrapVersion) {
        this.parent = parent;
        this.bootstrapVersion = bootstrapVersion;
    }
    Object.defineProperty(FormControlDirective.prototype, "validClass", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.control) {
                return false;
            }
            return (this.bootstrapFour &&
                this.control.valid &&
                (this.control.touched || this.control.dirty));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "invalidClass", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.control) {
                return false;
            }
            return (this.bootstrapFour &&
                this.control.invalid &&
                this.control.touched &&
                this.control.dirty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return controlPath(this.formControlName, this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formDirective && this.formDirective.getControl(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "formDirective", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "bootstrapFour", {
        get: /**
         * @return {?}
         */
        function () {
            return this.bootstrapVersion === BootstrapVersion.Four;
        },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: ".form-control,.form-check-input,.custom-control-input"
                },] },
    ];
    /** @nocollapse */
    FormControlDirective.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
    FormControlDirective.propDecorators = {
        formControlName: [{ type: Input }],
        formControl: [{ type: Input }],
        validClass: [{ type: HostBinding, args: ["class.is-valid",] }],
        invalidClass: [{ type: HostBinding, args: ["class.is-invalid",] }]
    };
    return FormControlDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBootstrapFormValidationModule = /** @class */ (function () {
    function NgBootstrapFormValidationModule() {
    }
    /**
     * @param {?=} userOptions
     * @return {?}
     */
    NgBootstrapFormValidationModule.forRoot = /**
     * @param {?=} userOptions
     * @return {?}
     */
    function (userOptions) {
        if (userOptions === void 0) { userOptions = {
            bootstrapVersion: BootstrapVersion.Four
        }; }
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
    };
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
    return NgBootstrapFormValidationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FormValidationDirective, MessagesComponent, FormGroupComponent, BootstrapVersion, NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION, FormControlDirective as ɵb, ErrorMessageService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uLnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9Ub2tlbnMvdG9rZW5zLnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyIsIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvZGVmYXVsdC1lcnJvcnMudHMiLCJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL1NlcnZpY2VzL2Vycm9yLW1lc3NhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvQ29tcG9uZW50cy9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9EaXJlY3RpdmVzL2Zvcm0tY29udHJvbC5kaXJlY3RpdmUudHMiLCJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUFycmF5LFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJbZm9ybUdyb3VwXVwiLFxuICBleHBvcnRBczogJ25nQm9vdHN0cmFwRm9ybVZhbGlkYXRvcidcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpXG4gIHZhbGlkU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcihcInN1Ym1pdFwiKVxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWRBbmREaXJ0eSh0aGlzLmZvcm1Hcm91cCk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkU3VibWl0LmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWRBbmREaXJ0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5jb250cm9scykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgdGhpcy5tYXJrQXNUb3VjaGVkQW5kRGlydHkoY29udHJvbC5jb250cm9sc1trZXldKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0FzVG91Y2hlZEFuZERpcnR5KGMpKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCAmJiBjb250cm9sLmVuYWJsZWQpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBCb290c3RyYXBWZXJzaW9uIHtcbiAgVGhyZWUsXG4gIEZvdXJcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi4vRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL01vZGVscy9lcnJvci1tZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fRVJST1JfTUVTU0FHRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48RXJyb3JNZXNzYWdlW10+KFxuICBcIm5nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24gY3VzdG9tIGVycm9yIG1lc3NhZ2VzXCJcbik7XG5cbmV4cG9ydCBjb25zdCBCT09UU1RSQVBfVkVSU0lPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxCb290c3RyYXBWZXJzaW9uPihcbiAgXCJuZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uIG1vZHVsZSBvcHRpb25zXCJcbik7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYmZ2LW1lc3NhZ2VzXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMoKVwiPnt7bWVzc2FnZX19PC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaW52YWxpZC1mZWVkYmFjayxcbiAgICAgIC52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtZXNzYWdlcyA9ICgpID0+IFtdO1xuXG4gIGdldCBjbGFzc05hbWUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmJvb3RzdHJhcFZlcnNpb24pIHtcbiAgICAgIGNhc2UgQm9vdHN0cmFwVmVyc2lvbi5UaHJlZTpcbiAgICAgICAgcmV0dXJuIFwiaGVscC1ibG9ja1wiO1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLkZvdXI6XG4gICAgICAgIHJldHVybiBcImludmFsaWQtZmVlZGJhY2tcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIiwiaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vTW9kZWxzL2Vycm9yLW1lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JTOiBFcnJvck1lc3NhZ2VbXSA9IFtcbiAge1xuICAgIGVycm9yOiBcInJlcXVpcmVkXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJwYXR0ZXJuXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgaW52YWxpZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pbmxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJtYXhsZW5ndGhcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+XG4gICAgICBgJHtsYWJlbH0gbXVzdCBiZSBubyBsb25nZXIgdGhhbiAke2Vycm9yLnJlcXVpcmVkTGVuZ3RofSBjaGFyYWN0ZXJzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRUcnVlXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJlbWFpbFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYEludmFsaWQgZW1haWwgYWRkcmVzc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuICR7ZXJyb3IubWF4fWBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pblwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gbGVzcyB0aGFuICR7ZXJyb3IubWlufWBcbiAgfVxuXTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VSUk9SUyB9IGZyb20gXCIuLi9kZWZhdWx0LWVycm9yc1wiO1xuaW1wb3J0IHsgQ1VTVE9NX0VSUk9SX01FU1NBR0VTIH0gZnJvbSBcIi4uL1Rva2Vucy90b2tlbnNcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRFcnJvcnMgPSBERUZBVUxUX0VSUk9SUztcblxuICBwdWJsaWMgZXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDVVNUT01fRVJST1JfTUVTU0FHRVMpIHB1YmxpYyBjdXN0b21FcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXVtdXG4gICkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IGN1c3RvbUVycm9yTWVzc2FnZXMucmVkdWNlKFxuICAgICAgKGFjYywgY3VyKSA9PiBhY2MuY29uY2F0KGN1ciksXG4gICAgICB0aGlzLmRlZmF1bHRFcnJvcnNcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vU2VydmljZXMvZXJyb3ItbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBcIi5mb3JtLWdyb3VwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxiZnYtbWVzc2FnZXMgKm5nSWY9XCIhbWVzc2FnZXNCbG9ja1wiIFttZXNzYWdlc109XCJtZXNzYWdlc1wiPjwvYmZ2LW1lc3NhZ2VzPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oRm9ybUNvbnRyb2xOYW1lKVxuICBGb3JtQ29udHJvbE5hbWVzOiBRdWVyeUxpc3Q8Rm9ybUNvbnRyb2xOYW1lPjtcblxuICBASW5wdXQoKVxuICBjdXN0b21FcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHZhbGlkYXRpb25EaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmhhcy1lcnJvclwiKVxuICBnZXQgaGFzRXJyb3JzKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+ICFjLnZhbGlkICYmIGMuZGlydHkgJiYgYy50b3VjaGVkKSAmJlxuICAgICAgIXRoaXMudmFsaWRhdGlvbkRpc2FibGVkXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmhhcy1zdWNjZXNzXCIpXG4gIGdldCBoYXNTdWNjZXNzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiAhYy52YWxpZCkgJiZcbiAgICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5zb21lKGMgPT4gYy5kaXJ0eSAmJiBjLnRvdWNoZWQpICYmXG4gICAgICAhdGhpcy52YWxpZGF0aW9uRGlzYWJsZWRcbiAgICApO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChNZXNzYWdlc0NvbXBvbmVudClcbiAgcHVibGljIG1lc3NhZ2VzQmxvY2s6IE1lc3NhZ2VzQ29tcG9uZW50O1xuXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW107XG5cbiAgcHVibGljIG1lc3NhZ2VzID0gKCkgPT4gdGhpcy5nZXRNZXNzYWdlcygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VTZXJ2aWNlOiBFcnJvck1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZXNCbG9jaykge1xuICAgICAgdGhpcy5tZXNzYWdlc0Jsb2NrLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UuZXJyb3JNZXNzYWdlc1xuICAgICAgLmNvbmNhdCh0aGlzLmN1c3RvbUVycm9yTWVzc2FnZXMpXG4gICAgICAucmV2ZXJzZSgpO1xuICB9XG5cbiAgZ2V0IGxhYmVsKCkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtcbiAgICByZXR1cm4gbGFiZWwgJiYgbGFiZWwudGV4dENvbnRlbnQgPyBsYWJlbC50ZXh0Q29udGVudC50cmltKCkgOiBcIlRoaXMgZmllbGRcIjtcbiAgfVxuXG4gIGdldCBpc0RpcnR5QW5kVG91Y2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiBjLmRpcnR5ICYmIGMudG91Y2hlZCk7XG4gIH1cblxuICBwcml2YXRlIGdldE1lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIGlmICghdGhpcy5pc0RpcnR5QW5kVG91Y2hlZCB8fCB0aGlzLnZhbGlkYXRpb25EaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gdGhpcy5Gb3JtQ29udHJvbE5hbWVzLm1hcChmID0+IGYubmFtZSk7XG5cbiAgICB0aGlzLkZvcm1Db250cm9sTmFtZXMuZmlsdGVyKFxuICAgICAgKGMsIGkpID0+XG4gICAgICAgICFjLnZhbGlkICYmXG4gICAgICAgICEhYy5lcnJvcnMgJiZcbiAgICAgICAgLy8gZmlsdGVyIG91dCBGb3JtQ29udHJvbE5hbWVzIHRoYXQgc2hhcmUgdGhlIHNhbWUgbmFtZSAtIHVzdWFsbHkgZm9yIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgbmFtZXMuaW5kZXhPZihjLm5hbWUpID09PSBpXG4gICAgKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5lcnJvcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmVycm9yTWVzc2FnZXMuZmluZChlcnIgPT4gZXJyLmVycm9yID09PSBrZXkpO1xuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goZXJyb3IuZm9ybWF0KHRoaXMubGFiZWwsIGNvbnRyb2wuZXJyb3JzW2tleV0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIEhvc3QsXG4gIFNraXBTZWxmLFxuICBJbmplY3Rcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbnRyb2xDb250YWluZXIsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBCb290c3RyYXBWZXJzaW9uIH0gZnJvbSBcIi4uL0VudW1zL0Jvb3RzdHJhcFZlcnNpb25cIjtcbmltcG9ydCB7IEJPT1RTVFJBUF9WRVJTSU9OIH0gZnJvbSBcIi4uL1Rva2Vucy90b2tlbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xQYXRoKG5hbWU6IHN0cmluZywgcGFyZW50OiBDb250cm9sQ29udGFpbmVyKTogc3RyaW5nW10ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gIHJldHVybiBbLi4ucGFyZW50LnBhdGghLCBuYW1lXTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwiLmZvcm0tY29udHJvbCwuZm9ybS1jaGVjay1pbnB1dCwuY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtQ29udHJvbDogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmlzLXZhbGlkXCIpXG4gIGdldCB2YWxpZENsYXNzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJvb3RzdHJhcEZvdXIgJiZcbiAgICAgIHRoaXMuY29udHJvbC52YWxpZCAmJlxuICAgICAgKHRoaXMuY29udHJvbC50b3VjaGVkIHx8IHRoaXMuY29udHJvbC5kaXJ0eSlcbiAgICApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXMtaW52YWxpZFwiKVxuICBnZXQgaW52YWxpZENsYXNzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJvb3RzdHJhcEZvdXIgJiZcbiAgICAgIHRoaXMuY29udHJvbC5pbnZhbGlkICYmXG4gICAgICB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJlxuICAgICAgdGhpcy5jb250cm9sLmRpcnR5XG4gICAgKTtcbiAgfVxuXG4gIGdldCBwYXRoKCkge1xuICAgIHJldHVybiBjb250cm9sUGF0aCh0aGlzLmZvcm1Db250cm9sTmFtZSwgdGhpcy5wYXJlbnQpO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUgJiYgdGhpcy5mb3JtRGlyZWN0aXZlLmdldENvbnRyb2wodGhpcyk7XG4gIH1cblxuICBnZXQgZm9ybURpcmVjdGl2ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGJvb3RzdHJhcEZvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwVmVyc2lvbiA9PT0gQm9vdHN0cmFwVmVyc2lvbi5Gb3VyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gdGhpcyB2YWx1ZSBtaWdodCBiZSBudWxsLCBidXQgd2UgdW5pb24gdHlwZSBpdCBhcyBzdWNoIHVudGlsXG4gICAgLy8gdGhpcyBpc3N1ZSBpcyByZXNvbHZlZDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjU1NDRcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBAU2tpcFNlbGYoKVxuICAgIHByaXZhdGUgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgIEBJbmplY3QoQk9PVFNUUkFQX1ZFUlNJT04pIHByaXZhdGUgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvblxuICApIHt9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL1NlcnZpY2VzL2Vycm9yLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQ1VTVE9NX0VSUk9SX01FU1NBR0VTLCBCT09UU1RSQVBfVkVSU0lPTiB9IGZyb20gXCIuL1Rva2Vucy90b2tlbnNcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zIH0gZnJvbSBcIi4vTW9kZWxzL05nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvZm9ybS1jb250cm9sLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUsXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgIEZvcm1Db250cm9sRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSxcbiAgICBGb3JtR3JvdXBDb21wb25lbnQsXG4gICAgTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRm9ybUNvbnRyb2xEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jvb3RzdHJhcEZvcm1WYWxpZGF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgdXNlck9wdGlvbnM6IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zID0ge1xuICAgICAgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvbi5Gb3VyXG4gICAgfVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENVU1RPTV9FUlJPUl9NRVNTQUdFUyxcbiAgICAgICAgICB1c2VWYWx1ZTogdXNlck9wdGlvbnMuY3VzdG9tRXJyb3JNZXNzYWdlcyB8fCBbXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQk9PVFNUUkFQX1ZFUlNJT04sXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZXJPcHRpb25zLmJvb3RzdHJhcFZlcnNpb25cbiAgICAgICAgfSxcbiAgICAgICAgRXJyb3JNZXNzYWdlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWNBO1FBU0UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBdUJ2Qzs7OztJQXBCQywwQ0FBUTs7O0lBRFI7UUFFRSxJQUFJLENBQUMscUJBQXFCLENBQUMs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