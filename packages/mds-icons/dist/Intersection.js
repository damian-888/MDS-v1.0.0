import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const c = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, n) => {
  const a = v(), o = r ? d ?? a : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.875 11.25v7.5a1.125 1.125 0 1 1-2.25 0v-7.5a5.625 5.625 0 1 0-11.25 0v7.5a1.125 1.125 0 0 1-2.25 0v-7.5a7.875 7.875 0 1 1 15.75 0" })
  ] });
});
c.displayName = "Intersection";
export {
  c as Intersection
};
//# sourceMappingURL=Intersection.js.map
