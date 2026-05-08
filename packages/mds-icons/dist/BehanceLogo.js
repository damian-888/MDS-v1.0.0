import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...i
}, h) => {
  const l = m(), e = o ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ r("title", { id: e, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M11.046 11.38a3.937 3.937 0 0 0-2.983-6.505H3A1.125 1.125 0 0 0 1.875 6v12A1.125 1.125 0 0 0 3 19.125h5.438a4.312 4.312 0 0 0 2.608-7.745M4.125 7.125h3.938a1.687 1.687 0 0 1 0 3.375H4.124zm4.313 9.75H4.125V12.75h4.313a2.062 2.062 0 0 1 0 4.125m6.187-9.75A1.125 1.125 0 0 1 15.75 6h6a1.125 1.125 0 0 1 0 2.25h-6a1.125 1.125 0 0 1-1.125-1.125m4.125 2.25a4.875 4.875 0 1 0 2.128 9.262 1.125 1.125 0 1 0-.983-2.024 2.63 2.63 0 0 1-3.517-1.238H22.5a1.125 1.125 0 0 0 1.125-1.125 4.88 4.88 0 0 0-4.875-4.875m-2.372 3.75a2.626 2.626 0 0 1 4.744 0z" })
  ] });
});
s.displayName = "BehanceLogo";
export {
  s as BehanceLogo
};
//# sourceMappingURL=BehanceLogo.js.map
