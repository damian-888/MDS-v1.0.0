import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const m = s(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...d
}, e) => {
  const t = v(), o = l ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ a("title", { id: o, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m21.796 18.046-3 3a1.124 1.124 0 0 1-1.594 0l-3-3a1.127 1.127 0 1 1 1.594-1.594l1.079 1.08v-4.313L12 8.344l-4.875 4.875v4.312l1.08-1.08a1.127 1.127 0 1 1 1.593 1.594l-3 3a1.125 1.125 0 0 1-1.594 0l-3-3a1.127 1.127 0 1 1 1.594-1.594l1.077 1.08V12.75a1.13 1.13 0 0 1 .33-.796l5.67-5.673V2.25a1.125 1.125 0 0 1 2.25 0v4.031l5.671 5.67a1.12 1.12 0 0 1 .329.799v4.781l1.08-1.08a1.125 1.125 0 0 1 1.923.797 1.13 1.13 0 0 1-.33.797z" })
  ] });
});
m.displayName = "ArrowsSplit";
export {
  m as ArrowsSplit
};
//# sourceMappingURL=ArrowsSplit.js.map
