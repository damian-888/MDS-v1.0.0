import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = s(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.125 19.5A1.125 1.125 0 0 1 21 20.625H4.5a1.125 1.125 0 1 1 0-2.25H21a1.125 1.125 0 0 1 1.125 1.125M6.75 14.625A1.125 1.125 0 0 0 7.875 13.5V7.219l8.58 8.58a1.127 1.127 0 1 0 1.593-1.594l-8.58-8.58h6.282a1.125 1.125 0 0 0 0-2.25h-9A1.125 1.125 0 0 0 5.625 4.5v9a1.125 1.125 0 0 0 1.125 1.125" })
  ] });
});
w.displayName = "ArrowLineUpLeft";
export {
  w as ArrowLineUpLeft
};
//# sourceMappingURL=ArrowLineUpLeft.js.map
