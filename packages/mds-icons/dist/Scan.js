import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const n = m(), o = a ? e ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 3.75V7.5a1.125 1.125 0 1 1-2.25 0V4.875H16.5a1.125 1.125 0 0 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125M7.5 19.125H4.875V16.5a1.125 1.125 0 0 0-2.25 0v3.75a1.125 1.125 0 0 0 1.125 1.125H7.5a1.125 1.125 0 1 0 0-2.25m12.75-3.75a1.125 1.125 0 0 0-1.125 1.125v2.625H16.5a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 0 0 1.125-1.125V16.5a1.125 1.125 0 0 0-1.125-1.125m-16.5-6.75A1.125 1.125 0 0 0 4.875 7.5V4.875H7.5a1.125 1.125 0 0 0 0-2.25H3.75A1.125 1.125 0 0 0 2.625 3.75V7.5A1.125 1.125 0 0 0 3.75 8.625M7.875 6.75h8.25a1.125 1.125 0 0 1 1.125 1.125v8.25a1.125 1.125 0 0 1-1.125 1.125h-8.25a1.125 1.125 0 0 1-1.125-1.125v-8.25A1.125 1.125 0 0 1 7.875 6.75M9 15h6V9H9z" })
  ] });
});
s.displayName = "Scan";
export {
  s as Scan
};
//# sourceMappingURL=Scan.js.map
