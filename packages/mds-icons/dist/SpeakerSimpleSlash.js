import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const m = s(), e = a ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: e, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M23.25 8.25v7.5a1.125 1.125 0 1 1-2.25 0v-7.5a1.125 1.125 0 1 1 2.25 0m-2.168 11.243a1.126 1.126 0 1 1-1.665 1.514l-3.292-3.622V21a1.125 1.125 0 0 1-1.816.888l-6.445-5.013H3.75A1.875 1.875 0 0 1 1.875 15V9A1.875 1.875 0 0 1 3.75 7.125h3.048l-2.38-2.618a1.125 1.125 0 0 1 1.664-1.514zm-7.207-4.587L8.843 9.375H4.125v5.25H8.25c.25 0 .493.084.69.237l4.935 3.837zm-1.327-8.578 1.327-1.031v3.6a1.125 1.125 0 1 0 2.25 0V3a1.124 1.124 0 0 0-1.816-.888l-3.141 2.444a1.125 1.125 0 1 0 1.38 1.776zm6.202 7.823a1.125 1.125 0 0 0 1.125-1.125V9.75a1.125 1.125 0 1 0-2.25 0v3.276a1.125 1.125 0 0 0 1.125 1.125" })
  ] });
});
h.displayName = "SpeakerSimpleSlash";
export {
  h as SpeakerSimpleSlash
};
//# sourceMappingURL=SpeakerSimpleSlash.js.map
