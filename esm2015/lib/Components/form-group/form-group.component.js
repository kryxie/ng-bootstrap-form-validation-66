/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ContentChild, ElementRef, HostBinding, Input, QueryList } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessageService } from "../../Services/error-message.service";
import { MessagesComponent } from "../messages/messages.component";
export class FormGroupComponent {
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
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.FormControlNames;
    /** @type {?} */
    FormGroupComponent.prototype.customErrorMessages;
    /** @type {?} */
    FormGroupComponent.prototype.validationDisabled;
    /** @type {?} */
    FormGroupComponent.prototype.messagesBlock;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype.errorMessages;
    /** @type {?} */
    FormGroupComponent.prototype.messages;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype.errorMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFXbkUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFrQzdCLFlBQ1UsS0FBaUIsRUFDakIsbUJBQXdDO1FBRHhDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQS9CbEQsd0JBQW1CLEdBQW1CLEVBQUUsQ0FBQztRQUd6Qyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUF3QnBCLGFBQVE7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQztJQUt4QyxDQUFDOzs7O0lBM0JKLElBQ0ksU0FBUztRQUNYLE9BQU8sQ0FDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBQztZQUNqRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FDekIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUNJLFVBQVU7UUFDWixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUM7WUFDckQsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQ3pCLENBQUM7SUFDSixDQUFDOzs7O0lBY0Qsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhO2FBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7YUFDaEMsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLOztjQUNELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdELE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFTyxXQUFXOztjQUNYLFFBQVEsR0FBRyxFQUFFO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3RELE9BQU8sUUFBUSxDQUFDO1NBQ2pCOztjQUVLLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQztRQUVwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTTs7Ozs7UUFDMUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDUCxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQ1YsbUZBQW1GO1lBQ25GLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDOUIsQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFOztzQkFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztnQkFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFDO2dCQUMvRCxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLE9BQU87aUJBQ1I7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQTdGRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7OztHQUdUO2FBQ0Y7Ozs7WUFuQkMsVUFBVTtZQVFILG1CQUFtQjs7OytCQWF6QixlQUFlLFNBQUMsZUFBZTtrQ0FHL0IsS0FBSztpQ0FHTCxLQUFLO3dCQUdMLFdBQVcsU0FBQyxpQkFBaUI7eUJBUTdCLFdBQVcsU0FBQyxtQkFBbUI7NEJBUy9CLFlBQVksU0FBQyxpQkFBaUI7Ozs7SUExQi9CLDhDQUM2Qzs7SUFFN0MsaURBQ3lDOztJQUV6QyxnREFDMkI7O0lBbUIzQiwyQ0FDd0M7Ozs7O0lBRXhDLDJDQUFzQzs7SUFFdEMsc0NBQTJDOzs7OztJQUd6QyxtQ0FBeUI7Ozs7O0lBQ3pCLGlEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9TZXJ2aWNlcy9lcnJvci1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4uL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL01vZGVscy9lcnJvci1tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwiLmZvcm0tZ3JvdXBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGJmdi1tZXNzYWdlcyAqbmdJZj1cIiFtZXNzYWdlc0Jsb2NrXCIgW21lc3NhZ2VzXT1cIm1lc3NhZ2VzXCI+PC9iZnYtbWVzc2FnZXM+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihGb3JtQ29udHJvbE5hbWUpXG4gIEZvcm1Db250cm9sTmFtZXM6IFF1ZXJ5TGlzdDxGb3JtQ29udHJvbE5hbWU+O1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbUVycm9yTWVzc2FnZXM6IEVycm9yTWVzc2FnZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgdmFsaWRhdGlvbkRpc2FibGVkID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGFzLWVycm9yXCIpXG4gIGdldCBoYXNFcnJvcnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5zb21lKGMgPT4gIWMudmFsaWQgJiYgYy5kaXJ0eSAmJiBjLnRvdWNoZWQpICYmXG4gICAgICAhdGhpcy52YWxpZGF0aW9uRGlzYWJsZWRcbiAgICApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGFzLXN1Y2Nlc3NcIilcbiAgZ2V0IGhhc1N1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+ICFjLnZhbGlkKSAmJlxuICAgICAgdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiBjLmRpcnR5ICYmIGMudG91Y2hlZCkgJiZcbiAgICAgICF0aGlzLnZhbGlkYXRpb25EaXNhYmxlZFxuICAgICk7XG4gIH1cblxuICBAQ29udGVudENoaWxkKE1lc3NhZ2VzQ29tcG9uZW50KVxuICBwdWJsaWMgbWVzc2FnZXNCbG9jazogTWVzc2FnZXNDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXTtcblxuICBwdWJsaWMgbWVzc2FnZXMgPSAoKSA9PiB0aGlzLmdldE1lc3NhZ2VzKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZVNlcnZpY2U6IEVycm9yTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlc0Jsb2NrKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzQmxvY2subWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5lcnJvck1lc3NhZ2VzXG4gICAgICAuY29uY2F0KHRoaXMuY3VzdG9tRXJyb3JNZXNzYWdlcylcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH1cblxuICBnZXQgbGFiZWwoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIHJldHVybiBsYWJlbCAmJiBsYWJlbC50ZXh0Q29udGVudCA/IGxhYmVsLnRleHRDb250ZW50LnRyaW0oKSA6IFwiVGhpcyBmaWVsZFwiO1xuICB9XG5cbiAgZ2V0IGlzRGlydHlBbmRUb3VjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+IGMuZGlydHkgJiYgYy50b3VjaGVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgaWYgKCF0aGlzLmlzRGlydHlBbmRUb3VjaGVkIHx8IHRoaXMudmFsaWRhdGlvbkRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLkZvcm1Db250cm9sTmFtZXMubWFwKGYgPT4gZi5uYW1lKTtcblxuICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5maWx0ZXIoXG4gICAgICAoYywgaSkgPT5cbiAgICAgICAgIWMudmFsaWQgJiZcbiAgICAgICAgISFjLmVycm9ycyAmJlxuICAgICAgICAvLyBmaWx0ZXIgb3V0IEZvcm1Db250cm9sTmFtZXMgdGhhdCBzaGFyZSB0aGUgc2FtZSBuYW1lIC0gdXN1YWxseSBmb3IgcmFkaW8gYnV0dG9uc1xuICAgICAgICBuYW1lcy5pbmRleE9mKGMubmFtZSkgPT09IGlcbiAgICApLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhjb250cm9sLmVycm9ycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuZXJyb3JNZXNzYWdlcy5maW5kKGVyciA9PiBlcnIuZXJyb3IgPT09IGtleSk7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMucHVzaChlcnJvci5mb3JtYXQodGhpcy5sYWJlbCwgY29udHJvbC5lcnJvcnNba2V5XSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cbn1cbiJdfQ==