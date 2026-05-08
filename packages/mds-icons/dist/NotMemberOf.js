import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = m(), l = r ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.257 2.917a1.125 1.125 0 0 0-1.59.076l-.346.382H12a8.62 8.62 0 0 0-6.582 14.193l-1.751 1.925a1.126 1.126 0 1 0 1.665 1.514l1.75-1.925A8.58 8.58 0 0 0 12 20.625h6.75a1.125 1.125 0 1 0 0-2.25H12a6.33 6.33 0 0 1-3.386-.978l3.884-4.272h6.252a1.125 1.125 0 1 0 0-2.25h-4.206l5.789-6.369a1.125 1.125 0 0 0-.076-1.589M6.95 15.883a6.35 6.35 0 0 1-1.219-2.758h3.73zm-1.223-5.008A6.384 6.384 0 0 1 12 5.625h4.275l-4.772 5.25z" })
  ] });
});
s.displayName = "NotMemberOf";
export {
  s as NotMemberOf
};
//# sourceMappingURL=NotMemberOf.js.map
