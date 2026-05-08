import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const t = s(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M13.875 18.75a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0M12 15a1.125 1.125 0 0 0 1.125-1.125V4.5a1.125 1.125 0 1 0-2.25 0v9.375A1.125 1.125 0 0 0 12 15" })
  ] });
});
c.displayName = "ExclamationMark";
export {
  c as ExclamationMark
};
//# sourceMappingURL=ExclamationMark.js.map
