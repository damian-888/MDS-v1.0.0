import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const g = t(({
  size: o = "1em",
  title: e,
  titleId: a,
  ...d
}, i) => {
  const n = m(), r = e ? a ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m17.296 11.296-3 3a1.124 1.124 0 0 1-1.594 0L10.5 12.094l-2.204 2.202a1.127 1.127 0 0 1-1.594-1.594l3-3a1.125 1.125 0 0 1 1.594 0l2.204 2.204 2.204-2.205a1.127 1.127 0 0 1 1.594 1.594zm4.829.704a10.124 10.124 0 0 1-14.74 9.014l-3.04 1.017a1.875 1.875 0 0 1-2.376-2.375l1.013-3.04A10.125 10.125 0 1 1 22.125 12m-2.25 0a7.876 7.876 0 1 0-14.693 3.942 1.13 1.13 0 0 1 .093.921l-.93 2.793 2.792-.931q.174-.057.356-.058c.198 0 .392.052.563.152A7.875 7.875 0 0 0 19.875 12" })
  ] });
});
g.displayName = "MessengerLogo";
export {
  g as MessengerLogo
};
//# sourceMappingURL=MessengerLogo.js.map
