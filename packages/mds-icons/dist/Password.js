import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const v = n(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const s = m(), r = a ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M4.5 5.25v13.5a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0m8.13 4.753-1.38.448V9A1.125 1.125 0 1 0 9 9v1.451l-1.38-.448a1.125 1.125 0 1 0-.696 2.14l1.38.449-.853 1.173a1.125 1.125 0 1 0 1.82 1.323l.854-1.174.853 1.174a1.125 1.125 0 1 0 1.82-1.323l-.852-1.173 1.38-.45a1.124 1.124 0 1 0-.695-2.139m10.793.722a1.124 1.124 0 0 0-1.417-.722l-1.381.448V9a1.125 1.125 0 1 0-2.25 0v1.451l-1.38-.448a1.126 1.126 0 1 0-.696 2.14l1.38.449-.853 1.173a1.125 1.125 0 1 0 1.82 1.323l.854-1.174.853 1.174a1.125 1.125 0 1 0 1.82-1.323l-.852-1.173 1.38-.45a1.12 1.12 0 0 0 .722-1.417" })
  ] });
});
v.displayName = "Password";
export {
  v as Password
};
//# sourceMappingURL=Password.js.map
