import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...d
}, l) => {
  const m = h(), o = a ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: o, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 13.5a3.374 3.374 0 1 1 0-6.749 3.374 3.374 0 0 1 0 6.749m3.1-8.062a5.6 5.6 0 0 0-1.975-.825V4.207a7.83 7.83 0 0 1 3.589 1.488zm-4.225-.825a5.6 5.6 0 0 0-1.974.824L7.286 5.696a7.83 7.83 0 0 1 3.589-1.488zM7.313 8.901a5.6 5.6 0 0 0-.825 1.974H4.207a7.84 7.84 0 0 1 1.488-3.589zm-.825 4.224a5.6 5.6 0 0 0 .824 1.974l-1.617 1.615a7.84 7.84 0 0 1-1.488-3.589zm2.413 3.563c.598.399 1.269.679 1.974.824v2.281a7.83 7.83 0 0 1-3.589-1.488zm4.224.824a5.6 5.6 0 0 0 1.974-.825l1.615 1.615a7.83 7.83 0 0 1-3.589 1.491zm3.563-2.413c.399-.598.679-1.269.824-1.974h2.281a7.84 7.84 0 0 1-1.488 3.589zm.824-4.224a5.6 5.6 0 0 0-.825-1.974l1.615-1.615a7.84 7.84 0 0 1 1.491 3.589z" })
  ] });
});
s.displayName = "PokerChip";
export {
  s as PokerChip
};
//# sourceMappingURL=PokerChip.js.map
