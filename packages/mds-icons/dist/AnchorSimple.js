import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const n = m(), e = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 10.125h-2.25a1.125 1.125 0 1 0 0 2.25h1.045a7.89 7.89 0 0 1-6.67 6.67V9.182a3.375 3.375 0 1 0-2.25 0v9.862a7.895 7.895 0 0 1-6.67-6.669H5.25a1.125 1.125 0 1 0 0-2.25H3a1.125 1.125 0 0 0-1.125 1.125 10.125 10.125 0 0 0 20.25 0A1.125 1.125 0 0 0 21 10.125m-9-5.25a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25" })
  ] });
});
s.displayName = "AnchorSimple";
export {
  s as AnchorSimple
};
//# sourceMappingURL=AnchorSimple.js.map
