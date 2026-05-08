import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const t = m(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-10.92-3.33a1.125 1.125 0 0 1 0-1.593l4.076-4.077H10.5a1.125 1.125 0 1 1 0-2.25H15A1.125 1.125 0 0 1 16.125 9v4.5a1.125 1.125 0 1 1-2.25 0v-1.781l-4.08 4.08a1.125 1.125 0 0 1-1.593 0z" })
  ] });
});
s.displayName = "ArrowSquareUpRight";
export {
  s as ArrowSquareUpRight
};
//# sourceMappingURL=ArrowSquareUpRight.js.map
