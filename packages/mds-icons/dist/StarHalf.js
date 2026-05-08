import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const f = n(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = s(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m22.21 11.052-.475.409a1.125 1.125 0 0 1-1.582-1.594 1.125 1.125 0 0 1 .188-2.243l.775.063a1.917 1.917 0 0 1 1.093 3.363zm-6.035 2.233a1.13 1.13 0 0 0-.36 1.112l.382 1.614a1.125 1.125 0 1 0 2.19-.52l-.226-.948.574-.495a1.125 1.125 0 0 0-1.47-1.703zm3.1 5.958a1.125 1.125 0 0 0-2.22.274 1.125 1.125 0 0 0-1.144 1.937l.63.388a1.912 1.912 0 0 0 2.858-2.077zm-2.869-9.68-1.466-.118a1.13 1.13 0 0 1-.95-.692l-.865-2.102V17.1l.518.318a1.125 1.125 0 0 1-1.174 1.918L12 19.05l-4.54 2.794A1.911 1.911 0 0 1 4.6 19.768l1.238-5.222-4.048-3.494a1.917 1.917 0 0 1 1.092-3.364l5.306-.428 2.046-4.952a1.908 1.908 0 0 1 3.53 0l2.046 4.952.78.062a1.125 1.125 0 0 1-.185 2.241m-5.531 7.534V6.65l-.87 2.105a1.13 1.13 0 0 1-.949.692l-5.194.419 3.963 3.418a1.13 1.13 0 0 1 .36 1.112L6.977 19.5z" })
  ] });
});
f.displayName = "StarHalf";
export {
  f as StarHalf
};
//# sourceMappingURL=StarHalf.js.map
