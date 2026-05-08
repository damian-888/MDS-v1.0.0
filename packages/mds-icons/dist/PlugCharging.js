import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const g = t(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, h) => {
  const e = v(), l = a ? o ?? e : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: l, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 4.5h-4.125v-3a1.125 1.125 0 1 0-2.25 0v3h-5.25v-3a1.125 1.125 0 0 0-2.25 0v3H3.052c-.764 0-1.177.58-1.177 1.125A1.125 1.125 0 0 0 3 6.75h1.125v8.625A4.13 4.13 0 0 0 8.25 19.5h2.625v3a1.125 1.125 0 1 0 2.25 0v-3h2.625a4.13 4.13 0 0 0 4.125-4.125V6.75H21a1.125 1.125 0 0 0 0-2.25m-3.375 10.875a1.875 1.875 0 0 1-1.875 1.875h-7.5a1.875 1.875 0 0 1-1.875-1.875V6.75h11.25zm-8.05-2.735a1.13 1.13 0 0 1-.129-1.03l1.125-3a1.127 1.127 0 0 1 1.822-.429 1.125 1.125 0 0 1 .286 1.217l-.555 1.477H13.5a1.127 1.127 0 0 1 1.054 1.52l-1.125 3a1.125 1.125 0 0 1-2.108-.79l.555-1.48H10.5a1.12 1.12 0 0 1-.924-.485" })
  ] });
});
g.displayName = "PlugCharging";
export {
  g as PlugCharging
};
//# sourceMappingURL=PlugCharging.js.map
