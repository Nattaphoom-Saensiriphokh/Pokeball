(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/pokemon-app-master/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/pokemon-app-master/node_modules/@mui/material/SvgIcon/svgIconClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getSvgIconUtilityClass",
    ()=>getSvgIconUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getSvgIconUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiSvgIcon', slot);
}
const svgIconClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiSvgIcon', [
    'root',
    'colorPrimary',
    'colorSecondary',
    'colorAction',
    'colorError',
    'colorDisabled',
    'fontSizeInherit',
    'fontSizeSmall',
    'fontSizeMedium',
    'fontSizeLarge'
]);
const __TURBOPACK__default__export__ = svgIconClasses;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/SvgIcon/SvgIcon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/capitalize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$svgIconClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/SvgIcon/svgIconClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/transitions/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { color, fontSize, classes } = ownerState;
    const slots = {
        root: [
            'root',
            color !== 'inherit' && `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)}`,
            `fontSize${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fontSize)}`
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$svgIconClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSvgIconUtilityClass"], classes);
};
const SvgIconRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.color !== 'inherit' && styles[`color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.color)}`],
            styles[`fontSize${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.fontSize)}`]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'fill', {
            duration: (theme.vars ?? theme).transitions?.duration?.shorter
        }),
        variants: [
            {
                props: (props)=>!props.hasSvgAsChild,
                style: {
                    // the <svg> will define the property that has `currentColor`
                    // for example heroicons uses fill="none" and stroke="currentColor"
                    fill: 'currentColor'
                }
            },
            {
                props: {
                    fontSize: 'inherit'
                },
                style: {
                    fontSize: 'inherit'
                }
            },
            {
                props: {
                    fontSize: 'small'
                },
                style: {
                    fontSize: theme.typography?.pxToRem?.(20) || '1.25rem'
                }
            },
            {
                props: {
                    fontSize: 'medium'
                },
                style: {
                    fontSize: theme.typography?.pxToRem?.(24) || '1.5rem'
                }
            },
            {
                props: {
                    fontSize: 'large'
                },
                style: {
                    fontSize: theme.typography?.pxToRem?.(35) || '2.1875rem'
                }
            },
            // TODO v5 deprecate color prop, v6 remove for sx
            ...Object.entries((theme.vars ?? theme).palette).filter(([, value])=>value && value.main).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars ?? theme).palette?.[color]?.main
                    }
                })),
            {
                props: {
                    color: 'action'
                },
                style: {
                    color: (theme.vars ?? theme).palette?.action?.active
                }
            },
            {
                props: {
                    color: 'disabled'
                },
                style: {
                    color: (theme.vars ?? theme).palette?.action?.disabled
                }
            },
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: undefined
                }
            }
        ]
    })));
const SvgIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SvgIcon(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiSvgIcon'
    });
    const { children, className, color = 'inherit', component = 'svg', fontSize = 'medium', htmlColor, inheritViewBox = false, titleAccess, viewBox = '0 0 24 24', ...other } = props;
    const hasSvgAsChild = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children) && children.type === 'svg';
    const ownerState = {
        ...props,
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
    };
    const more = {};
    if (!inheritViewBox) {
        more.viewBox = viewBox;
    }
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(SvgIconRoot, {
        as: component,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? undefined : true,
        role: titleAccess ? 'img' : undefined,
        ref: ref,
        ...more,
        ...other,
        ...hasSvgAsChild && children.props,
        ownerState: ownerState,
        children: [
            hasSvgAsChild ? children.props.children : children,
            titleAccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                children: titleAccess
            }) : null
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? SvgIcon.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Node passed into the SVG element.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'action',
            'disabled',
            'primary',
            'secondary',
            'error',
            'info',
            'success',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */ fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'large',
            'medium',
            'small'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * Applies a color attribute to the SVG element.
   */ htmlColor: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */ inheritViewBox: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */ shapeRendering: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */ titleAccess: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */ viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
} : "TURBOPACK unreachable";
SvgIcon.muiName = 'SvgIcon';
const __TURBOPACK__default__export__ = SvgIcon;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createSvgIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$SvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/SvgIcon/SvgIcon.mjs [app-client] (ecmascript)");
/**
 * Private module reserved for @mui packages.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
function createSvgIcon(path, displayName) {
    function Component(props, ref) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$SvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            "data-testid": ("TURBOPACK compile-time truthy", 1) ? `${displayName}Icon` : "TURBOPACK unreachable",
            ref: ref,
            ...props,
            children: path
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Need to set `displayName` on the inner component for React.memo.
        // React prior to 16.14 ignores `displayName` on the wrapper.
        Component.displayName = `${displayName}Icon`;
    }
    Component.muiName = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$SvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].muiName;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](Component));
}
}),
"[project]/pokemon-app-master/node_modules/@mui/material/internal/svg-icons/Person.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs [app-client] (ecmascript)");
/**
 * @ignore - internal component.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person');
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Avatar/avatarClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAvatarUtilityClass",
    ()=>getAvatarUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getAvatarUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAvatar', slot);
}
const avatarClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAvatar', [
    'root',
    'colorDefault',
    'circular',
    'rounded',
    'square',
    'img',
    'fallback'
]);
const __TURBOPACK__default__export__ = avatarClasses;
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/isHostComponent/isHostComponent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */ function isHostComponent(element) {
    return typeof element === 'string';
}
const __TURBOPACK__default__export__ = isHostComponent;
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/appendOwnerState/appendOwnerState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$isHostComponent$2f$isHostComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/isHostComponent/isHostComponent.mjs [app-client] (ecmascript)");
;
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */ /**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */ function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$isHostComponent$2f$isHostComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elementType)) {
        return otherProps;
    }
    return {
        ...otherProps,
        ownerState: {
            ...otherProps.ownerState,
            ...ownerState
        }
    };
}
const __TURBOPACK__default__export__ = appendOwnerState;
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */ function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
        return componentProps(ownerState, slotState);
    }
    return componentProps;
}
const __TURBOPACK__default__export__ = resolveComponentProps;
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/isEventHandler/isEventHandler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Brought from [Base UI](https://github.com/mui/base-ui/blob/master/packages/react/src/merge-props/mergeProps.ts#L119)
// Use it directly from Base UI once it's a package dependency.
__turbopack_context__.s([
    "default",
    ()=>isEventHandler
]);
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const thirdCharCode = key.charCodeAt(2);
    return key[0] === 'o' && key[1] === 'n' && thirdCharCode >= 65 /* A */  && thirdCharCode <= 90 /* Z */  && typeof value === 'function';
}
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$isEventHandler$2f$isEventHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/isEventHandler/isEventHandler.mjs [app-client] (ecmascript)");
;
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 */ function extractEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    for (const prop of Object.keys(object)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$isEventHandler$2f$isEventHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prop, object[prop])) {
            result[prop] = object[prop];
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = extractEventHandlers;
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */ function omitEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>!(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = omitEventHandlers;
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$extractEventHandlers$2f$extractEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$omitEventHandlers$2f$omitEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */ function mergeSlotProps(parameters) {
    const { getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className } = parameters;
    if (!getSlotProps) {
        // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
        // so we can simply merge all the props without having to worry about extracting event handlers.
        const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
        const mergedStyle = {
            ...additionalProps?.style,
            ...externalForwardedProps?.style,
            ...externalSlotProps?.style
        };
        const props = {
            ...additionalProps,
            ...externalForwardedProps,
            ...externalSlotProps
        };
        if (joinedClasses.length > 0) {
            props.className = joinedClasses;
        }
        if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
        }
        return {
            props,
            internalRef: undefined
        };
    }
    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.
    const eventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$extractEventHandlers$2f$extractEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...externalForwardedProps,
        ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$omitEventHandlers$2f$omitEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(externalSlotProps);
    const otherPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$omitEventHandlers$2f$omitEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);
    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
        ...internalSlotProps?.style,
        ...additionalProps?.style,
        ...externalForwardedProps?.style,
        ...externalSlotProps?.style
    };
    const props = {
        ...internalSlotProps,
        ...additionalProps,
        ...otherPropsWithoutEventHandlers,
        ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
        props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
    }
    return {
        props,
        internalRef: internalSlotProps.ref
    };
}
const __TURBOPACK__default__export__ = mergeSlotProps;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/utils/useSlot.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/useForkRef/useForkRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$appendOwnerState$2f$appendOwnerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/appendOwnerState/appendOwnerState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$resolveComponentProps$2f$resolveComponentProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$mergeSlotProps$2f$mergeSlotProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function useSlot(/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */ name, parameters) {
    const { className, elementType: initialElementType, ownerState, externalForwardedProps, internalForwardedProps, shouldForwardComponentProp = false, ...useSlotPropsParams } = parameters;
    const { component: rootComponent, slots = {
        [name]: undefined
    }, slotProps = {
        [name]: undefined
    }, ...other } = externalForwardedProps;
    const elementType = slots[name] || initialElementType;
    // `slotProps[name]` can be a callback that receives the component's ownerState.
    // `resolvedComponentsProps` is always a plain object.
    const resolvedComponentsProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$resolveComponentProps$2f$resolveComponentProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slotProps[name], ownerState);
    const { props: { component: slotComponent, ...mergedProps }, internalRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$mergeSlotProps$2f$mergeSlotProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        className,
        ...useSlotPropsParams,
        externalForwardedProps: name === 'root' ? other : undefined,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(internalRef, resolvedComponentsProps?.ref, parameters.ref);
    const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$appendOwnerState$2f$appendOwnerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elementType, {
        ...name === 'root' && !rootComponent && !slots[name] && internalForwardedProps,
        ...name !== 'root' && !slots[name] && internalForwardedProps,
        ...mergedProps,
        ...LeafComponent && !shouldForwardComponentProp && {
            as: LeafComponent
        },
        ...LeafComponent && shouldForwardComponentProp && {
            component: LeafComponent
        },
        ref
    }, ownerState);
    return [
        elementType,
        props
    ];
}
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Avatar/Avatar.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$internal$2f$svg$2d$icons$2f$Person$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/internal/svg-icons/Person.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$avatarClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Avatar/avatarClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useSlot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/useSlot.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes, variant, colorDefault } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            colorDefault && 'colorDefault'
        ],
        img: [
            'img'
        ],
        fallback: [
            'fallback'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$avatarClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvatarUtilityClass"], classes);
};
const AvatarRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            ownerState.colorDefault && styles.colorDefault
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none',
        variants: [
            {
                props: {
                    variant: 'rounded'
                },
                style: {
                    borderRadius: (theme.vars || theme).shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'square'
                },
                style: {
                    borderRadius: 0
                }
            },
            {
                props: {
                    colorDefault: true
                },
                style: {
                    color: (theme.vars || theme).palette.background.default,
                    '@media (forced-colors: active)': {
                        boxSizing: 'border-box',
                        border: '1px solid ButtonBorder'
                    },
                    ...theme.vars ? {
                        backgroundColor: theme.vars.palette.Avatar.defaultBg
                    } : {
                        backgroundColor: theme.palette.grey[400],
                        ...theme.applyStyles('dark', {
                            backgroundColor: theme.palette.grey[600]
                        })
                    }
                }
            }
        ]
    })));
const AvatarImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('img', {
    name: 'MuiAvatar',
    slot: 'Img'
})({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // Handle non-square image.
    objectFit: 'cover',
    // Hide alt text.
    color: 'transparent',
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000
});
const AvatarFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$internal$2f$svg$2d$icons$2f$Person$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAvatar',
    slot: 'Fallback'
})({
    width: '75%',
    height: '75%'
});
function useLoaded(src, srcSet, crossOrigin, referrerPolicy) {
    const [loaded, setLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLoaded.useEffect": ()=>{
            if (!src && !srcSet) {
                return undefined;
            }
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLoaded(false);
            let active = true;
            const image = new Image();
            image.onload = ({
                "useLoaded.useEffect": ()=>{
                    if (!active) {
                        return;
                    }
                    setLoaded('loaded');
                }
            })["useLoaded.useEffect"];
            image.onerror = ({
                "useLoaded.useEffect": ()=>{
                    if (!active) {
                        return;
                    }
                    setLoaded('error');
                }
            })["useLoaded.useEffect"];
            image.crossOrigin = crossOrigin;
            image.referrerPolicy = referrerPolicy;
            image.src = src;
            if (srcSet) {
                image.srcset = srcSet;
            }
            return ({
                "useLoaded.useEffect": ()=>{
                    active = false;
                }
            })["useLoaded.useEffect"];
        }
    }["useLoaded.useEffect"], [
        crossOrigin,
        referrerPolicy,
        src,
        srcSet
    ]);
    return loaded;
}
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Avatar(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiAvatar'
    });
    const { alt, children: childrenProp, className, component = 'div', slots = {}, slotProps = {}, sizes, src, srcSet, variant = 'circular', ...other } = props;
    let children = null;
    const ownerState = {
        ...props,
        component,
        variant
    };
    const { crossOrigin, referrerPolicy } = (typeof slotProps.img === 'function' ? slotProps.img(ownerState) : slotProps.img) ?? {};
    // Use a hook instead of onError on the img element to support server-side rendering.
    const loaded = useLoaded(src, srcSet, crossOrigin, referrerPolicy);
    const hasImg = src || srcSet;
    const hasImgNotFailing = hasImg && loaded !== 'error';
    ownerState.colorDefault = !hasImgNotFailing;
    // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
    delete ownerState.ownerState;
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps
    };
    const [RootSlot, rootSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useSlot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('root', {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        elementType: AvatarRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            component,
            ...other
        },
        ownerState
    });
    const [ImgSlot, imgSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useSlot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('img', {
        className: classes.img,
        elementType: AvatarImg,
        externalForwardedProps,
        additionalProps: {
            alt,
            src,
            srcSet,
            sizes
        },
        ownerState
    });
    const [FallbackSlot, fallbackSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useSlot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fallback', {
        className: classes.fallback,
        elementType: AvatarFallback,
        externalForwardedProps,
        shouldForwardComponentProp: true,
        ownerState
    });
    if (hasImgNotFailing) {
        children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ImgSlot, {
            ...imgSlotProps
        });
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
    } else if (!!childrenProp || childrenProp === 0) {
        children = childrenProp;
    } else if (hasImg && alt) {
        children = alt[0];
    } else {
        children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FallbackSlot, {
            ...fallbackSlotProps
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RootSlot, {
        ...rootSlotProps,
        children: children
    });
});
("TURBOPACK compile-time truthy", 1) ? Avatar.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */ alt: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The `sizes` attribute for the `img` element.
   */ sizes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The props used for each slot inside.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        fallback: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        img: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        root: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * The components used for each slot inside.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        fallback: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        root: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The `src` attribute for the `img` element.
   */ src: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */ srcSet: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The shape of the avatar.
   * @default 'circular'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'circular',
            'rounded',
            'square'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Avatar/Avatar.mjs [app-client] (ecmascript) <export default as Avatar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Avatar/Avatar.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript) <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Card/cardClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCardUtilityClass",
    ()=>getCardUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getCardUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCard', slot);
}
const cardClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCard', [
    'root'
]);
const __TURBOPACK__default__export__ = cardClasses;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Card/Card.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$cardClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Card/cardClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$cardClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardUtilityClass"], classes);
};
const CardRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiCard',
    slot: 'Root'
})({
    overflow: 'hidden'
});
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Card(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiCard'
    });
    const { className, raised = false, ...other } = props;
    const ownerState = {
        ...props,
        raised
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CardRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        elevation: raised ? 8 : undefined,
        ref: ref,
        ownerState: ownerState,
        ...other
    });
});
("TURBOPACK compile-time truthy", 1) ? Card.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the card will use raised styling.
   * @default false
   */ raised: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool, (props)=>{
        if (props.raised && props.variant === 'outlined') {
            return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
        }
        return null;
    }),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Card;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Card/Card.mjs [app-client] (ecmascript) <export default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Card/Card.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/CardContent/cardContentClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCardContentUtilityClass",
    ()=>getCardContentUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getCardContentUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCardContent', slot);
}
const cardContentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCardContent', [
    'root'
]);
const __TURBOPACK__default__export__ = cardContentClasses;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/CardContent/CardContent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$cardContentClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/CardContent/cardContentClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$cardContentClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardContentUtilityClass"], classes);
};
const CardContentRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiCardContent',
    slot: 'Root'
})({
    padding: 16,
    '&:last-child': {
        paddingBottom: 24
    }
});
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function CardContent(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiCardContent'
    });
    const { className, component = 'div', ...other } = props;
    const ownerState = {
        ...props,
        component
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CardContentRoot, {
        as: component,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
("TURBOPACK compile-time truthy", 1) ? CardContent.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CardContent;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/CardContent/CardContent.mjs [app-client] (ecmascript) <export default as CardContent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/CardContent/CardContent.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/internal/svg-icons/Cancel.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs [app-client] (ecmascript)");
/**
 * @ignore - internal component.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel');
}),
"[project]/pokemon-app-master/node_modules/@mui/utils/unsupportedProp/unsupportedProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unsupportedProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function unsupportedProp(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== 'undefined') {
        return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
    }
    return null;
}
}),
"[project]/pokemon-app-master/node_modules/@mui/material/utils/unsupportedProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$unsupportedProp$2f$unsupportedProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/unsupportedProp/unsupportedProp.mjs [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$unsupportedProp$2f$unsupportedProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Chip/chipClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getChipUtilityClass",
    ()=>getChipUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getChipUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiChip', slot);
}
const chipClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorDefault',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'deletable',
    'outlined',
    'filled',
    'avatar',
    'icon',
    'label',
    'deleteIcon',
    'focusVisible'
]);
const __TURBOPACK__default__export__ = chipClasses;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Chip/Chip.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$internal$2f$svg$2d$icons$2f$Cancel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/internal/svg-icons/Cancel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/useForkRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$unsupportedProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/unsupportedProp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/capitalize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/ButtonBase/ButtonBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/rootShouldForwardProp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Chip/chipClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useSlot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/useSlot.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/transitions/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, size, color, onDelete, clickable, variant } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            disabled && 'disabled',
            `size${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size)}`,
            `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)}`,
            clickable && 'clickable',
            onDelete && 'deletable'
        ],
        label: [
            'label'
        ],
        avatar: [
            'avatar'
        ],
        icon: [
            'icon'
        ],
        deleteIcon: [
            'deleteIcon'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChipUtilityClass"], classes);
};
const ChipRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiChip',
    slot: 'Root',
    shouldForwardProp: (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prop) && prop !== 'focusableWhenDisabled' && prop !== 'skipFocusWhenDisabled',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { color, clickable, onDelete, size, variant } = ownerState;
        return [
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar}`]: styles.avatar
            },
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon}`]: styles.icon
            },
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteIcon}`]: styles.deleteIcon
            },
            styles.root,
            styles[`size${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size)}`],
            styles[`color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)}`],
            clickable && styles.clickable,
            onDelete && styles.deletable,
            styles[variant]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>{
    const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
    return {
        maxWidth: '100%',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        lineHeight: 1.5,
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: (theme.vars || theme).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, [
            'background-color',
            'box-shadow'
        ]),
        // reset cursor explicitly in case ButtonBase is used
        cursor: 'unset',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        textDecoration: 'none',
        border: 0,
        // Remove `button` border
        padding: 0,
        // Remove `button` padding
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled}`]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity,
            pointerEvents: 'none'
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
            fontSize: theme.typography.pxToRem(12)
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon}`]: {
            marginLeft: 5,
            marginRight: -6
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteIcon}`]: {
            WebkitTapHighlightColor: 'transparent',
            color: theme.alpha((theme.vars || theme).palette.text.primary, 0.26),
            fontSize: 22,
            cursor: 'pointer',
            margin: '0 5px 0 -6px',
            '&:hover': {
                color: theme.alpha((theme.vars || theme).palette.text.primary, 0.4)
            }
        },
        variants: [
            {
                props: {
                    color: 'primary'
                },
                style: {
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar}`]: {
                        color: (theme.vars || theme).palette.primary.contrastText,
                        backgroundColor: (theme.vars || theme).palette.primary.dark
                    }
                }
            },
            {
                props: {
                    color: 'secondary'
                },
                style: {
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar}`]: {
                        color: (theme.vars || theme).palette.secondary.contrastText,
                        backgroundColor: (theme.vars || theme).palette.secondary.dark
                    }
                }
            },
            {
                props: {
                    size: 'small'
                },
                style: {
                    height: 24,
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar}`]: {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: theme.typography.pxToRem(10)
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon}`]: {
                        fontSize: 18,
                        marginLeft: 4,
                        marginRight: -4
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteIcon}`]: {
                        fontSize: 16,
                        marginRight: 4,
                        marginLeft: -4
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                'contrastText'
            ])).map(([color])=>{
                return {
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: (theme.vars || theme).palette[color].main,
                        color: (theme.vars || theme).palette[color].contrastText,
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteIcon}`]: {
                            color: theme.alpha((theme.vars || theme).palette[color].contrastText, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].contrastText
                            }
                        }
                    }
                };
            }),
            {
                props: (props)=>props.iconColor === props.color,
                style: {
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon}`]: {
                        color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
                    }
                }
            },
            {
                props: (props)=>props.iconColor === props.color && props.color !== 'default',
                style: {
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon}`]: {
                        color: 'inherit'
                    }
                }
            },
            {
                props: {
                    onDelete: true
                },
                style: {
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                        backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`)
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                'dark'
            ])).map(([color])=>{
                return {
                    props: {
                        color,
                        onDelete: true
                    },
                    style: {
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                            background: (theme.vars || theme).palette[color].dark
                        }
                    }
                };
            }),
            {
                props: {
                    clickable: true
                },
                style: {
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`)
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                        backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`)
                    },
                    '&:active': {
                        boxShadow: (theme.vars || theme).shadows[1]
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                'dark'
            ])).map(([color])=>({
                    props: {
                        color,
                        clickable: true
                    },
                    style: {
                        [`&:hover, &.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                            backgroundColor: (theme.vars || theme).palette[color].dark
                        }
                    }
                })),
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    backgroundColor: 'transparent',
                    border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]}`,
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clickable}:hover`]: {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                        backgroundColor: (theme.vars || theme).palette.action.focus
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar}`]: {
                        marginLeft: 4
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon}`]: {
                        marginLeft: 4
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteIcon}`]: {
                        marginRight: 5
                    }
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'outlined'
                },
                style: {
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar}`]: {
                        marginLeft: 2
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon}`]: {
                        marginLeft: 2
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteIcon}`]: {
                        marginRight: 3
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()) // no need to check for mainChannel as it's calculated from main
            .map(([color])=>({
                    props: {
                        variant: 'outlined',
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main,
                        border: `1px solid ${theme.alpha((theme.vars || theme).palette[color].main, 0.7)}`,
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clickable}:hover`]: {
                            backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
                        },
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                            backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.focusOpacity)
                        },
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$chipClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteIcon}`]: {
                            color: theme.alpha((theme.vars || theme).palette[color].main, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].main
                            }
                        }
                    }
                }))
        ]
    };
}));
const ChipLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiChip',
    slot: 'Label'
})({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap',
    variants: [
        {
            props: {
                variant: 'outlined'
            },
            style: {
                paddingLeft: 11,
                paddingRight: 11
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                paddingLeft: 8,
                paddingRight: 8
            }
        },
        {
            props: {
                size: 'small',
                variant: 'outlined'
            },
            style: {
                paddingLeft: 7,
                paddingRight: 7
            }
        }
    ]
});
function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */ const Chip = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Chip(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiChip'
    });
    const { avatar: avatarProp, className, clickable: clickableProp, color = 'default', component: ComponentProp, deleteIcon: deleteIconProp, disabled = false, icon: iconProp, label, onClick, onDelete, onKeyDown, onKeyUp, size = 'medium', variant = 'filled', tabIndex, skipFocusWhenDisabled = false, // TODO v6: Rename to `focusableWhenDisabled`.
    slots = {}, slotProps = {}, ...other } = props;
    const { nativeButton, ...buttonBaseProps } = other;
    const chipRef = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(chipRef, ref);
    const handleDeleteIconClick = (event)=>{
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation();
        onDelete(event);
    };
    const handleKeyDown = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
            // Will be handled in keyUp, otherwise some browsers
            // might init navigation
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    const handleKeyUp = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target) {
            if (onDelete && isDeleteKeyboardEvent(event)) {
                onDelete(event);
            }
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
    };
    const clickable = clickableProp !== false && onClick ? true : clickableProp;
    const component = clickable || onDelete ? __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : ComponentProp || 'div';
    const ownerState = {
        ...props,
        component,
        disabled,
        size,
        color,
        iconColor: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](iconProp) ? iconProp.props.color || color : color,
        onDelete: !!onDelete,
        clickable,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    const moreProps = component === __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? {
        component: ComponentProp || 'div',
        internalNativeButton: false,
        focusVisibleClassName: classes.focusVisible,
        ...onDelete && {
            disableRipple: true
        },
        ...nativeButton !== undefined && {
            nativeButton
        }
    } : {};
    let deleteIcon = null;
    if (onDelete) {
        deleteIcon = deleteIconProp && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](deleteIconProp) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](deleteIconProp, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(deleteIconProp.props.className, classes.deleteIcon),
            onClick: handleDeleteIconClick
        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$internal$2f$svg$2d$icons$2f$Cancel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: classes.deleteIcon,
            onClick: handleDeleteIconClick
        });
    }
    let avatar = null;
    if (avatarProp && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](avatarProp)) {
        avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](avatarProp, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.avatar, avatarProp.props.className)
        });
    }
    let icon = null;
    if (iconProp && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](iconProp)) {
        icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](iconProp, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.icon, iconProp.props.className)
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (avatar && icon) {
            console.error('MUI: The Chip component can not handle the avatar ' + 'and the icon prop at the same time. Pick one.');
        }
    }
    const externalForwardedProps = {
        slots,
        slotProps
    };
    const [RootSlot, rootProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useSlot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('root', {
        elementType: ChipRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...buttonBaseProps
        },
        ownerState,
        // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
        shouldForwardComponentProp: true,
        ref: handleRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        additionalProps: {
            disabled: clickable && disabled ? true : undefined,
            tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
            ...moreProps
        },
        getSlotProps: {
            "Chip.Chip.useSlot": (handlers)=>({
                    ...handlers,
                    onClick: ({
                        "Chip.Chip.useSlot": (event)=>{
                            handlers.onClick?.(event);
                            onClick?.(event);
                        }
                    })["Chip.Chip.useSlot"],
                    onKeyDown: ({
                        "Chip.Chip.useSlot": (event)=>{
                            handlers.onKeyDown?.(event);
                            handleKeyDown(event);
                        }
                    })["Chip.Chip.useSlot"],
                    onKeyUp: ({
                        "Chip.Chip.useSlot": (event)=>{
                            handlers.onKeyUp?.(event);
                            handleKeyUp(event);
                        }
                    })["Chip.Chip.useSlot"]
                })
        }["Chip.Chip.useSlot"]
    });
    const [LabelSlot, labelProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useSlot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('label', {
        elementType: ChipLabel,
        externalForwardedProps,
        ownerState,
        className: classes.label
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(RootSlot, {
        as: component,
        ...rootProps,
        children: [
            avatar || icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LabelSlot, {
                ...labelProps,
                children: label
            }),
            deleteIcon
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? Chip.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The Avatar element to display.
   */ avatar: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element,
    /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$unsupportedProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */ clickable: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'default',
            'primary',
            'secondary',
            'error',
            'info',
            'success',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */ deleteIcon: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element,
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Icon element.
   */ icon: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element,
    /**
   * The content of the component.
   */ label: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * If `true`, the component is expected to resolve to a native `<button>` element.
   * When omitted, custom components inherit the default button semantics of the current wrapper.
   * Set to `true` when a custom component resolves to a native `<button>`, or `false`
   * when it resolves to a non-button host.
   */ nativeButton: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore
   */ onClick: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */ onDelete: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onKeyDown: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onKeyUp: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The size of the component.
   * @default 'medium'
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'medium',
            'small'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */ skipFocusWhenDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The props used for each slot inside.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        label: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        root: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * The components used for each slot inside.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        label: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        root: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * @ignore
   */ tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The variant to use.
   * @default 'filled'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'filled',
            'outlined'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Chip;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Chip/Chip.mjs [app-client] (ecmascript) <export default as Chip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Chip/Chip.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Container/Container.mjs [app-client] (ecmascript) <export default as Container>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Container/Container.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/system/RtlProvider/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useRtl",
    ()=>useRtl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
const RtlContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]();
function RtlProvider({ value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RtlContext.Provider, {
        value: value ?? true,
        ...props
    });
}
("TURBOPACK compile-time truthy", 1) ? RtlProvider.propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    value: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
} : "TURBOPACK unreachable";
const useRtl = ()=>{
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RtlContext);
    return value ?? false;
};
const __TURBOPACK__default__export__ = RtlProvider;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/LinearProgress/linearProgressClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getLinearProgressUtilityClass",
    ()=>getLinearProgressUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getLinearProgressUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiLinearProgress', slot);
}
const linearProgressClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiLinearProgress', [
    'root',
    'colorPrimary',
    'colorSecondary',
    'determinate',
    'indeterminate',
    'buffer',
    'query',
    'dashed',
    'bar',
    'bar1',
    'bar2'
]);
const __TURBOPACK__default__export__ = linearProgressClasses;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/LinearProgress/LinearProgress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetWarningFlags",
    ()=>resetWarningFlags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$system$2f$RtlProvider$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/system/RtlProvider/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/capitalize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/transitions/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$LinearProgress$2f$linearProgressClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/LinearProgress/linearProgressClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const TRANSITION_DURATION = 4; // seconds
