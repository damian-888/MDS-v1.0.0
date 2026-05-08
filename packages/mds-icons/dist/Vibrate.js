import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const v = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, t) => {
  const l = m(), e = a ? o ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15.375 2.625h-6.75A2.625 2.625 0 0 0 6 5.25v13.5a2.625 2.625 0 0 0 2.625 2.625h6.75A2.625 2.625 0 0 0 18 18.75V5.25a2.625 2.625 0 0 0-2.625-2.625m.375 16.125a.375.375 0 0 1-.375.375h-6.75a.375.375 0 0 1-.375-.375V5.25a.375.375 0 0 1 .375-.375h6.75a.375.375 0 0 1 .375.375zm6-9.375v5.25a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 1 1 2.25 0m-17.25 0v5.25a1.125 1.125 0 0 1-2.25 0v-5.25a1.125 1.125 0 0 1 2.25 0" })
  ] });
});
v.displayName = "Vibrate";
export {
  v as Vibrate
};
//# sourceMappingURL=Vibrate.js.map
