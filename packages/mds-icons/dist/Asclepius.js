import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const n = t(({
  size: h = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const l = v(), r = a ? i ?? l : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.608 5.625h.017a1.125 1.125 0 0 0 0-2.25h-3A4.13 4.13 0 0 0 1.5 7.5v.75a1.125 1.125 0 0 0 1.125 1.125H4.5a4.13 4.13 0 0 0 4.108-3.75M4.5 7.125h-.712a1.875 1.875 0 0 1 1.837-1.5h.713a1.875 1.875 0 0 1-1.838 1.5m16.5.281V7.5a4.13 4.13 0 0 1-4.125 4.125h-3.75v6.75h.75a1.125 1.125 0 0 0 .75-1.964 1.124 1.124 0 1 1 1.5-1.676 3.374 3.374 0 0 1-2.25 5.89h-.75v1.125a1.125 1.125 0 1 1-2.25 0v-1.125h-2.25a1.125 1.125 0 1 1 0-2.25h2.25v-6.75h-1.5A1.125 1.125 0 0 0 9 13.811a1.127 1.127 0 1 1-.75 2.127 3.375 3.375 0 0 1 1.125-6.563h1.5V2.25a1.125 1.125 0 1 1 2.25 0v7.125h3.75A1.875 1.875 0 0 0 18.75 7.5v-.094a1.786 1.786 0 0 0-1.781-1.781h-1.594a1.125 1.125 0 0 1 0-2.25h1.594A4.036 4.036 0 0 1 21 7.406" })
  ] });
});
n.displayName = "Asclepius";
export {
  n as Asclepius
};
//# sourceMappingURL=Asclepius.js.map
