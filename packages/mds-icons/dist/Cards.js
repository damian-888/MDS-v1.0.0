import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: d = "1em",
  title: r,
  titleId: i,
  ...a
}, l) => {
  const t = h(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.875 6.75h-13.5A1.875 1.875 0 0 0 1.5 8.625v10.5A1.875 1.875 0 0 0 3.375 21h13.5a1.875 1.875 0 0 0 1.875-1.875v-10.5a1.875 1.875 0 0 0-1.875-1.875m-.375 12H3.75V9H16.5zm6-13.875V16.5a1.125 1.125 0 1 1-2.25 0V5.25H6A1.125 1.125 0 0 1 6 3h14.625A1.875 1.875 0 0 1 22.5 4.875" })
  ] });
});
m.displayName = "Cards";
export {
  m as Cards
};
//# sourceMappingURL=Cards.js.map
