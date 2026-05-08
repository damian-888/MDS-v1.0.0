import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...t
}, a) => {
  const i = h(), r = l ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": r, ...t, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m18.675 15.6-4.8-3.6 4.8-3.6a1.125 1.125 0 0 0 0-1.8l-6-4.5a1.125 1.125 0 0 0-1.8.9v6.75l-4.2-3.15a1.125 1.125 0 1 0-1.35 1.8l4.8 3.6-4.8 3.6a1.125 1.125 0 1 0 1.35 1.8l4.2-3.15V21a1.125 1.125 0 0 0 1.8.9l6-4.5a1.125 1.125 0 0 0 0-1.8m-5.55-10.35 3 2.25-3 2.25zm0 13.5v-4.5l3 2.25z" })
  ] });
});
s.displayName = "Bluetooth";
export {
  s as Bluetooth
};
//# sourceMappingURL=Bluetooth.js.map
