import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = m(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.162 4.838a10.125 10.125 0 1 0 0 14.325 10.14 10.14 0 0 0 0-14.325M17.57 17.57a7.874 7.874 0 1 1 0-11.142 7.886 7.886 0 0 1 .001 11.142zm-5.525-6.367a1.125 1.125 0 0 1 0 1.594l-3 3a1.127 1.127 0 1 1-1.594-1.594L9.656 12 7.452 9.794A1.127 1.127 0 1 1 9.046 8.2zm5.25 1.594-3 3a1.127 1.127 0 1 1-1.594-1.594L14.906 12l-2.205-2.206A1.127 1.127 0 0 1 14.295 8.2l3 3a1.126 1.126 0 0 1 .003 1.596z" })
  ] });
});
s.displayName = "CaretCircleDoubleRight";
export {
  s as CaretCircleDoubleRight
};
//# sourceMappingURL=CaretCircleDoubleRight.js.map
