import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = s(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M19.827 3.31 7.615 1.154a1.875 1.875 0 0 0-2.174 1.52L2.653 18.518a1.875 1.875 0 0 0 1.521 2.171l12.21 2.157a1.88 1.88 0 0 0 1.538-.41c.338-.284.565-.678.64-1.113l2.79-15.844a1.876 1.876 0 0 0-1.526-2.17m-3.42 17.254L4.934 18.538l2.66-15.104L19.066 5.46zM8.616 6.28a1.125 1.125 0 0 1 1.303-.912l6.3 1.113a1.125 1.125 0 0 1-.187 2.236 1 1 0 0 1-.197-.016L9.528 7.583a1.125 1.125 0 0 1-.912-1.303m-.647 3.693a1.125 1.125 0 0 1 1.304-.912l6.302 1.113a1.125 1.125 0 0 1-.397 2.216l-6.3-1.114a1.125 1.125 0 0 1-.909-1.303m-.656 3.692a1.125 1.125 0 0 1 1.303-.912l3.154.558a1.124 1.124 0 1 1-.391 2.216l-3.151-.556a1.123 1.123 0 0 1-.915-1.306" })
  ] });
});
c.displayName = "ReadCvLogo";
export {
  c as ReadCvLogo
};
//# sourceMappingURL=ReadCvLogo.js.map
