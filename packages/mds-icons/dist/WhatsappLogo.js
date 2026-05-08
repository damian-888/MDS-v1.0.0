import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const p = s(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = h(), l = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: l, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M17.559 14.912a3.384 3.384 0 0 1-3.31 2.713A7.884 7.884 0 0 1 6.376 9.75a3.38 3.38 0 0 1 2.713-3.31 1.125 1.125 0 0 1 1.224.6l1.076 2.157a1.12 1.12 0 0 1-.07 1.125l-.799 1.198a4.18 4.18 0 0 0 1.96 1.96l1.199-.798a1.13 1.13 0 0 1 1.125-.07l2.156 1.076a1.125 1.125 0 0 1 .6 1.224M22.125 12a10.126 10.126 0 0 1-14.74 9.014l-3.041 1.017a1.875 1.875 0 0 1-2.376-2.375l1.014-3.04A10.125 10.125 0 1 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 5.18 15.943a1.13 1.13 0 0 1 .094.92l-.931 2.793 2.793-.931q.174-.057.356-.058c.198 0 .392.052.563.152A7.876 7.876 0 0 0 19.875 12" })
  ] });
});
p.displayName = "WhatsappLogo";
export {
  p as WhatsappLogo
};
//# sourceMappingURL=WhatsappLogo.js.map
