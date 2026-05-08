import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: i,
  titleId: d,
  ...t
}, e) => {
  const l = m(), r = i ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: e, "aria-labelledby": r, ...t, children: [
    i ? /* @__PURE__ */ a("title", { id: r, children: i }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.625 12.375V19.5a1.875 1.875 0 0 1-1.875 1.875H4.5A1.875 1.875 0 0 1 2.625 19.5V5.25A1.875 1.875 0 0 1 4.5 3.375h7.125a1.125 1.125 0 0 1 0 2.25h-6.75v13.5h13.5v-6.75a1.125 1.125 0 1 1 2.25 0m1.5-6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0m-2.25 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" })
  ] });
});
s.displayName = "Notification";
export {
  s as Notification
};
//# sourceMappingURL=Notification.js.map
