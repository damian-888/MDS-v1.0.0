import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...a
}, d) => {
  const t = s(), e = r ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM7.125 12a1.125 1.125 0 0 1 1.125-1.125h4.781l-1.08-1.08a1.126 1.126 0 0 1 1.228-1.837q.207.087.366.244l3 3a1.125 1.125 0 0 1 0 1.594l-3 3a1.125 1.125 0 0 1-1.924-.797 1.13 1.13 0 0 1 .33-.797l1.08-1.077H8.25A1.125 1.125 0 0 1 7.125 12" })
  ] });
});
m.displayName = "ArrowSquareRight";
export {
  m as ArrowSquareRight
};
//# sourceMappingURL=ArrowSquareRight.js.map
