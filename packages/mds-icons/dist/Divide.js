import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...a
}, l) => {
  const t = h(), d = i ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": d, ...a, children: [
    i ? /* @__PURE__ */ e("title", { id: d, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12M12 7.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75m0 8.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75" })
  ] });
});
m.displayName = "Divide";
export {
  m as Divide
};
//# sourceMappingURL=Divide.js.map
