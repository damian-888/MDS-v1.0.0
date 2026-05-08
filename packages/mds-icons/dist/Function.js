import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...d
}, e) => {
  const n = s(), a = o ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ i("title", { id: a, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.875 3.75a1.125 1.125 0 0 1-1.125 1.125h-2.746a1.875 1.875 0 0 0-1.848 1.54l-.808 4.46h3.902a1.125 1.125 0 1 1 0 2.25h-4.312l-.886 4.863a4.124 4.124 0 0 1-4.056 3.387H5.25a1.125 1.125 0 1 1 0-2.25h2.746a1.875 1.875 0 0 0 1.848-1.54l.808-4.46H6.75a1.125 1.125 0 1 1 0-2.25h4.313l.884-4.863a4.125 4.125 0 0 1 4.057-3.387h2.746a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
c.displayName = "Function";
export {
  c as Function
};
//# sourceMappingURL=Function.js.map
