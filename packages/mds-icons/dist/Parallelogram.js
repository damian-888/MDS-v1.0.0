import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...d
}, i) => {
  const t = m(), l = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M23.323 4.232a1.87 1.87 0 0 0-1.573-.857H8.326a1.88 1.88 0 0 0-1.71 1.105L.54 17.98a1.875 1.875 0 0 0 1.709 2.645h13.424a1.88 1.88 0 0 0 1.71-1.105l6.075-13.5a1.87 1.87 0 0 0-.136-1.788M15.43 18.375h-12.6L8.57 5.625h12.6z" })
  ] });
});
s.displayName = "Parallelogram";
export {
  s as Parallelogram
};
//# sourceMappingURL=Parallelogram.js.map
