import { jsxs as l, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: o = "1em",
  title: v,
  titleId: h,
  ...d
}, e) => {
  const i = n(), r = v ? h ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": v ? void 0 : !0, role: v ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    v ? /* @__PURE__ */ a("title", { id: r, children: v }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.875 9.75v-3A1.875 1.875 0 0 0 21 4.875H3A1.875 1.875 0 0 0 1.125 6.75v3a1.88 1.88 0 0 0-.75 1.5v4.5a1.875 1.875 0 0 0 1.875 1.875h.375v1.125a1.125 1.125 0 0 0 2.25 0v-1.125h14.25v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h.375a1.875 1.875 0 0 0 1.875-1.875v-4.5a1.88 1.88 0 0 0-.75-1.5m-2.25-.375H19.5a1.875 1.875 0 0 0-1.875 1.875v.375h-4.5v-4.5h7.5zm-9.75-2.25v4.5h-4.5v-.375A1.875 1.875 0 0 0 4.5 9.375H3.375v-2.25zm10.5 8.25H2.625v-3.75h1.5v1.125a1.125 1.125 0 0 0 1.125 1.125h13.5a1.125 1.125 0 0 0 1.125-1.125v-1.125h1.5z" })
  ] });
});
m.displayName = "Couch";
export {
  m as Couch
};
//# sourceMappingURL=Couch.js.map
