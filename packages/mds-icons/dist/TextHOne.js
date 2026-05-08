import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...i
}, l) => {
  const t = h(), o = e ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    e ? /* @__PURE__ */ a("title", { id: o, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.125 10.5v9a1.125 1.125 0 1 1-2.25 0v-6.898l-.5.335a1.127 1.127 0 0 1-1.25-1.874l2.25-1.5a1.125 1.125 0 0 1 1.75.937M13.5 4.125a1.125 1.125 0 0 0-1.125 1.125v4.5h-7.5v-4.5a1.125 1.125 0 0 0-2.25 0V16.5a1.125 1.125 0 0 0 2.25 0V12h7.5v4.5a1.125 1.125 0 1 0 2.25 0V5.25A1.125 1.125 0 0 0 13.5 4.125" })
  ] });
});
s.displayName = "TextHOne";
export {
  s as TextHOne
};
//# sourceMappingURL=TextHOne.js.map
