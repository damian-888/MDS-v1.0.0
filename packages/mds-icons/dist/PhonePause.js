import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: e = "1em",
  title: a,
  titleId: l,
  ...d
}, i) => {
  const n = m(), o = a ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m20.25 15.262-4.415-1.978-.017-.008a1.86 1.86 0 0 0-1.886.242L11.841 15.3c-1.22-.661-2.478-1.91-3.14-3.114l1.787-2.124a1 1 0 0 0 .08-.108 1.87 1.87 0 0 0 .155-1.765l-.007-.017L8.738 3.75a1.88 1.88 0 0 0-1.949-1.111 5.65 5.65 0 0 0-4.914 5.61c0 7.651 6.224 13.876 13.875 13.876a5.65 5.65 0 0 0 5.61-4.915 1.88 1.88 0 0 0-1.11-1.948m-4.5 4.613A11.64 11.64 0 0 1 4.125 8.25a3.4 3.4 0 0 1 2.67-3.331l1.764 3.937-1.796 2.138q-.044.051-.08.107a1.88 1.88 0 0 0-.12 1.844c.883 1.807 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.037.105-.08l2.102-1.788 3.938 1.764a3.4 3.4 0 0 1-3.332 2.67M17.625 9.75V4.5a1.125 1.125 0 1 1 2.25 0v5.25a1.125 1.125 0 1 1-2.25 0m-3.75 0V4.5a1.125 1.125 0 1 1 2.25 0v5.25a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
c.displayName = "PhonePause";
export {
  c as PhonePause
};
//# sourceMappingURL=PhonePause.js.map
