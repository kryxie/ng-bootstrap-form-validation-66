/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const DEFAULT_ERRORS = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lcnJvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHQtZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGNBQWMsR0FBbUI7SUFDNUM7UUFDRSxLQUFLLEVBQUUsVUFBVTtRQUNqQixNQUFNOzs7O1FBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssY0FBYyxDQUFBO0tBQ3hDO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNOzs7O1FBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFBO0tBQ3ZDO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixNQUFNOzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3ZCLEdBQUcsS0FBSyxxQkFBcUIsS0FBSyxDQUFDLGNBQWMsYUFBYSxDQUFBO0tBQ2pFO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixNQUFNOzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3ZCLEdBQUcsS0FBSywyQkFBMkIsS0FBSyxDQUFDLGNBQWMsYUFBYSxDQUFBO0tBQ3ZFO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsY0FBYztRQUNyQixNQUFNOzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLGNBQWMsQ0FBQTtLQUNqRDtJQUNEO1FBQ0UsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNOzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsdUJBQXVCLENBQUE7S0FDbEQ7SUFDRDtRQUNFLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTTs7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyw0QkFBNEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO0tBQzFFO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU07Ozs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUsseUJBQXlCLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtLQUN2RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vTW9kZWxzL2Vycm9yLW1lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JTOiBFcnJvck1lc3NhZ2VbXSA9IFtcbiAge1xuICAgIGVycm9yOiBcInJlcXVpcmVkXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJwYXR0ZXJuXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgaW52YWxpZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pbmxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJtYXhsZW5ndGhcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+XG4gICAgICBgJHtsYWJlbH0gbXVzdCBiZSBubyBsb25nZXIgdGhhbiAke2Vycm9yLnJlcXVpcmVkTGVuZ3RofSBjaGFyYWN0ZXJzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRUcnVlXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJlbWFpbFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYEludmFsaWQgZW1haWwgYWRkcmVzc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuICR7ZXJyb3IubWF4fWBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pblwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gbGVzcyB0aGFuICR7ZXJyb3IubWlufWBcbiAgfVxuXTtcbiJdfQ==