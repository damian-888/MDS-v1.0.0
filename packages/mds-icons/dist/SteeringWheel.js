import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...a
}, d) => {
  const t = h(), l = e ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": l, ...a, children: [
    e ? /* @__PURE__ */ i("title", { id: l, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M13.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.625-1.5A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-6.605 2.625h3.903q.111-.312.196-.634a10.875 10.875 0 0 0-15.238 0q.085.323.196.634H8.48a1.88 1.88 0 0 1 1.756 1.219l1.505 4.024c.087 0 .172.007.259.007q.129.002.255-.007l1.51-4.03a1.88 1.88 0 0 1 1.755-1.213m-11.357-3.4a13.11 13.11 0 0 1 15.674 0 7.875 7.875 0 0 0-15.674 0m4.977 8.11-.92-2.46H5.822a7.9 7.9 0 0 0 3.318 2.46m9.038-2.46H15.78l-.922 2.46a7.9 7.9 0 0 0 3.32-2.46" })
  ] });
});
s.displayName = "SteeringWheel";
export {
  s as SteeringWheel
};
//# sourceMappingURL=SteeringWheel.js.map
