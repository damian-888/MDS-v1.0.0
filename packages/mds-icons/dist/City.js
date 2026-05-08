import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as l } from "react";
const n = t(({
  size: v = "1em",
  title: a,
  titleId: o,
  ...d
}, h) => {
  const e = l(), r = a ? o ?? e : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: v, height: v, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.5 19.125h-.375V8.25A1.125 1.125 0 0 0 21 7.125h-6.75a1.125 1.125 0 0 0-1.125 1.125v3.375h-2.25V3.75A1.125 1.125 0 0 0 9.75 2.625H3A1.125 1.125 0 0 0 1.875 3.75v15.375H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25m-7.125-9.75h4.5v9.75h-4.5zm-2.25 4.5v5.25h-2.25v-5.25zm-9-9h4.5v14.25h-4.5zM7.5 7.125v.75a1.125 1.125 0 0 1-2.25 0v-.75a1.125 1.125 0 0 1 2.25 0m0 4.5v.75a1.125 1.125 0 0 1-2.25 0v-.75a1.125 1.125 0 0 1 2.25 0m0 4.5v.75a1.125 1.125 0 0 1-2.25 0v-.75a1.125 1.125 0 0 1 2.25 0m9 .75v-.75a1.125 1.125 0 1 1 2.25 0v.75a1.125 1.125 0 1 1-2.25 0m0-4.5v-.75a1.125 1.125 0 1 1 2.25 0v.75a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
n.displayName = "City";
export {
  n as City
};
//# sourceMappingURL=City.js.map
