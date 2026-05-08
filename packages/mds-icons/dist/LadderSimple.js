import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const n = h(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...l
}, a) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18 1.875A1.125 1.125 0 0 0 16.875 3v2.625h-9.75V3a1.125 1.125 0 0 0-2.25 0v18a1.125 1.125 0 0 0 2.25 0v-2.625h9.75V21a1.125 1.125 0 1 0 2.25 0V3A1.125 1.125 0 0 0 18 1.875m-1.125 6v3h-9.75v-3zm-9.75 8.25v-3h9.75v3z" })
  ] });
});
n.displayName = "LadderSimple";
export {
  n as LadderSimple
};
//# sourceMappingURL=LadderSimple.js.map
