import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const t = m(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.5 18.75a1.125 1.125 0 0 1-1.125 1.125h-3.75a1.125 1.125 0 1 1 0-2.25h3.75A1.125 1.125 0 0 1 22.5 18.75m-2.062-7.722L12 15.948l-8.433-4.92a1.125 1.125 0 0 0-1.13 1.944l9 5.25a1.13 1.13 0 0 0 1.135 0l9-5.25a1.125 1.125 0 1 0-1.134-1.944M1.875 7.5a1.13 1.13 0 0 1 .563-.972l9-5.25a1.13 1.13 0 0 1 1.134 0l9 5.25a1.126 1.126 0 0 1 0 1.944l-9 5.25a1.13 1.13 0 0 1-1.134 0l-9-5.25a1.13 1.13 0 0 1-.563-.972m3.358 0L12 11.448 18.767 7.5 12 3.552zm7.705 12.403-.938.545-8.433-4.92a1.125 1.125 0 0 0-1.13 1.944l9 5.25a1.13 1.13 0 0 0 1.135 0l1.5-.876a1.126 1.126 0 0 0-1.134-1.943" })
  ] });
});
h.displayName = "StackMinus";
export {
  h as StackMinus
};
//# sourceMappingURL=StackMinus.js.map
