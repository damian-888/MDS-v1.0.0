import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = h(), e = r ? d ?? a : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.125 12a10.125 10.125 0 1 1-20.25 0c0-3.985 2.318-7.625 5.906-9.271a1.125 1.125 0 1 1 .938 2.045C5.929 6.054 4.125 8.89 4.125 12a7.875 7.875 0 0 0 15.75 0c0-3.11-1.804-5.947-4.594-7.227a1.125 1.125 0 1 1 .938-2.045c3.588 1.646 5.906 5.286 5.906 9.272" })
  ] });
});
s.displayName = "CircleNotch";
export {
  s as CircleNotch
};
//# sourceMappingURL=CircleNotch.js.map
