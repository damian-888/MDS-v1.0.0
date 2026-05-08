import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const h = w(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, t) => {
  const n = s(), e = r ? i ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.796 6.794 8.719 16.874h7.031a1.125 1.125 0 1 1 0 2.25H6A1.125 1.125 0 0 1 4.875 18V8.25a1.125 1.125 0 0 1 2.25 0v7.031l10.08-10.077a1.126 1.126 0 1 1 1.593 1.594z" })
  ] });
});
h.displayName = "ArrowDownLeft";
export {
  h as ArrowDownLeft
};
//# sourceMappingURL=ArrowDownLeft.js.map
