import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: e,
  titleId: l,
  ...a
}, i) => {
  const t = s(), o = e ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": o, ...a, children: [
    e ? /* @__PURE__ */ d("title", { id: o, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M19.875 12a7.8 7.8 0 0 1-.844 3.547l-5.906-4.133V4.207A7.886 7.886 0 0 1 19.875 12m-9-7.793v7.207l-5.906 4.134a7.868 7.868 0 0 1 5.906-11.344zm-4.61 13.182 4.61-3.228v5.632a7.86 7.86 0 0 1-4.61-2.404m6.86 2.404v-5.632l4.61 3.228a7.86 7.86 0 0 1-4.61 2.404" })
  ] });
});
c.displayName = "Peace";
export {
  c as Peace
};
//# sourceMappingURL=Peace.js.map
