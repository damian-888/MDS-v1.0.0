import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...e
}, o) => {
  const t = m(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.406 3.375H4.594a1.97 1.97 0 0 0-1.969 1.969v4.613a1.97 1.97 0 0 0 1.154 1.792l5.25 2.388a4.875 4.875 0 1 0 5.936 0l5.25-2.388a1.97 1.97 0 0 0 1.16-1.792V5.344a1.97 1.97 0 0 0-1.969-1.969M12 13.015 9.375 11.82V5.625h5.25v6.196zm-7.125-7.39h2.25v5.173l-2.25-1.023zm7.125 15a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25m7.125-10.85-2.25 1.023V5.625h2.25z" })
  ] });
});
s.displayName = "MedalMilitary";
export {
  s as MedalMilitary
};
//# sourceMappingURL=MedalMilitary.js.map
