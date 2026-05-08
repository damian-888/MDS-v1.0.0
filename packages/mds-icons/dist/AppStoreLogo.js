import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const p = h(({
  size: l = "1em",
  title: o,
  titleId: e,
  ...d
}, i) => {
  const t = m(), r = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    o ? /* @__PURE__ */ a("title", { id: r, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.875 15a1.125 1.125 0 0 1-1.125 1.124h-2.937l1.655 2.802a1.124 1.124 0 1 1-1.936 1.145l-5.323-9.01a1.125 1.125 0 0 1 1.937-1.143l2.337 3.956h4.267A1.125 1.125 0 0 1 22.875 15m-10.392-1.126H9.13l6.088-10.302a1.123 1.123 0 0 0-.806-1.698 1.125 1.125 0 0 0-1.13.553L12 4.593l-1.282-2.166a1.125 1.125 0 1 0-1.936 1.145l1.911 3.235-4.175 7.067H2.25a1.125 1.125 0 0 0 0 2.25h10.233a1.125 1.125 0 1 0 0-2.25m-6.968 3.907a1.125 1.125 0 0 0-1.54.395l-.443.75a1.126 1.126 0 1 0 1.936 1.145l.444-.75a1.125 1.125 0 0 0-.397-1.54" })
  ] });
});
p.displayName = "AppStoreLogo";
export {
  p as AppStoreLogo
};
//# sourceMappingURL=AppStoreLogo.js.map
