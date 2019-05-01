(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-bootstrap-form-validation', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ng-bootstrap-form-validation'] = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,i0,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormValidationDirective = /** @class */ (function () {
        function FormValidationDirective() {
            this.validSubmit = new i0.EventEmitter();
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
                if (control instanceof forms.FormGroup) {
                    Object.keys(control.controls).forEach(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) {
                        return _this.markAsTouchedAndDirty(control.controls[key]);
                    }));
                }
                else if (control instanceof forms.FormArray) {
                    control.controls.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return _this.markAsTouchedAndDirty(c); }));
                }
                else if (control instanceof forms.FormControl && control.enabled) {
                    control.markAsDirty();
                    control.markAsTouched();
                    control.updateValueAndValidity();
                }
            };
        FormValidationDirective.decorators = [
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: "[formGroup]",
                        exportAs: 'ngBootstrapFormValidator'
                    },] },
        ];
        FormValidationDirective.propDecorators = {
            formGroup: [{ type: i0.Input }],
            validSubmit: [{ type: i0.Output }],
            onSubmit: [{ type: i0.HostListener, args: ["submit",] }]
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
    var CUSTOM_ERROR_MESSAGES = new i0.InjectionToken("ng-bootstrap-form-validation custom error messages");
    /** @type {?} */
    var BOOTSTRAP_VERSION = new i0.InjectionToken("ng-bootstrap-form-validation module options");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MessagesComponent = /** @class */ (function () {
        function MessagesComponent(bootstrapVersion) {
            this.bootstrapVersion = bootstrapVersion;
            this.messages = ( /**
             * @return {?}
             */function () { return []; });
        }
        Object.defineProperty(MessagesComponent.prototype, "className", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: i0.Component, args: [{
                        selector: "bfv-messages",
                        template: "\n    <span [ngClass]=\"className\" *ngFor=\"let message of messages()\">{{message}}</span>\n  ",
                        styles: [
                            "\n      .invalid-feedback,\n      .valid-feedback {\n        display: block;\n      }\n    "
                        ]
                    },] },
        ];
        /** @nocollapse */
        MessagesComponent.ctorParameters = function () {
            return [
                { type: BootstrapVersion, decorators: [{ type: i0.Inject, args: [BOOTSTRAP_VERSION,] }] }
            ];
        };
        MessagesComponent.propDecorators = {
            messages: [{ type: i0.Input }]
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
            format: ( /**
             * @param {?} label
             * @return {?}
             */function (label) { return label + " is required"; })
        },
        {
            error: "pattern",
            format: ( /**
             * @param {?} label
             * @return {?}
             */function (label) { return label + " is invalid"; })
        },
        {
            error: "minlength",
            format: ( /**
             * @param {?} label
             * @param {?} error
             * @return {?}
             */function (label, error) {
                return label + " must be at least " + error.requiredLength + " characters";
            })
        },
        {
            error: "maxlength",
            format: ( /**
             * @param {?} label
             * @param {?} error
             * @return {?}
             */function (label, error) {
                return label + " must be no longer than " + error.requiredLength + " characters";
            })
        },
        {
            error: "requiredTrue",
            format: ( /**
             * @param {?} label
             * @param {?} error
             * @return {?}
             */function (label, error) { return label + " is required"; })
        },
        {
            error: "email",
            format: ( /**
             * @param {?} label
             * @param {?} error
             * @return {?}
             */function (label, error) { return "Invalid email address"; })
        },
        {
            error: "max",
            format: ( /**
             * @param {?} label
             * @param {?} error
             * @return {?}
             */function (label, error) { return label + " must be no greater than " + error.max; })
        },
        {
            error: "min",
            format: ( /**
             * @param {?} label
             * @param {?} error
             * @return {?}
             */function (label, error) { return label + " must be no less than " + error.min; })
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
            this.errorMessages = customErrorMessages.reduce(( /**
             * @param {?} acc
             * @param {?} cur
             * @return {?}
             */function (acc, cur) { return acc.concat(cur); }), this.defaultErrors);
        }
        ErrorMessageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        ErrorMessageService.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: i0.Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
            ];
        };
        /** @nocollapse */ ErrorMessageService.ngInjectableDef = i0.defineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(i0.inject(CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
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
            this.messages = ( /**
             * @return {?}
             */function () { return _this.getMessages(); });
        }
        Object.defineProperty(FormGroupComponent.prototype, "hasErrors", {
            get: /**
             * @return {?}
             */ function () {
                return (this.FormControlNames.some(( /**
                 * @param {?} c
                 * @return {?}
                 */function (c) { return !c.valid && c.dirty && c.touched; })) &&
                    !this.validationDisabled);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "hasSuccess", {
            get: /**
             * @return {?}
             */ function () {
                return (!this.FormControlNames.some(( /**
                 * @param {?} c
                 * @return {?}
                 */function (c) { return !c.valid; })) &&
                    this.FormControlNames.some(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return c.dirty && c.touched; })) &&
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
             */ function () {
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
             */ function () {
                return this.FormControlNames.some(( /**
                 * @param {?} c
                 * @return {?}
                 */function (c) { return c.dirty && c.touched; }));
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
                var names = this.FormControlNames.map(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return f.name; }));
                this.FormControlNames.filter(( /**
                 * @param {?} c
                 * @param {?} i
                 * @return {?}
                 */function (c, i) {
                    return !c.valid &&
                        !!c.errors &&
                        // filter out FormControlNames that share the same name - usually for radio buttons
                        names.indexOf(c.name) === i;
                })).forEach(( /**
                 * @param {?} control
                 * @return {?}
                 */function (control) {
                    Object.keys(control.errors).forEach(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) {
                        /** @type {?} */
                        var error = _this.errorMessages.find(( /**
                         * @param {?} err
                         * @return {?}
                         */function (err) { return err.error === key; }));
                        if (!error) {
                            return;
                        }
                        messages.push(error.format(_this.label, control.errors[key]));
                    }));
                }));
                return messages;
            };
        FormGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable:component-selector
                        selector: ".form-group",
                        template: "\n    <ng-content></ng-content>\n    <bfv-messages *ngIf=\"!messagesBlock\" [messages]=\"messages\"></bfv-messages>\n  "
                    },] },
        ];
        /** @nocollapse */
        FormGroupComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: ErrorMessageService }
            ];
        };
        FormGroupComponent.propDecorators = {
            FormControlNames: [{ type: i0.ContentChildren, args: [forms.FormControlName,] }],
            customErrorMessages: [{ type: i0.Input }],
            validationDisabled: [{ type: i0.Input }],
            hasErrors: [{ type: i0.HostBinding, args: ["class.has-error",] }],
            hasSuccess: [{ type: i0.HostBinding, args: ["class.has-success",] }],
            messagesBlock: [{ type: i0.ContentChild, args: [MessagesComponent,] }]
        };
        return FormGroupComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
        return __spread(( /** @type {?} */(parent.path)), [name]);
    }
    var FormControlDirective = /** @class */ (function () {
        function FormControlDirective(parent, bootstrapVersion) {
            this.parent = parent;
            this.bootstrapVersion = bootstrapVersion;
        }
        Object.defineProperty(FormControlDirective.prototype, "validClass", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
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
             */ function () {
                return controlPath(this.formControlName, this.parent);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "control", {
            get: /**
             * @return {?}
             */ function () {
                return this.formDirective && this.formDirective.getControl(this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "formDirective", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.formDirective : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "bootstrapFour", {
            get: /**
             * @return {?}
             */ function () {
                return this.bootstrapVersion === BootstrapVersion.Four;
            },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.decorators = [
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: ".form-control,.form-check-input,.custom-control-input"
                    },] },
        ];
        /** @nocollapse */
        FormControlDirective.ctorParameters = function () {
            return [
                { type: forms.ControlContainer, decorators: [{ type: i0.Optional }, { type: i0.Host }, { type: i0.SkipSelf }] },
                { type: BootstrapVersion, decorators: [{ type: i0.Inject, args: [BOOTSTRAP_VERSION,] }] }
            ];
        };
        FormControlDirective.propDecorators = {
            formControlName: [{ type: i0.Input }],
            formControl: [{ type: i0.Input }],
            validClass: [{ type: i0.HostBinding, args: ["class.is-valid",] }],
            invalidClass: [{ type: i0.HostBinding, args: ["class.is-invalid",] }]
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
                if (userOptions === void 0) {
                    userOptions = {
                        bootstrapVersion: BootstrapVersion.Four
                    };
                }
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
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.FormValidationDirective = FormValidationDirective;
    exports.MessagesComponent = MessagesComponent;
    exports.FormGroupComponent = FormGroupComponent;
    exports.BootstrapVersion = BootstrapVersion;
    exports.NgBootstrapFormValidationModule = NgBootstrapFormValidationModule;
    exports.CUSTOM_ERROR_MESSAGES = CUSTOM_ERROR_MESSAGES;
    exports.BOOTSTRAP_VERSION = BOOTSTRAP_VERSION;
    exports.ɵb = FormControlDirective;
    exports.ɵa = ErrorMessageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL0RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvRW51bXMvQm9vdHN0cmFwVmVyc2lvbi50cyIsIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvVG9rZW5zL3Rva2Vucy50cyIsIm5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi9saWIvQ29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQudHMiLCJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL2RlZmF1bHQtZXJyb3JzLnRzIiwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9TZXJ2aWNlcy9lcnJvci1tZXNzYWdlLnNlcnZpY2UudHMiLCJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL0NvbXBvbmVudHMvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uL2xpYi9EaXJlY3RpdmVzL2Zvcm0tY29udHJvbC5kaXJlY3RpdmUudHMiLCJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vbGliL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUFycmF5LFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJbZm9ybUdyb3VwXVwiLFxuICBleHBvcnRBczogJ25nQm9vdHN0cmFwRm9ybVZhbGlkYXRvcidcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpXG4gIHZhbGlkU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcihcInN1Ym1pdFwiKVxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWRBbmREaXJ0eSh0aGlzLmZvcm1Hcm91cCk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkU3VibWl0LmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWRBbmREaXJ0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5jb250cm9scykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgdGhpcy5tYXJrQXNUb3VjaGVkQW5kRGlydHkoY29udHJvbC5jb250cm9sc1trZXldKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0FzVG91Y2hlZEFuZERpcnR5KGMpKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCAmJiBjb250cm9sLmVuYWJsZWQpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBCb290c3RyYXBWZXJzaW9uIHtcbiAgVGhyZWUsXG4gIEZvdXJcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi4vRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL01vZGVscy9lcnJvci1tZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fRVJST1JfTUVTU0FHRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48RXJyb3JNZXNzYWdlW10+KFxuICBcIm5nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24gY3VzdG9tIGVycm9yIG1lc3NhZ2VzXCJcbik7XG5cbmV4cG9ydCBjb25zdCBCT09UU1RSQVBfVkVSU0lPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxCb290c3RyYXBWZXJzaW9uPihcbiAgXCJuZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uIG1vZHVsZSBvcHRpb25zXCJcbik7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYmZ2LW1lc3NhZ2VzXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMoKVwiPnt7bWVzc2FnZX19PC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaW52YWxpZC1mZWVkYmFjayxcbiAgICAgIC52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtZXNzYWdlcyA9ICgpID0+IFtdO1xuXG4gIGdldCBjbGFzc05hbWUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmJvb3RzdHJhcFZlcnNpb24pIHtcbiAgICAgIGNhc2UgQm9vdHN0cmFwVmVyc2lvbi5UaHJlZTpcbiAgICAgICAgcmV0dXJuIFwiaGVscC1ibG9ja1wiO1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLkZvdXI6XG4gICAgICAgIHJldHVybiBcImludmFsaWQtZmVlZGJhY2tcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIiwiaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vTW9kZWxzL2Vycm9yLW1lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JTOiBFcnJvck1lc3NhZ2VbXSA9IFtcbiAge1xuICAgIGVycm9yOiBcInJlcXVpcmVkXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJwYXR0ZXJuXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgaW52YWxpZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pbmxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJtYXhsZW5ndGhcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+XG4gICAgICBgJHtsYWJlbH0gbXVzdCBiZSBubyBsb25nZXIgdGhhbiAke2Vycm9yLnJlcXVpcmVkTGVuZ3RofSBjaGFyYWN0ZXJzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRUcnVlXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJlbWFpbFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYEludmFsaWQgZW1haWwgYWRkcmVzc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuICR7ZXJyb3IubWF4fWBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pblwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gbGVzcyB0aGFuICR7ZXJyb3IubWlufWBcbiAgfVxuXTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VSUk9SUyB9IGZyb20gXCIuLi9kZWZhdWx0LWVycm9yc1wiO1xuaW1wb3J0IHsgQ1VTVE9NX0VSUk9SX01FU1NBR0VTIH0gZnJvbSBcIi4uL1Rva2Vucy90b2tlbnNcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRFcnJvcnMgPSBERUZBVUxUX0VSUk9SUztcblxuICBwdWJsaWMgZXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDVVNUT01fRVJST1JfTUVTU0FHRVMpIHB1YmxpYyBjdXN0b21FcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXVtdXG4gICkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IGN1c3RvbUVycm9yTWVzc2FnZXMucmVkdWNlKFxuICAgICAgKGFjYywgY3VyKSA9PiBhY2MuY29uY2F0KGN1ciksXG4gICAgICB0aGlzLmRlZmF1bHRFcnJvcnNcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vU2VydmljZXMvZXJyb3ItbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBcIi5mb3JtLWdyb3VwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxiZnYtbWVzc2FnZXMgKm5nSWY9XCIhbWVzc2FnZXNCbG9ja1wiIFttZXNzYWdlc109XCJtZXNzYWdlc1wiPjwvYmZ2LW1lc3NhZ2VzPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oRm9ybUNvbnRyb2xOYW1lKVxuICBGb3JtQ29udHJvbE5hbWVzOiBRdWVyeUxpc3Q8Rm9ybUNvbnRyb2xOYW1lPjtcblxuICBASW5wdXQoKVxuICBjdXN0b21FcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHZhbGlkYXRpb25EaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmhhcy1lcnJvclwiKVxuICBnZXQgaGFzRXJyb3JzKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+ICFjLnZhbGlkICYmIGMuZGlydHkgJiYgYy50b3VjaGVkKSAmJlxuICAgICAgIXRoaXMudmFsaWRhdGlvbkRpc2FibGVkXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmhhcy1zdWNjZXNzXCIpXG4gIGdldCBoYXNTdWNjZXNzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiAhYy52YWxpZCkgJiZcbiAgICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5zb21lKGMgPT4gYy5kaXJ0eSAmJiBjLnRvdWNoZWQpICYmXG4gICAgICAhdGhpcy52YWxpZGF0aW9uRGlzYWJsZWRcbiAgICApO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChNZXNzYWdlc0NvbXBvbmVudClcbiAgcHVibGljIG1lc3NhZ2VzQmxvY2s6IE1lc3NhZ2VzQ29tcG9uZW50O1xuXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW107XG5cbiAgcHVibGljIG1lc3NhZ2VzID0gKCkgPT4gdGhpcy5nZXRNZXNzYWdlcygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VTZXJ2aWNlOiBFcnJvck1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZXNCbG9jaykge1xuICAgICAgdGhpcy5tZXNzYWdlc0Jsb2NrLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSB0aGlzLmVycm9yTWVzc2FnZVNlcnZpY2UuZXJyb3JNZXNzYWdlc1xuICAgICAgLmNvbmNhdCh0aGlzLmN1c3RvbUVycm9yTWVzc2FnZXMpXG4gICAgICAucmV2ZXJzZSgpO1xuICB9XG5cbiAgZ2V0IGxhYmVsKCkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtcbiAgICByZXR1cm4gbGFiZWwgJiYgbGFiZWwudGV4dENvbnRlbnQgPyBsYWJlbC50ZXh0Q29udGVudC50cmltKCkgOiBcIlRoaXMgZmllbGRcIjtcbiAgfVxuXG4gIGdldCBpc0RpcnR5QW5kVG91Y2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiBjLmRpcnR5ICYmIGMudG91Y2hlZCk7XG4gIH1cblxuICBwcml2YXRlIGdldE1lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIGlmICghdGhpcy5pc0RpcnR5QW5kVG91Y2hlZCB8fCB0aGlzLnZhbGlkYXRpb25EaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gdGhpcy5Gb3JtQ29udHJvbE5hbWVzLm1hcChmID0+IGYubmFtZSk7XG5cbiAgICB0aGlzLkZvcm1Db250cm9sTmFtZXMuZmlsdGVyKFxuICAgICAgKGMsIGkpID0+XG4gICAgICAgICFjLnZhbGlkICYmXG4gICAgICAgICEhYy5lcnJvcnMgJiZcbiAgICAgICAgLy8gZmlsdGVyIG91dCBGb3JtQ29udHJvbE5hbWVzIHRoYXQgc2hhcmUgdGhlIHNhbWUgbmFtZSAtIHVzdWFsbHkgZm9yIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgbmFtZXMuaW5kZXhPZihjLm5hbWUpID09PSBpXG4gICAgKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5lcnJvcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmVycm9yTWVzc2FnZXMuZmluZChlcnIgPT4gZXJyLmVycm9yID09PSBrZXkpO1xuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goZXJyb3IuZm9ybWF0KHRoaXMubGFiZWwsIGNvbnRyb2wuZXJyb3JzW2tleV0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgSG9zdCxcbiAgU2tpcFNlbGYsXG4gIEluamVjdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi4vRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbFBhdGgobmFtZTogc3RyaW5nLCBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIpOiBzdHJpbmdbXSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ub24tbnVsbC1hc3NlcnRpb25cbiAgcmV0dXJuIFsuLi5wYXJlbnQucGF0aCEsIG5hbWVdO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCIuZm9ybS1jb250cm9sLC5mb3JtLWNoZWNrLWlucHV0LC5jdXN0b20tY29udHJvbC1pbnB1dFwiXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGZvcm1Db250cm9sOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXMtdmFsaWRcIilcbiAgZ2V0IHZhbGlkQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYm9vdHN0cmFwRm91ciAmJlxuICAgICAgdGhpcy5jb250cm9sLnZhbGlkICYmXG4gICAgICAodGhpcy5jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5jb250cm9sLmRpcnR5KVxuICAgICk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pcy1pbnZhbGlkXCIpXG4gIGdldCBpbnZhbGlkQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYm9vdHN0cmFwRm91ciAmJlxuICAgICAgdGhpcy5jb250cm9sLmludmFsaWQgJiZcbiAgICAgIHRoaXMuY29udHJvbC50b3VjaGVkICYmXG4gICAgICB0aGlzLmNvbnRyb2wuZGlydHlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMuZm9ybUNvbnRyb2xOYW1lLCB0aGlzLnBhcmVudCk7XG4gIH1cblxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZSAmJiB0aGlzLmZvcm1EaXJlY3RpdmUuZ2V0Q29udHJvbCh0aGlzKTtcbiAgfVxuXG4gIGdldCBmb3JtRGlyZWN0aXZlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgYm9vdHN0cmFwRm91cigpIHtcbiAgICByZXR1cm4gdGhpcy5ib290c3RyYXBWZXJzaW9uID09PSBCb290c3RyYXBWZXJzaW9uLkZvdXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyB0aGlzIHZhbHVlIG1pZ2h0IGJlIG51bGwsIGJ1dCB3ZSB1bmlvbiB0eXBlIGl0IGFzIHN1Y2ggdW50aWxcbiAgICAvLyB0aGlzIGlzc3VlIGlzIHJlc29sdmVkOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yNTU0NFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIEBTa2lwU2VsZigpXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXG4gICAgQEluamVjdChCT09UU1RSQVBfVkVSU0lPTikgcHJpdmF0ZSBib290c3RyYXBWZXJzaW9uOiBCb290c3RyYXBWZXJzaW9uXG4gICkge31cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlIH0gZnJvbSBcIi4vRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vU2VydmljZXMvZXJyb3ItbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDVVNUT01fRVJST1JfTUVTU0FHRVMsIEJPT1RTVFJBUF9WRVJTSU9OIH0gZnJvbSBcIi4vVG9rZW5zL3Rva2Vuc1wiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuL0VudW1zL0Jvb3RzdHJhcFZlcnNpb25cIjtcbmltcG9ydCB7IEZvcm1Hcm91cENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZU9wdGlvbnMgfSBmcm9tIFwiLi9Nb2RlbHMvTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZU9wdGlvbnNcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSBcIi4vRGlyZWN0aXZlcy9mb3JtLWNvbnRyb2wuZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSxcbiAgICBGb3JtR3JvdXBDb21wb25lbnQsXG4gICAgTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRm9ybUNvbnRyb2xEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlLFxuICAgIEZvcm1Hcm91cENvbXBvbmVudCxcbiAgICBNZXNzYWdlc0NvbXBvbmVudCxcbiAgICBGb3JtQ29udHJvbERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICB1c2VyT3B0aW9uczogTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZU9wdGlvbnMgPSB7XG4gICAgICBib290c3RyYXBWZXJzaW9uOiBCb290c3RyYXBWZXJzaW9uLkZvdXJcbiAgICB9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ1VTVE9NX0VSUk9SX01FU1NBR0VTLFxuICAgICAgICAgIHVzZVZhbHVlOiB1c2VyT3B0aW9ucy5jdXN0b21FcnJvck1lc3NhZ2VzIHx8IFtdLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBCT09UU1RSQVBfVkVSU0lPTixcbiAgICAgICAgICB1c2VWYWx1ZTogdXNlck9wdGlvbnMuYm9vdHN0cmFwVmVyc2lvblxuICAgICAgICB9LFxuICAgICAgICBFcnJvck1lc3NhZ2VTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkZvcm1Hcm91cCIsIkZvcm1BcnJheSIsIkZvcm1Db250cm9sIiwiRGlyZWN0aXZlIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJJbmplY3Rpb25Ub2tlbiIsIkNvbXBvbmVudCIsIkluamVjdCIsIkluamVjdGFibGUiLCJFbGVtZW50UmVmIiwiQ29udGVudENoaWxkcmVuIiwiRm9ybUNvbnRyb2xOYW1lIiwiSG9zdEJpbmRpbmciLCJDb250ZW50Q2hpbGQiLCJDb250cm9sQ29udGFpbmVyIiwiT3B0aW9uYWwiLCJIb3N0IiwiU2tpcFNlbGYiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBY0E7WUFTRSxnQkFBVyxHQUFHLElBQUlBLGVBQVksRUFBTyxDQUFDO1NBdUJ2Qzs7OztRQXBCQywwQ0FBUTs7O1lBRFI7Z0JBRUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENB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