const EMPTY_STYLE = {};
let warnedMinMaxWithoutVariant = false;
let warnedInvalidMinMaxValue = false;
let warnedValueRequired = false;
let warnedInvalidMinMaxValueBuffer = false;
let warnedValueBufferRequired = false;
function resetWarningFlags() {
    warnedMinMaxWithoutVariant = false;
    warnedInvalidMinMaxValue = false;
    warnedValueRequired = false;
    warnedInvalidMinMaxValueBuffer = false;
    warnedValueBufferRequired = false;
}
const indeterminate1Keyframe = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`;
// This implementation is for supporting both Styled-components v4+ and Pigment CSS.
// A global animation has to be created here for Styled-components v4+ (https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#12).
// which can be done by checking typeof indeterminate1Keyframe !== 'string' (at runtime, Pigment CSS transform keyframes`` to a string).
const indeterminate1Animation = typeof indeterminate1Keyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        animation: ${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null;
const indeterminate2Keyframe = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`;
const indeterminate2Animation = typeof indeterminate2Keyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        animation: ${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null;
const bufferKeyframe = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`;
const bufferAnimation = typeof bufferKeyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        animation: ${bufferKeyframe} 3s infinite linear;
      ` : null;
const useUtilityClasses = (ownerState)=>{
    const { classes, variant, color } = ownerState;
    const slots = {
        root: [
            'root',
            `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)}`,
            variant
        ],
        dashed: [
            'dashed'
        ],
        bar1: [
            'bar',
            'bar1'
        ],
        bar2: [
            'bar',
            'bar2',
            variant === 'buffer' && `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)}`
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$LinearProgress$2f$linearProgressClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinearProgressUtilityClass"], classes);
};
const getColorShade = (theme, color)=>{
    if (theme.vars) {
        return theme.vars.palette.LinearProgress[`${color}Bg`];
    }
    return theme.palette.mode === 'light' ? theme.lighten(theme.palette[color].main, 0.62) : theme.darken(theme.palette[color].main, 0.5);
};
const LinearProgressRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[`color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.color)}`],
            styles[ownerState.variant]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
        height: 4,
        // Fix Safari's bug during composition of different paint.
        zIndex: 0,
        '@media print': {
            colorAdjust: 'exact'
        },
        variants: [
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: getColorShade(theme, color)
                    }
                })),
            {
                props: ({ ownerState })=>ownerState.color === 'inherit' && ownerState.variant !== 'buffer',
                style: {
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'currentColor',
                        opacity: 0.3
                    }
                }
            },
            {
                props: {
                    variant: 'buffer'
                },
                style: {
                    backgroundColor: 'transparent'
                }
            },
            {
                props: {
                    variant: 'query'
                },
                style: {
                    transform: 'rotate(180deg)'
                }
            }
        ]
    })));
