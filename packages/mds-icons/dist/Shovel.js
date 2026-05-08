import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: l,
  titleId: a,
  ...d
}, i) => {
  const t = m(), r = l ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m23.296 5.205-4.5-4.5a1.126 1.126 0 0 0-1.924.797c0 .299.119.585.33.797l1.454 1.452-6.128 6.128-2.952-2.954a1.875 1.875 0 0 0-2.652 0l-5.25 5.25a1.87 1.87 0 0 0-.549 1.326v7.5A1.875 1.875 0 0 0 3 22.876h7.5a1.86 1.86 0 0 0 1.326-.55l5.25-5.25a1.875 1.875 0 0 0 0-2.65l-2.954-2.956 6.128-6.125L21.704 6.8a1.127 1.127 0 1 0 1.594-1.594zm-8.077 10.546-4.875 4.875H3.375v-6.97L8.25 8.783l2.69 2.688-3.486 3.485a1.127 1.127 0 1 0 1.594 1.594l3.485-3.486z" })
  ] });
});
s.displayName = "Shovel";
export {
  s as Shovel
};
//# sourceMappingURL=Shovel.js.map
