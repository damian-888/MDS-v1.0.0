import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const t = s(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.822 5.817a1.87 1.87 0 0 0-.85-1.16 19.27 19.27 0 0 0-19.944 0A1.875 1.875 0 0 0 1.4 7.233l9 14.743a1.876 1.876 0 0 0 3.206 0l9-14.743a1.86 1.86 0 0 0 .216-1.416M12 4.125c2.976-.003 5.9.778 8.48 2.263l-.792 1.3a15.39 15.39 0 0 0-15.375 0l-.793-1.3A16.96 16.96 0 0 1 12 4.125m-4.136 9.38L5.92 10.319a1.875 1.875 0 0 1 1.944 3.188M12 20.285l-2.959-4.848a4.124 4.124 0 0 0-.435-7.119 13.17 13.17 0 0 1 9.91 1.289l-.838 1.374a4.125 4.125 0 0 0-4.29 7.031zm1.875-5.659a1.874 1.874 0 0 1 2.625-1.717l-1.935 3.171a1.87 1.87 0 0 1-.69-1.454" })
  ] });
});
c.displayName = "Pizza";
export {
  c as Pizza
};
//# sourceMappingURL=Pizza.js.map
