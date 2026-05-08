import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...l
}, t) => {
  const a = s(), i = r ? e ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.125 6v9.75a1.125 1.125 0 0 1-2.25 0V8.719L6.795 18.796a1.127 1.127 0 1 1-1.593-1.594l10.08-10.077H8.25a1.125 1.125 0 0 1 0-2.25H18A1.125 1.125 0 0 1 19.125 6" })
  ] });
});
w.displayName = "ArrowUpRight";
export {
  w as ArrowUpRight
};
//# sourceMappingURL=ArrowUpRight.js.map
