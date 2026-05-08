import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const t = h(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...i
}, c) => {
  const l = m(), e = a ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: c, "aria-labelledby": e, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M14.41 1.152a1.125 1.125 0 0 0-1.07-.777H9.159a1.125 1.125 0 0 0-1.07.777 42.6 42.6 0 0 0-1.346 5.652c-.698 4.251-.402 7.3.878 9.062.6.84 1.494 1.425 2.504 1.639v3.87H9a1.125 1.125 0 1 0 0 2.25h4.5a1.125 1.125 0 1 0 0-2.25h-1.125v-3.87a4.14 4.14 0 0 0 2.503-1.639c1.28-1.762 1.576-4.811.879-9.062a42.6 42.6 0 0 0-1.348-5.652m-1.907 1.473c.195.68.482 1.753.742 3H9.253c.26-1.247.548-2.32.743-3zm.554 11.92c-.413.562-.987.83-1.808.83s-1.395-.264-1.807-.83c-.828-1.139-1.032-3.494-.586-6.67h4.787c.445 3.176.241 5.531-.586 6.67M22.5 5.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-5.625-3.375a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M20.25 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
t.displayName = "Champagne";
export {
  t as Champagne
};
//# sourceMappingURL=Champagne.js.map
