import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: e, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.01 2.992A6.375 6.375 0 0 0 12 2.987L5.426 9.484a1.87 1.87 0 0 0-.55 1.326v6.72l-2.67 2.673a1.127 1.127 0 1 0 1.593 1.594l2.67-2.673h6.722a1.86 1.86 0 0 0 1.326-.549h.005l6.488-6.562a6.38 6.38 0 0 0 0-9.021m-7.426 1.594a4.125 4.125 0 0 1 6.104 5.538h-4.22l2.58-2.579a1.127 1.127 0 1 0-1.593-1.593l-4.83 4.829V6.519zm-6.459 6.382 2.25-2.224v4.287l-2.25 2.25zm5.906 5.906H8.72l4.5-4.5h4.266z" })
  ] });
});
s.displayName = "Feather";
export {
  s as Feather
};
//# sourceMappingURL=Feather.js.map
