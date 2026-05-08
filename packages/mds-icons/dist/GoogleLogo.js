import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as g } from "react";
const h = s(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, t) => {
  const a = g(), e = o ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 12a9.375 9.375 0 1 1-2.143-5.966 1.126 1.126 0 0 1-1.735 1.433 7.126 7.126 0 1 0 1.539 5.659H12a1.125 1.125 0 1 1 0-2.25h8.25A1.125 1.125 0 0 1 21.375 12" })
  ] });
});
h.displayName = "GoogleLogo";
export {
  h as GoogleLogo
};
//# sourceMappingURL=GoogleLogo.js.map
