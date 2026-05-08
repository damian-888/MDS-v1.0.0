import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: t,
  ...a
}, i) => {
  const l = s(), e = o ? t ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m22.34 12.958-9.75 6A1.126 1.126 0 0 1 10.875 18V8.013L2.84 12.958a1.125 1.125 0 0 1-1.18-1.916l9.75-6A1.125 1.125 0 0 1 13.125 6v9.987l8.035-4.945a1.125 1.125 0 0 1 1.18 1.916" })
  ] });
});
m.displayName = "WaveSawtooth";
export {
  m as WaveSawtooth
};
//# sourceMappingURL=WaveSawtooth.js.map
