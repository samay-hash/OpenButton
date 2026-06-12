(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/openbutton_openbutton-main_frontend_fa71df83._.js",
"[project]/openbutton/openbutton-main/frontend/instrumentation.ts [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
// Keep server/edge instrumentation empty so Cloudflare Workers stay under the
// free-plan script size limit.
}
}),
"[project]/openbutton/openbutton-main/frontend/edge-wrapper.js { MODULE => \"[project]/openbutton/openbutton-main/frontend/instrumentation.ts [instrumentation-edge] (ecmascript)\" } [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/instrumentation.ts [instrumentation-edge] (ecmascript)"));
modProm.catch(()=>{});
self._ENTRIES["middleware_instrumentation"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}),
]);

//# sourceMappingURL=openbutton_openbutton-main_frontend_fa71df83._.js.map