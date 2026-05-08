import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const n = h(), o = r ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 12a1.125 1.125 0 0 1-1.125 1.125H4.5a1.125 1.125 0 1 1 0-2.25h6.375A1.125 1.125 0 0 1 12 12M4.5 7.125h12.375a1.125 1.125 0 0 0 0-2.25H4.5a1.125 1.125 0 0 0 0 2.25m4.875 9.75H4.5a1.125 1.125 0 1 0 0 2.25h4.875a1.125 1.125 0 1 0 0-2.25m12.42-1.92a1.125 1.125 0 0 0-1.593 0l-1.827 1.826V10.5a1.125 1.125 0 1 0-2.25 0v6.281l-1.83-1.83a1.127 1.127 0 1 0-1.593 1.594l3.75 3.75a1.125 1.125 0 0 0 1.594 0l3.75-3.75a1.125 1.125 0 0 0 0-1.59" })
  ] });
});
m.displayName = "SortAscending";
export {
  m as SortAscending
};
//# sourceMappingURL=SortAscending.js.map
