import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, t) => {
  const a = s(), d = r ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M12 6a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6m0 9.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5" })
  ] });
});
c.displayName = "Record";
export {
  c as Record
};
//# sourceMappingURL=Record.js.map
