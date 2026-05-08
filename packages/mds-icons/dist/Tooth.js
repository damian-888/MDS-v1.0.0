import { jsxs as c, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const t = n(), a = o ? l ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m16.168 7.795-1.139.455 1.14.455a1.125 1.125 0 1 1-.837 2.09L12 9.461l-3.332 1.333a1.125 1.125 0 1 1-.836-2.09L8.97 8.25l-1.14-.455a1.125 1.125 0 1 1 .837-2.09L12 7.04l3.332-1.333a1.125 1.125 0 1 1 .836 2.09m5.207-.318c.008 7.167-2.363 12.72-4.594 14.305a1.875 1.875 0 0 1-2.947-1.399c-.063-.85-.219-2.062-.606-3.021-.5-1.237-1.048-1.237-1.228-1.237-.727 0-1.103.93-1.226 1.236-.387.958-.543 2.172-.606 3.021a1.875 1.875 0 0 1-2.95 1.4c-2.23-1.585-4.6-7.138-4.593-14.305A5.625 5.625 0 0 1 8.25 1.875h7.5a5.625 5.625 0 0 1 5.625 5.602m-2.25 0a3.375 3.375 0 0 0-3.375-3.352h-7.5a3.375 3.375 0 0 0-3.375 3.354c-.006 5.728 1.672 10.268 3.122 11.969.557-4.823 2.72-5.573 4.003-5.573s3.446.75 4.003 5.572c1.45-1.7 3.128-6.24 3.122-11.968z" })
  ] });
});
m.displayName = "Tooth";
export {
  m as Tooth
};
//# sourceMappingURL=Tooth.js.map
