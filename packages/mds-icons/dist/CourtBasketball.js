import { jsxs as i, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: h = "1em",
  title: r,
  titleId: e,
  ...l
}, d) => {
  const t = n(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21 4.125H3A1.875 1.875 0 0 0 1.125 6v12A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V6A1.875 1.875 0 0 0 21 4.125m-.375 10.5h-.375a2.625 2.625 0 0 1 0-5.25h.375zm-17.25-5.25h.375a2.625 2.625 0 0 1 0 5.25h-.375zm0 7.5h.375a4.875 4.875 0 1 0 0-9.75h-.375v-.75h7.5v11.25h-7.5zm9.75.75V6.375h7.5v.75h-.375a4.875 4.875 0 1 0 0 9.75h.375v.75z" })
  ] });
});
s.displayName = "CourtBasketball";
export {
  s as CourtBasketball
};
//# sourceMappingURL=CourtBasketball.js.map
