/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var DEFAULT_ERRORS = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lcnJvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHQtZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGNBQWMsR0FBbUI7SUFDNUM7UUFDRSxLQUFLLEVBQUUsVUFBVTtRQUNqQixNQUFNOzs7O1FBQUUsVUFBQSxLQUFLLElBQUksT0FBRyxLQUFLLGlCQUFjLEVBQXRCLENBQXNCLENBQUE7S0FDeEM7SUFDRDtRQUNFLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU07Ozs7UUFBRSxVQUFBLEtBQUssSUFBSSxPQUFHLEtBQUssZ0JBQWEsRUFBckIsQ0FBcUIsQ0FBQTtLQUN2QztJQUNEO1FBQ0UsS0FBSyxFQUFFLFdBQVc7UUFDbEIsTUFBTTs7Ozs7UUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQ25CLE9BQUcsS0FBSywwQkFBcUIsS0FBSyxDQUFDLGNBQWMsZ0JBQWE7UUFBOUQsQ0FBOEQsQ0FBQTtLQUNqRTtJQUNEO1FBQ0UsS0FBSyxFQUFFLFdBQVc7UUFDbEIsTUFBTTs7Ozs7UUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQ25CLE9BQUcsS0FBSyxnQ0FBMkIsS0FBSyxDQUFDLGNBQWMsZ0JBQWE7UUFBcEUsQ0FBb0UsQ0FBQTtLQUN2RTtJQUNEO1FBQ0UsS0FBSyxFQUFFLGNBQWM7UUFDckIsTUFBTTs7Ozs7UUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBRyxLQUFLLGlCQUFjLEVBQXRCLENBQXNCLENBQUE7S0FDakQ7SUFDRDtRQUNFLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTTs7Ozs7UUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBQSx1QkFBdUIsRUFBdkIsQ0FBdUIsQ0FBQTtLQUNsRDtJQUNEO1FBQ0UsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNOzs7OztRQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFHLEtBQUssaUNBQTRCLEtBQUssQ0FBQyxHQUFLLEVBQS9DLENBQStDLENBQUE7S0FDMUU7SUFDRDtRQUNFLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTTs7Ozs7UUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBRyxLQUFLLDhCQUF5QixLQUFLLENBQUMsR0FBSyxFQUE1QyxDQUE0QyxDQUFBO0tBQ3ZFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FUlJPUlM6IEVycm9yTWVzc2FnZVtdID0gW1xuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRcIixcbiAgICBmb3JtYXQ6IGxhYmVsID0+IGAke2xhYmVsfSBpcyByZXF1aXJlZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcInBhdHRlcm5cIixcbiAgICBmb3JtYXQ6IGxhYmVsID0+IGAke2xhYmVsfSBpcyBpbnZhbGlkYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwibWlubGVuZ3RoXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PlxuICAgICAgYCR7bGFiZWx9IG11c3QgYmUgYXQgbGVhc3QgJHtlcnJvci5yZXF1aXJlZExlbmd0aH0gY2hhcmFjdGVyc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heGxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIG5vIGxvbmdlciB0aGFuICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJyZXF1aXJlZFRydWVcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+IGAke2xhYmVsfSBpcyByZXF1aXJlZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcImVtYWlsXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgSW52YWxpZCBlbWFpbCBhZGRyZXNzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwibWF4XCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gbXVzdCBiZSBubyBncmVhdGVyIHRoYW4gJHtlcnJvci5tYXh9YFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwibWluXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gbXVzdCBiZSBubyBsZXNzIHRoYW4gJHtlcnJvci5taW59YFxuICB9XG5dO1xuIl19