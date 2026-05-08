import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, o) => {
  const t = n(), i = a ? d ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: i, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.116 21.611a1.124 1.124 0 1 1-2.231.28l-.75-6a1.13 1.13 0 0 1 .44-1.04 6.4 6.4 0 0 0 2.55-5.25c0-.075-.007-.15-.01-.224h-1.338l-2.166 2.598a2.256 2.256 0 1 1-1.729-1.44l2.503-3a1.13 1.13 0 0 1 .865-.41h1.304a6.39 6.39 0 0 0-5.804-3.75V5.18a2.25 2.25 0 1 1-2.25 0V3.783A6.385 6.385 0 0 0 6.375 9.75c0 .18-.044.359-.128.52l-1.98 3.806 2.201 1.008a1.12 1.12 0 0 1 .657 1.023v3.018h4.125a1.125 1.125 0 1 1 0 2.25h-4.5A1.875 1.875 0 0 1 4.875 19.5V16.83l-1.929-.883-.035-.017a1.875 1.875 0 0 1-.849-2.491l2.063-3.972a8.625 8.625 0 0 1 9.093-8.329c4.472.235 8.056 3.93 8.157 8.41a8.65 8.65 0 0 1-2.93 6.68z" })
  ] });
});
s.displayName = "HeadCircuit";
export {
  s as HeadCircuit
};
//# sourceMappingURL=HeadCircuit.js.map
