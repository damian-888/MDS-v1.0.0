import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const p = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, a) => {
  const t = m(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.875 6H3.75a1.125 1.125 0 0 0-1.125 1.125V20.25a1.125 1.125 0 0 0 1.125 1.125h13.125A1.125 1.125 0 0 0 18 20.25V7.125A1.125 1.125 0 0 0 16.875 6M15.75 19.125H4.875V8.25H15.75zM21.375 3.75v13.125a1.125 1.125 0 1 1-2.25 0v-12h-12a1.125 1.125 0 0 1 0-2.25H20.25a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
p.displayName = "CopySimple";
export {
  p as CopySimple
};
//# sourceMappingURL=CopySimple.js.map
