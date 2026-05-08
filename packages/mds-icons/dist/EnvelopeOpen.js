import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const v = h(({
  size: l = "1em",
  title: e,
  titleId: d,
  ...i
}, n) => {
  const a = m(), o = e ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": o, ...i, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.624 8.062-9-6a1.125 1.125 0 0 0-1.248 0l-9 6A1.13 1.13 0 0 0 1.875 9v9.75a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V9a1.13 1.13 0 0 0-.5-.938M8.42 14.25l-4.295 3.029v-6.094zm2.301 1.125h2.558l4.252 3H6.473zm4.86-1.125 4.294-3.067v6.094zM12 4.352l7.018 4.679-5.742 4.094h-2.552L4.982 9.03z" })
  ] });
});
v.displayName = "EnvelopeOpen";
export {
  v as EnvelopeOpen
};
//# sourceMappingURL=EnvelopeOpen.js.map
