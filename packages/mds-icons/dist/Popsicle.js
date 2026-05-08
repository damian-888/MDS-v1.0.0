import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...d
}, l) => {
  const t = h(), a = o ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 .375A7.13 7.13 0 0 0 4.875 7.5v9a1.875 1.875 0 0 0 1.875 1.875H9V21a3 3 0 0 0 6 0v-2.625h2.25a1.875 1.875 0 0 0 1.875-1.875v-9A7.13 7.13 0 0 0 12 .375M12.75 21a.75.75 0 1 1-1.5 0v-2.625h1.5zm4.125-4.875h-9.75V7.5a4.875 4.875 0 1 1 9.75 0zm-5.625-9V13.5a1.125 1.125 0 1 1-2.25 0V7.125a1.125 1.125 0 0 1 2.25 0m3.75 0V13.5a1.125 1.125 0 1 1-2.25 0V7.125a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "Popsicle";
export {
  m as Popsicle
};
//# sourceMappingURL=Popsicle.js.map
