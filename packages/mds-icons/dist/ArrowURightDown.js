import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as w, useId as h } from "react";
const s = w(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...a
}, e) => {
  const t = h(), i = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m21.046 17.296-4.5 4.5a1.125 1.125 0 0 1-1.594 0l-4.5-4.5a1.124 1.124 0 0 1 0-1.594 1.125 1.125 0 0 1 1.594 0l2.579 2.58V8.25a4.125 4.125 0 0 0-8.25 0v8.25a1.125 1.125 0 0 1-2.25 0V8.25a6.375 6.375 0 0 1 12.75 0v10.031l2.58-2.58a1.124 1.124 0 0 1 1.593 0 1.124 1.124 0 0 1 0 1.594z" })
  ] });
});
s.displayName = "ArrowURightDown";
export {
  s as ArrowURightDown
};
//# sourceMappingURL=ArrowURightDown.js.map
