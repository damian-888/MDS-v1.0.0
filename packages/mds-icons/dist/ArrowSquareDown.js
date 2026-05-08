import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const n = w(), e = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: e, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-10.92-5.58a1.126 1.126 0 0 1 1.227-1.837c.137.056.261.14.366.244l1.077 1.08V8.25a1.125 1.125 0 1 1 2.25 0v4.781l1.08-1.08a1.124 1.124 0 0 1 1.593 0 1.124 1.124 0 0 1 0 1.594l-3 3a1.125 1.125 0 0 1-1.594 0z" })
  ] });
});
m.displayName = "ArrowSquareDown";
export {
  m as ArrowSquareDown
};
//# sourceMappingURL=ArrowSquareDown.js.map