const LinearProgressDashed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Dashed'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        position: 'absolute',
        marginTop: 0,
        height: '100%',
        width: '100%',
        backgroundSize: '10px 10px',
        backgroundPosition: '0 -23px',
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    opacity: 0.3,
                    backgroundImage: `radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>{
                const backgroundColor = getColorShade(theme, color);
                return {
                    props: {
                        color
                    },
                    style: {
                        backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`
                    }
                };
            })
        ]
    })), bufferAnimation || {
    // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
    animation: `${bufferKeyframe} 3s infinite linear`
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReducedMotionStyles"])(theme, {
        animation: 'none'
    }) || EMPTY_STYLE));
const LinearProgressBar1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar1',
    overridesResolver: (props, styles)=>{
        return [
            styles.bar,
            styles.bar1
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>{
    const reducedMotionIndeterminateStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReducedMotionStyles"])(theme, {
        animation: 'none',
        left: '30%',
        right: 'auto',
        width: '40%'
    });
    return {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'transform', {
            duration: '0.2s',
            easing: 'linear'
        }),
        transformOrigin: 'left',
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    backgroundColor: 'currentColor'
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: (theme.vars || theme).palette[color].main
                    }
                })),
            {
                props: {
                    variant: 'determinate'
                },
                style: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'transform', {
                        duration: `.${TRANSITION_DURATION}s`,
                        easing: 'linear'
                    })
                }
            },
            {
                props: {
                    variant: 'buffer'
                },
                style: {
                    zIndex: 1,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'transform', {
                        duration: `.${TRANSITION_DURATION}s`,
                        easing: 'linear'
                    })
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: {
                    width: 'auto'
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: indeterminate1Animation || {
                    animation: `${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
                }
            },
            ...reducedMotionIndeterminateStyles ? [
                {
                    props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                    style: reducedMotionIndeterminateStyles
                }
            ] : []
        ]
    };
}));
const LinearProgressBar2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar2',
    overridesResolver: (props, styles)=>{
        return [
            styles.bar,
            styles.bar2
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>{
    const reducedMotionIndeterminateStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReducedMotionStyles"])(theme, {
        animation: 'none',
        display: 'none'
    });
    return {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'transform', {
            duration: '0.2s',
            easing: 'linear'
        }),
        transformOrigin: 'left',
        variants: [
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        '--LinearProgressBar2-barColor': (theme.vars || theme).palette[color].main
                    }
                })),
            {
                props: ({ ownerState })=>ownerState.variant !== 'buffer' && ownerState.color !== 'inherit',
                style: {
                    backgroundColor: 'var(--LinearProgressBar2-barColor, currentColor)'
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant !== 'buffer' && ownerState.color === 'inherit',
                style: {
                    backgroundColor: 'currentColor'
                }
            },
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    opacity: 0.3
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color,
                        variant: 'buffer'
                    },
                    style: {
                        backgroundColor: getColorShade(theme, color),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'transform', {
                            duration: `.${TRANSITION_DURATION}s`,
                            easing: 'linear'
                        })
                    }
                })),
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: {
                    width: 'auto'
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: indeterminate2Animation || {
                    animation: `${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
                }
            },
            ...reducedMotionIndeterminateStyles ? [
                {
                    props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                    style: reducedMotionIndeterminateStyles
                }
            ] : []
        ]
    };
}));
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */ const LinearProgress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function LinearProgress(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiLinearProgress'
    });
    const { className, color = 'primary', max: maxProp, min: minProp, value, valueBuffer, variant = 'indeterminate', ...other } = props;
    const ownerState = {
        ...props,
        color,
        variant
    };
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedMinMaxWithoutVariant && [
            'indeterminate',
            'query'
        ].includes(variant) && (minProp !== undefined || maxProp !== undefined)) {
            console.warn(`MUI: You have provided the \`min\` or \`max\` props with an 'indeterminate' or 'query' variant. These props will have no effect.`);
            warnedMinMaxWithoutVariant = true;
        }
    }
    const min = minProp ?? 0;
    const max = maxProp ?? 100;
    const classes = useUtilityClasses(ownerState);
    const isRtl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$system$2f$RtlProvider$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRtl"])();
    const rootProps = {};
    const inlineStyles = {
        bar1: {},
        bar2: {}
    };
    if (variant === 'determinate' || variant === 'buffer') {
        if (value !== undefined) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!warnedInvalidMinMaxValue && (value < min || value > max || min >= max)) {
                    console.error(`MUI: The min, max, and value props in LinearProgress should be numbers where min < max and min <= value <= max. Received min=${min}, max=${max}, value=${value}.`);
                    warnedInvalidMinMaxValue = true;
                }
            }
            const range = max - min;
            let transform = (value - min) / range * 100 - 100;
            if (isRtl) {
                transform = -transform;
            }
            inlineStyles.bar1.transform = range > 0 ? `translateX(${transform}%)` : 'translateX(-100%)'; // empty-state fallback when range is invalid
            rootProps['aria-valuenow'] = value;
            rootProps['aria-valuemin'] = min;
            rootProps['aria-valuemax'] = max;
        } else if ("TURBOPACK compile-time truthy", 1) {
            if (!warnedValueRequired) {
                console.error('MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress.');
                warnedValueRequired = true;
            }
        }
    }
    if (variant === 'buffer') {
        if (valueBuffer !== undefined) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!warnedInvalidMinMaxValueBuffer && (valueBuffer < min || valueBuffer > max || valueBuffer < value || min >= max)) {
                    console.error(`MUI: The min, max, value, and valueBuffer props in LinearProgress should be numbers where min < max and min <= value <= valueBuffer <= max. Received min=${min}, max=${max}, value=${value}, valueBuffer=${valueBuffer}.`);
                    warnedInvalidMinMaxValueBuffer = true;
                }
            }
            const range = max - min;
            let transform = (valueBuffer - min) / range * 100 - 100;
            if (isRtl) {
                transform = -transform;
            }
            inlineStyles.bar2.transform = range > 0 ? `translateX(${transform}%)` : 'translateX(-100%)'; // empty-state fallback when range is invalid
        } else if ("TURBOPACK compile-time truthy", 1) {
            if (!warnedValueBufferRequired) {
                console.error('MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.');
                warnedValueBufferRequired = true;
            }
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(LinearProgressRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        role: "progressbar",
        ...rootProps,
        ref: ref,
        ...other,
        children: [
            variant === 'buffer' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LinearProgressDashed, {
                className: classes.dashed,
                ownerState: ownerState
            }) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LinearProgressBar1, {
                className: classes.bar1,
                ownerState: ownerState,
                style: inlineStyles.bar1
            }),
            variant === 'determinate' ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LinearProgressBar2, {
                className: classes.bar2,
                ownerState: ownerState,
                style: inlineStyles.bar2
            })
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? LinearProgress.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'primary',
            'secondary'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The maximum value for the progress indicator for the determinate and buffer variants.
   * @default 100
   */ max: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The minimum value for the progress indicator for the determinate and buffer variants.
   * @default 0
   */ min: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between `min` and `max`.
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The value for the buffer variant.
   * Value between `min` and `max`.
   */ valueBuffer: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'buffer',
        'determinate',
        'indeterminate',
        'query'
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = LinearProgress;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/LinearProgress/LinearProgress.mjs [app-client] (ecmascript) <export default as LinearProgress>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinearProgress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$LinearProgress$2f$LinearProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$LinearProgress$2f$LinearProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/LinearProgress/LinearProgress.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/styles/cssUtils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignProperty",
    ()=>alignProperty,
    "convertLength",
    ()=>convertLength,
    "fontGrid",
    ()=>fontGrid,
    "getUnit",
    ()=>getUnit,
    "isUnitless",
    ()=>isUnitless,
    "responsiveProperty",
    ()=>responsiveProperty,
    "toUnitless",
    ()=>toUnitless
]);
function isUnitless(value) {
    return String(parseFloat(value)).length === String(value).length;
}
function getUnit(input) {
    return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}
