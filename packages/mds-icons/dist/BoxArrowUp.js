import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = h(), l = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m21.256 6.247-1.5-3a1.12 1.12 0 0 0-1.006-.622H5.25a1.13 1.13 0 0 0-1.006.622l-1.5 3a1.1 1.1 0 0 0-.119.503V19.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V6.75c0-.175-.04-.347-.12-.503m-3.202-1.372L18.617 6H5.383l.563-1.125zM4.875 19.125V8.25h14.25v10.875zm10.92-6.42a1.127 1.127 0 1 1-1.593 1.593l-1.077-1.08v3.657a1.125 1.125 0 1 1-2.25 0v-3.656l-1.08 1.08a1.127 1.127 0 1 1-1.593-1.594l3-3a1.125 1.125 0 0 1 1.594 0z" })
  ] });
});
s.displayName = "BoxArrowUp";
export {
  s as BoxArrowUp
};
//# sourceMappingURL=BoxArrowUp.js.map
