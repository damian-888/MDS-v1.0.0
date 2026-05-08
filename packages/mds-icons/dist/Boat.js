import { jsxs as v, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const t = h(), l = o ? d ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: l, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m20.843 10.012-.968-.323V5.25A1.875 1.875 0 0 0 18 3.375h-4.875V2.25a1.125 1.125 0 1 0-2.25 0v1.125H6A1.875 1.875 0 0 0 4.125 5.25v4.44l-.968.322a1.875 1.875 0 0 0-1.282 1.78v2.458c0 6.06 9.45 8.49 9.852 8.591.18.045.367.045.546 0 .402-.1 9.852-2.532 9.852-8.591v-2.46a1.875 1.875 0 0 0-1.282-1.778M6.375 5.625h11.25v3.314l-5.27-1.756a1.1 1.1 0 0 0-.71 0L6.375 8.94zm13.5 8.625c0 3.44-5.445 5.665-7.875 6.337-2.432-.673-7.875-2.897-7.875-6.337v-2.19l6.75-2.25v5.94a1.125 1.125 0 1 0 2.25 0V9.81l6.75 2.25z" })
  ] });
});
m.displayName = "Boat";
export {
  m as Boat
};
//# sourceMappingURL=Boat.js.map
