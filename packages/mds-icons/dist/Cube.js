import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const m = s(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...a
}, i) => {
  const t = v(), e = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    l ? /* @__PURE__ */ o("title", { id: e, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.15 5.872 12.9 1.356a1.87 1.87 0 0 0-1.8 0L2.85 5.872a1.88 1.88 0 0 0-.975 1.646v8.964a1.88 1.88 0 0 0 .975 1.645l8.25 4.516a1.87 1.87 0 0 0 1.8 0l8.25-4.516a1.87 1.87 0 0 0 .975-1.645V7.518a1.87 1.87 0 0 0-.975-1.646M12 3.428l6.75 3.697L12 10.819 5.25 7.125zM4.125 9.074l6.75 3.694v7.187l-6.75-3.695zm9 10.881v-7.187l6.75-3.694v7.186z" })
  ] });
});
m.displayName = "Cube";
export {
  m as Cube
};
//# sourceMappingURL=Cube.js.map
