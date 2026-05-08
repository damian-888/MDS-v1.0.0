import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: a,
  titleId: l,
  ...e
}, i) => {
  const t = m(), r = a ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m4.829 9.797-3-3a1.125 1.125 0 0 1 0-1.594l3-3a1.127 1.127 0 0 1 1.594 1.594L4.219 6 6.42 8.205a1.127 1.127 0 0 1-1.594 1.594zm4.5 0a1.126 1.126 0 0 0 1.594 0l3-3a1.125 1.125 0 0 0 0-1.594l-3-3a1.127 1.127 0 0 0-1.594 1.594L11.53 6 9.33 8.205a1.125 1.125 0 0 0 0 1.592m9.42-6.421h-1.874a1.125 1.125 0 1 0 0 2.25h1.5v12.75H5.625v-5.25a1.125 1.125 0 0 0-2.25 0v5.625a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875" })
  ] });
});
s.displayName = "CodeBlock";
export {
  s as CodeBlock
};
//# sourceMappingURL=CodeBlock.js.map
