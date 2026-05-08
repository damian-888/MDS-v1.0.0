import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, a) => {
  const t = h(), d = o ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 1.875H6.75A3.375 3.375 0 0 0 3.375 5.25V21A1.125 1.125 0 0 0 4.5 22.125H18a1.125 1.125 0 1 0 0-2.25H5.625V19.5a1.125 1.125 0 0 1 1.125-1.125H19.5a1.125 1.125 0 0 0 1.125-1.125V3A1.125 1.125 0 0 0 19.5 1.875m-1.125 14.25H6.75c-.383 0-.764.065-1.125.193V5.25A1.125 1.125 0 0 1 6.75 4.125h11.625z" })
  ] });
});
m.displayName = "Book";
export {
  m as Book
};
//# sourceMappingURL=Book.js.map
