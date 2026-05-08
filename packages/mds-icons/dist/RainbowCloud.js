import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: o = "1em",
  title: a,
  titleId: i,
  ...e
}, l) => {
  const n = h(), r = a ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.125 10.126a4.9 4.9 0 0 0-4.428 2.834h-.072c-1.86 0-3.375 1.551-3.375 3.458s1.514 3.457 3.375 3.457h4.5a4.875 4.875 0 1 0 0-9.75m0 7.5h-4.5c-.62 0-1.125-.542-1.125-1.209s.504-1.208 1.125-1.208c.137 0 .273.026.4.078a1.126 1.126 0 0 0 1.528-.816 2.625 2.625 0 1 1 2.572 3.154m-8.886-4.797a1.126 1.126 0 0 1-.198 1.578.75.75 0 0 0-.291.594v1.5a1.125 1.125 0 0 1-2.25 0V15a2.98 2.98 0 0 1 1.16-2.37 1.125 1.125 0 0 1 1.58.198m2.573-1.687A4.5 4.5 0 0 0 6 15v1.5a1.125 1.125 0 0 1-2.25 0V15A6.75 6.75 0 0 1 13.969 9.21a1.125 1.125 0 0 1-1.158 1.929zM2.25 15v1.5a1.125 1.125 0 0 1-2.25 0V15a10.5 10.5 0 0 1 17.388-7.926 1.125 1.125 0 1 1-1.477 1.698A8.25 8.25 0 0 0 2.25 15" })
  ] });
});
m.displayName = "RainbowCloud";
export {
  m as RainbowCloud
};
//# sourceMappingURL=RainbowCloud.js.map
