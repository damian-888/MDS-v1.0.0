import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...t
}, i) => {
  const l = s(), e = a ? d ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...t, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M14.25 12a1.125 1.125 0 0 1-1.125 1.125H12v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H8.625a1.125 1.125 0 1 1 0-2.25H9.75V9.75a1.125 1.125 0 0 1 2.25 0v1.125h1.125A1.125 1.125 0 0 1 14.25 12M21 7.5v9a2.625 2.625 0 0 1-2.625 2.625H2.625A2.625 2.625 0 0 1 0 16.5v-9a2.625 2.625 0 0 1 2.625-2.625h15.75A2.625 2.625 0 0 1 21 7.5m-2.25 0a.375.375 0 0 0-.375-.375H2.625a.375.375 0 0 0-.375.375v9a.375.375 0 0 0 .375.375h15.75a.375.375 0 0 0 .375-.375zm4.125 1.125A1.125 1.125 0 0 0 21.75 9.75v4.5a1.125 1.125 0 1 0 2.25 0v-4.5a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
h.displayName = "BatteryPlus";
export {
  h as BatteryPlus
};
//# sourceMappingURL=BatteryPlus.js.map