function toUnitless(length) {
    return parseFloat(length);
}
function convertLength(baseFontSize) {
    return (length, toUnit)=>{
        const fromUnit = getUnit(length);
        // Optimize for cases where `from` and `to` units are accidentally the same.
        if (fromUnit === toUnit) {
            return length;
        }
        // Convert input length to pixels.
        let pxLength = toUnitless(length);
        if (fromUnit !== 'px') {
            if (fromUnit === 'em') {
                pxLength = toUnitless(length) * toUnitless(baseFontSize);
            } else if (fromUnit === 'rem') {
                pxLength = toUnitless(length) * toUnitless(baseFontSize);
            }
        }
        // Convert length in pixels to the output unit
        let outputLength = pxLength;
        if (toUnit !== 'px') {
            if (toUnit === 'em') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else if (toUnit === 'rem') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else {
                return length;
            }
        }
        return parseFloat(outputLength.toFixed(5)) + toUnit;
    };
}
function alignProperty({ size, grid }) {
    const sizeBelow = size - size % grid;
    const sizeAbove = sizeBelow + grid;
    return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
function fontGrid({ lineHeight, pixels, htmlFontSize }) {
    return pixels / (lineHeight * htmlFontSize);
}
function responsiveProperty({ cssProperty, min, max, unit = 'rem', breakpoints = [
    600,
    900,
    1200
], transform = null }) {
    const output = {
        [cssProperty]: `${min}${unit}`
    };
    const factor = (max - min) / breakpoints[breakpoints.length - 1];
    breakpoints.forEach((breakpoint)=>{
        let value = min + factor * breakpoint;
        if (transform !== null) {
            value = transform(value);
        }
        output[`@media (min-width:${breakpoint}px)`] = {
            [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
        };
    });
    return output;
}
}),
"[project]/pokemon-app-master/node_modules/@mui/material/styles/cssUtils.mjs [app-client] (ecmascript) <export getUnit as unstable_getUnit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_getUnit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/cssUtils.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/styles/cssUtils.mjs [app-client] (ecmascript) <export toUnitless as unstable_toUnitless>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_toUnitless",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUnitless"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/cssUtils.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Skeleton/skeletonClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getSkeletonUtilityClass",
    ()=>getSkeletonUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getSkeletonUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiSkeleton', slot);
}
const skeletonClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiSkeleton', [
    'root',
    'text',
    'rectangular',
    'rounded',
    'circular',
    'pulse',
    'wave',
    'withChildren',
    'fitContent',
    'heightAuto'
]);
const __TURBOPACK__default__export__ = skeletonClasses;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Skeleton/Skeleton.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getUnit__as__unstable_getUnit$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/cssUtils.mjs [app-client] (ecmascript) <export getUnit as unstable_getUnit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__toUnitless__as__unstable_toUnitless$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/cssUtils.mjs [app-client] (ecmascript) <export toUnitless as unstable_toUnitless>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/transitions/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$skeletonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Skeleton/skeletonClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes, variant, animation, hasChildren, width, height } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            animation,
            hasChildren && 'withChildren',
            hasChildren && !width && 'fitContent',
            hasChildren && !height && 'heightAuto'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$skeletonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSkeletonUtilityClass"], classes);
};
const pulseKeyframe = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;
const waveKeyframe = __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;
// This implementation is for supporting both Styled-components v4+ and Pigment CSS.
// A global animation has to be created here for Styled-components v4+ (https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#12).
// which can be done by checking typeof indeterminate1Keyframe !== 'string' (at runtime, Pigment CSS transform keyframes`` to a string).
const pulseAnimation = typeof pulseKeyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        animation: ${pulseKeyframe} 2s ease-in-out 0.5s infinite;
      ` : null;
const waveAnimation = typeof waveKeyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        &::after {
          animation: ${waveKeyframe} 2s linear 0.5s infinite;
        }
      ` : null;
const SkeletonRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiSkeleton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            ownerState.animation !== false && styles[ownerState.animation],
            ownerState.hasChildren && styles.withChildren,
            ownerState.hasChildren && !ownerState.width && styles.fitContent,
            ownerState.hasChildren && !ownerState.height && styles.heightAuto
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>{
    const radiusUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getUnit__as__unstable_getUnit$3e$__["unstable_getUnit"])(theme.shape.borderRadius) || 'px';
    const radiusValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$cssUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__toUnitless__as__unstable_toUnitless$3e$__["unstable_toUnitless"])(theme.shape.borderRadius);
    const reducedMotionPulseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReducedMotionStyles"])(theme, {
        animation: 'none'
    });
    const reducedMotionWaveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReducedMotionStyles"])(theme, {
        '&::after': {
            animation: 'none',
            display: 'none'
        }
    });
    return {
        display: 'block',
        // Create a "on paper" color with sufficient contrast retaining the color
        backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : theme.alpha(theme.palette.text.primary, theme.palette.mode === 'light' ? 0.11 : 0.13),
        height: '1.2em',
        variants: [
            {
                props: {
                    variant: 'text'
                },
                style: {
                    marginTop: 0,
                    marginBottom: 0,
                    height: 'auto',
                    transformOrigin: '0 55%',
                    transform: 'scale(1, 0.60)',
                    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
                    '&:empty:before': {
                        content: '"\\00a0"'
                    }
                }
            },
            {
                props: {
                    variant: 'circular'
                },
                style: {
                    borderRadius: '50%'
                }
            },
            {
                props: {
                    variant: 'rounded'
                },
                style: {
                    borderRadius: (theme.vars || theme).shape.borderRadius
                }
            },
            {
                props: ({ ownerState })=>ownerState.hasChildren,
                style: {
                    '& > *': {
                        visibility: 'hidden'
                    }
                }
            },
            {
                props: ({ ownerState })=>ownerState.hasChildren && !ownerState.width,
                style: {
                    maxWidth: 'fit-content'
                }
            },
            {
                props: ({ ownerState })=>ownerState.hasChildren && !ownerState.height,
                style: {
                    height: 'auto'
                }
            },
            {
                props: {
                    animation: 'pulse'
                },
                style: pulseAnimation || {
                    animation: `${pulseKeyframe} 2s ease-in-out 0.5s infinite`
                }
            },
            ...reducedMotionPulseStyles ? [
                {
                    props: {
                        animation: 'pulse'
                    },
                    style: reducedMotionPulseStyles
                }
            ] : [],
            {
                props: {
                    animation: 'wave'
                },
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */ WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    '&::after': {
                        background: `linear-gradient(
                90deg,
                transparent,
                ${(theme.vars || theme).palette.action.hover},
                transparent
              )`,
                        content: '""',
                        position: 'absolute',
                        transform: 'translateX(-100%)' /* Avoid flash during server-side hydration */ ,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    }
                }
            },
            {
                props: {
                    animation: 'wave'
                },
                style: waveAnimation || {
                    '&::after': {
                        animation: `${waveKeyframe} 2s linear 0.5s infinite`
                    }
                }
            },
            ...reducedMotionWaveStyles ? [
                {
                    props: {
                        animation: 'wave'
                    },
                    style: reducedMotionWaveStyles
                }
            ] : []
        ]
    };
}));
const Skeleton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Skeleton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiSkeleton'
    });
    const { animation = 'pulse', className, component = 'span', height, style, variant = 'text', width, ...other } = props;
    const ownerState = {
        ...props,
        animation,
        component,
        variant,
        hasChildren: Boolean(other.children)
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SkeletonRoot, {
        as: component,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        ...other,
        style: {
            width,
            height,
            ...style
        }
    });
});
("TURBOPACK compile-time truthy", 1) ? Skeleton.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */ animation: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'pulse',
        'wave',
        false
    ]),
    /**
   * Optional children to infer width and height from.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */ height: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * @ignore
   */ style: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The type of content that will be rendered.
   * @default 'text'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'circular',
            'rectangular',
            'rounded',
            'text'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */ width: __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Skeleton;
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Skeleton/Skeleton.mjs [app-client] (ecmascript) <export default as Skeleton>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Skeleton/Skeleton.mjs [app-client] (ecmascript)");
}),
"[project]/pokemon-app-master/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Typography",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokemon$2d$app$2d$master$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokemon-app-master/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0wui_20-9nfr._.js.map