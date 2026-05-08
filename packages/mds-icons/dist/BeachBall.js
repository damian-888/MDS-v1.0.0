import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const h = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = c(), e = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M19.875 12q0 .696-.124 1.382a19 19 0 0 0-1.736-2.952q.91.213 1.789.527.07.519.071 1.043m-.9-3.65a19 19 0 0 0-2.813-.513q-.151-1.427-.513-2.813a7.93 7.93 0 0 1 3.325 3.325m-5.932-4.154q.315.88.527 1.789a19 19 0 0 0-2.952-1.736c.8-.145 1.62-.163 2.425-.053M7.6 5.471a16.9 16.9 0 0 1 4.67 2.35 19.14 19.14 0 0 0-7.991 2.63A7.9 7.9 0 0 1 7.6 5.47M4.22 13.186a16.9 16.9 0 0 1 9.808-3.208 16.9 16.9 0 0 1-3.208 9.808 7.895 7.895 0 0 1-6.6-6.6m9.335 6.535a19.14 19.14 0 0 0 2.63-7.99 16.9 16.9 0 0 1 2.35 4.669 7.9 7.9 0 0 1-4.984 3.321z" })
  ] });
});
h.displayName = "BeachBall";
export {
  h as BeachBall
};
//# sourceMappingURL=BeachBall.js.map
