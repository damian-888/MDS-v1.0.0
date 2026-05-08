import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const c = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, e) => {
  const n = m(), i = r ? o ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M8.625 2.25c-2.208 0-3.75 1.85-3.75 4.5s1.542 4.5 3.75 4.5 3.75-1.85 3.75-4.5-1.542-4.5-3.75-4.5m0 6.75c-1.458 0-1.5-2.02-1.5-2.25s.042-2.25 1.5-2.25 1.5 2.02 1.5 2.25S10.083 9 8.625 9m4.994-3.997a1.125 1.125 0 0 1 .503-1.509l2.25-1.125A1.125 1.125 0 0 1 18 3.375v6.75a1.125 1.125 0 1 1-2.25 0v-4.93l-.622.31a1.125 1.125 0 0 1-1.509-.502m1.756 7.747c-2.208 0-3.75 1.85-3.75 4.5s1.542 4.5 3.75 4.5 3.75-1.85 3.75-4.5-1.542-4.5-3.75-4.5m0 6.75c-1.458 0-1.5-2.02-1.5-2.25s.042-2.25 1.5-2.25 1.5 2.02 1.5 2.25-.042 2.25-1.5 2.25M9.75 13.875v6.75a1.125 1.125 0 0 1-2.25 0v-4.93l-.622.31a1.124 1.124 0 0 1-1.582-1.36 1.13 1.13 0 0 1 .576-.65l2.25-1.126a1.124 1.124 0 0 1 1.628 1.006" })
  ] });
});
c.displayName = "Binary";
export {
  c as Binary
};
//# sourceMappingURL=Binary.js.map
