import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = m(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M7.46 18.428a5.625 5.625 0 0 1 9.08 0 7.85 7.85 0 0 1-9.08 0m1.915-7.178a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0m8.813 5.62a7.8 7.8 0 0 0-2.72-2.196 4.875 4.875 0 1 0-6.937 0 7.8 7.8 0 0 0-2.719 2.195 7.875 7.875 0 1 1 12.366 0z" })
  ] });
});
c.displayName = "UserCircle";
export {
  c as UserCircle
};
//# sourceMappingURL=UserCircle.js.map
