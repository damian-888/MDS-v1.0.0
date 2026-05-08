import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const m = c(({
  size: i = "1em",
  title: d,
  titleId: e,
  ...l
}, a) => {
  const t = h(), o = d ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": d ? void 0 : !0, role: d ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    d ? /* @__PURE__ */ r("title", { id: o, children: d }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M6.375 5.625A6.375 6.375 0 1 0 12.75 12a6.38 6.38 0 0 0-6.375-6.375m0 10.5a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25m10.875-10.5c-2.215 0-3.375 3.207-3.375 6.375s1.16 6.375 3.375 6.375 3.375-3.207 3.375-6.375-1.16-6.375-3.375-6.375m0 10.488c-.35-.203-1.125-1.602-1.125-4.113 0-2.51.774-3.91 1.125-4.113.35.203 1.125 1.602 1.125 4.113 0 2.51-.774 3.91-1.125 4.113M24 6.75v10.5a1.125 1.125 0 1 1-2.25 0V6.75a1.125 1.125 0 1 1 2.25 0" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "MediumLogo";
export {
  m as MediumLogo
};
//# sourceMappingURL=MediumLogo.js.map
