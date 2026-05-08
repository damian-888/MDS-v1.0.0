import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const c = s(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...d
}, e) => {
  const n = v(), o = a ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: o, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.594 14.124v-.005a5 5 0 0 0-.237-.553l-3.895-8.86a1.1 1.1 0 0 0-.234-.343 3.374 3.374 0 0 0-4.774 0c-.21.21-.329.496-.329.794v1.969h-2.25v-1.97c0-.297-.118-.583-.33-.794a3.375 3.375 0 0 0-4.773 0 1.1 1.1 0 0 0-.234.342l-3.895 8.862q-.136.27-.237.553v.005a4.875 4.875 0 1 0 9.469 1.627V9.376h2.25v6.375a4.875 4.875 0 1 0 9.469-1.627M7.5 5.84a1.13 1.13 0 0 1 1.125-.114v5.92a4.87 4.87 0 0 0-3.366-.714zM6 18.376a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25m9.375-12.65a1.13 1.13 0 0 1 1.125.113l2.238 5.092a4.87 4.87 0 0 0-3.366.714zM18 18.375a2.625 2.625 0 1 1 0-5.251 2.625 2.625 0 0 1 0 5.25" })
  ] });
});
c.displayName = "Binoculars";
export {
  c as Binoculars
};
//# sourceMappingURL=Binoculars.js.map
