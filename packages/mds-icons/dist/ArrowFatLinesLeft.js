import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const t = h(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12.75 6.376h-.375V3a1.126 1.126 0 0 0-1.921-.796l-9 9a1.127 1.127 0 0 0 0 1.594l9 9a1.125 1.125 0 0 0 1.92-.798v-3.375h.376a1.125 1.125 0 0 0 1.125-1.125v-9a1.125 1.125 0 0 0-1.125-1.125m-1.125 9h-.375a1.125 1.125 0 0 0-1.125 1.125v1.781l-6.281-6.281 6.28-6.281V7.5a1.125 1.125 0 0 0 1.126 1.126h.375zm9.75-7.875v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 1 1 2.25 0m-3.75 0v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
s.displayName = "ArrowFatLinesLeft";
export {
  s as ArrowFatLinesLeft
};
//# sourceMappingURL=ArrowFatLinesLeft.js.map
