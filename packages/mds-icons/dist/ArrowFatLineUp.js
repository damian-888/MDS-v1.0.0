import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const t = m(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21.795 10.454-9-9a1.124 1.124 0 0 0-1.594 0l-9 9A1.125 1.125 0 0 0 3 12.374h3.375V16.5A1.125 1.125 0 0 0 7.5 17.625h9a1.125 1.125 0 0 0 1.125-1.125v-4.125H21a1.125 1.125 0 0 0 .795-1.921m-5.295-.33a1.125 1.125 0 0 0-1.125 1.126v4.125h-6.75V11.25A1.125 1.125 0 0 0 7.5 10.125H5.719l6.28-6.281 6.282 6.28zm1.125 10.126a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 0 1 0-2.25h9a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "ArrowFatLineUp";
export {
  s as ArrowFatLineUp
};
//# sourceMappingURL=ArrowFatLineUp.js.map
