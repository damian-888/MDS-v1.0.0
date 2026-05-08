import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const m = c(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...d
}, i) => {
  const n = h(), a = o ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21 14.512-4.415-1.979-.017-.008a1.87 1.87 0 0 0-1.886.243l-2.091 1.782c-1.22-.661-2.478-1.91-3.14-3.114l1.787-2.124q.043-.052.08-.108a1.87 1.87 0 0 0 .148-1.782L9.488 3a1.88 1.88 0 0 0-1.949-1.111 5.65 5.65 0 0 0-4.914 5.61c0 7.651 6.224 13.876 13.875 13.876a5.65 5.65 0 0 0 5.61-4.915A1.88 1.88 0 0 0 21 14.512m-4.5 4.613A11.64 11.64 0 0 1 4.875 7.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.937-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.842c.883 1.807 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.037.105-.08l2.102-1.788 3.938 1.764a3.4 3.4 0 0 1-3.332 2.67" })
  ] });
});
m.displayName = "Phone";
export {
  m as Phone
};
//# sourceMappingURL=Phone.js.map
