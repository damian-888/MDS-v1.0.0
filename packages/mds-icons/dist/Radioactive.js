import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const m = c(({
  size: i = "1em",
  title: a,
  titleId: d,
  ...l
}, e) => {
  const t = h(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": o, ...l, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9 12a1.125 1.125 0 0 0-1.125-1.124H4.169a7.86 7.86 0 0 1 2.925-5.073l1.848 3.198a1.125 1.125 0 1 0 1.948-1.125L8.827 4.313a1.875 1.875 0 0 0-2.706-.594 10.11 10.11 0 0 0-4.243 7.35 1.895 1.895 0 0 0 1.116 1.897c.238.105.495.16.756.16h4.125A1.125 1.125 0 0 0 9 12m13.117-.931a10.1 10.1 0 0 0-4.243-7.35 1.875 1.875 0 0 0-2.706.594L13.11 7.876A1.125 1.125 0 0 0 15.058 9l1.848-3.2a7.86 7.86 0 0 1 2.925 5.075h-3.706a1.125 1.125 0 1 0 0 2.25h4.125a1.88 1.88 0 0 0 1.775-1.282c.084-.25.116-.513.092-.775m-7.08 3.942a1.125 1.125 0 1 0-1.949 1.125l1.836 3.177a7.9 7.9 0 0 1-5.848 0l1.835-3.179a1.125 1.125 0 1 0-1.949-1.125l-2.045 3.544a1.875 1.875 0 0 0 .835 2.639 10.15 10.15 0 0 0 8.496 0 1.874 1.874 0 0 0 .835-2.639z" })
  ] });
});
m.displayName = "Radioactive";
export {
  m as Radioactive
};
//# sourceMappingURL=Radioactive.js.map
