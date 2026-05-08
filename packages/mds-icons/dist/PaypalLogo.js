import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const h = m(), o = a ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.931 8.539a5.6 5.6 0 0 0-1.828-1.526A5.625 5.625 0 0 0 13.5 1.875H7.875a1.875 1.875 0 0 0-1.819 1.42l-3.375 13.5a1.875 1.875 0 0 0 1.819 2.33h2.099l-.168.67a1.875 1.875 0 0 0 1.819 2.33h2.953a1.875 1.875 0 0 0 1.819-1.42l.771-3.08H16.5a5.625 5.625 0 0 0 4.433-9.086zM8.168 4.125H13.5a3.35 3.35 0 0 1 2.66 1.298c.226.289.404.612.527.958-.062 0-.123-.006-.187-.006h-5.25a1.875 1.875 0 0 0-1.819 1.42l-2.27 9.08h-2.18zm8.509 4.505a3.37 3.37 0 0 1-3.177 2.245h-2.52l.563-2.25H16.5q.088-.001.177.005m3.094 4.188a3.37 3.37 0 0 1-3.271 2.557h-3a1.875 1.875 0 0 0-1.819 1.42l-.77 3.08h-2.18l1.687-6.75H13.5a5.615 5.615 0 0 0 5.26-3.633 3.39 3.39 0 0 1 1.013 3.326z" })
  ] });
});
s.displayName = "PaypalLogo";
export {
  s as PaypalLogo
};
//# sourceMappingURL=PaypalLogo.js.map
