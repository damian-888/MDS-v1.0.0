import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const h = n(), a = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m23.532 13.807-4.5-10.5A1.13 1.13 0 0 0 18 2.625H6a1.13 1.13 0 0 0-1.031.682l-4.5 10.5A1.125 1.125 0 0 0 1.5 15.375h9.375v3.75H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 0 0 0-2.25h-1.875v-3.75h4.5V18a1.125 1.125 0 1 0 2.25 0v-2.625H22.5a1.126 1.126 0 0 0 1.032-1.568m-20.325-.682 3.535-8.25h10.517l3.535 8.25z" })
  ] });
});
s.displayName = "Lamp";
export {
  s as Lamp
};
//# sourceMappingURL=Lamp.js.map
