import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const t = m(), d = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: d, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12.75 16.502A6.75 6.75 0 1 0 6 9.752a6.757 6.757 0 0 0 6.75 6.75m0-11.25a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m1.125 14.939v1.186h1.875a1.125 1.125 0 0 1 0 2.25h-6a1.125 1.125 0 1 1 0-2.25h1.875v-1.185a10.5 10.5 0 0 1-6.573-17.58A1.125 1.125 0 1 1 6.7 4.142a8.25 8.25 0 0 0 11.66 11.66 1.126 1.126 0 1 1 1.53 1.648 10.46 10.46 0 0 1-6.016 2.74" })
  ] });
});
s.displayName = "GlobeStand";
export {
  s as GlobeStand
};
//# sourceMappingURL=GlobeStand.js.map
