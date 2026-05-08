import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, l) => {
  const t = s(), i = o ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: i, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m23.336 9.75-3.152-3.504a1.88 1.88 0 0 0-1.393-.621h-5.666V3a1.125 1.125 0 1 0-2.25 0v2.625H3.75A1.875 1.875 0 0 0 1.875 7.5v6a1.875 1.875 0 0 0 1.875 1.875h7.125V21a1.125 1.125 0 1 0 2.25 0v-5.625h5.666a1.88 1.88 0 0 0 1.393-.62l3.152-3.505a1.125 1.125 0 0 0 0-1.5m-4.712 3.375H4.125v-5.25h14.5l2.362 2.625z" })
  ] });
});
m.displayName = "Signpost";
export {
  m as Signpost
};
//# sourceMappingURL=Signpost.js.map
