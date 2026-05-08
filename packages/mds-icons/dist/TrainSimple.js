import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const v = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...o
}, d) => {
  const m = h(), i = a ? e ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": i, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: i, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M17.25 1.875H6.75A3.375 3.375 0 0 0 3.375 5.25v12a3.375 3.375 0 0 0 3.375 3.375l-.9 1.2a1.125 1.125 0 1 0 1.8 1.35l1.912-2.55h4.876l1.912 2.55a1.125 1.125 0 1 0 1.8-1.35l-.9-1.2a3.375 3.375 0 0 0 3.375-3.375v-12a3.375 3.375 0 0 0-3.375-3.375m-10.5 2.25h10.5a1.125 1.125 0 0 1 1.125 1.125v5.625H5.625V5.25A1.125 1.125 0 0 1 6.75 4.125m10.5 14.25H6.75a1.125 1.125 0 0 1-1.125-1.125v-4.125h12.75v4.125a1.125 1.125 0 0 1-1.125 1.125m-7.5-2.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
v.displayName = "TrainSimple";
export {
  v as TrainSimple
};
//# sourceMappingURL=TrainSimple.js.map
