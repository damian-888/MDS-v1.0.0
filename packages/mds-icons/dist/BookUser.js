import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, l) => {
  const t = h(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: e, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.75 6.75H15a4.11 4.11 0 0 0-3 1.3 4.11 4.11 0 0 0-3-1.3H2.25a1.125 1.125 0 0 0-1.125 1.126V18.75a1.125 1.125 0 0 0 1.125 1.125H9a1.875 1.875 0 0 1 1.875 1.875 1.125 1.125 0 1 0 2.25 0A1.875 1.875 0 0 1 15 19.876h6.75a1.125 1.125 0 0 0 1.125-1.125V7.876A1.125 1.125 0 0 0 21.75 6.75M9 17.627H3.375V9H9a1.875 1.875 0 0 1 1.875 1.875v7.2A4.1 4.1 0 0 0 9 17.627m11.625 0H15c-.652 0-1.295.155-1.875.453v-7.203A1.875 1.875 0 0 1 15 9h5.625zM8.1 3.825a4.875 4.875 0 0 1 7.8 0 1.125 1.125 0 1 1-1.8 1.352 2.624 2.624 0 0 0-4.2 0 1.125 1.125 0 0 1-1.8-1.352" })
  ] });
});
m.displayName = "BookUser";
export {
  m as BookUser
};
//# sourceMappingURL=BookUser.js.map
