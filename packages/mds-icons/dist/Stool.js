import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: o,
  titleId: e,
  ...i
}, t) => {
  const h = m(), r = o ? e ?? h : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.125 6V3.75a1.875 1.875 0 0 0-1.875-1.875H6.75A1.875 1.875 0 0 0 4.875 3.75V6A1.875 1.875 0 0 0 6.75 7.875h.188l-2.049 12.95a1.125 1.125 0 1 0 2.222.35l.68-4.3h8.419l.68 4.3a1.125 1.125 0 1 0 2.221-.35l-2.048-12.95h.187A1.875 1.875 0 0 0 19.125 6m-12-1.875h9.75v1.5h-9.75zm8.73 10.5H8.145l1.065-6.75h5.578z" })
  ] });
});
s.displayName = "Stool";
export {
  s as Stool
};
//# sourceMappingURL=Stool.js.map
