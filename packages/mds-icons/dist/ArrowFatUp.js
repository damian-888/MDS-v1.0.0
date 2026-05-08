import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const t = m(), a = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m21.795 10.454-9-9a1.124 1.124 0 0 0-1.594 0l-9 9A1.125 1.125 0 0 0 3 12.374h3.375V19.5a1.875 1.875 0 0 0 1.875 1.875h7.5a1.875 1.875 0 0 0 1.875-1.875v-7.125H21a1.125 1.125 0 0 0 .795-1.921m-5.295-.33a1.125 1.125 0 0 0-1.125 1.126v7.875h-6.75V11.25A1.125 1.125 0 0 0 7.5 10.125H5.719l6.28-6.281 6.282 6.28z" })
  ] });
});
s.displayName = "ArrowFatUp";
export {
  s as ArrowFatUp
};
//# sourceMappingURL=ArrowFatUp.js.map
