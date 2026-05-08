import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: e = "1em",
  title: o,
  titleId: d,
  ...t
}, a) => {
  const i = h(), l = o ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": l, ...t, children: [
    o ? /* @__PURE__ */ r("title", { id: l, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m18.675 15.6-4.8-3.6 4.8-3.6a1.125 1.125 0 0 0 0-1.8l-6-4.5a1.125 1.125 0 0 0-1.8.9v6.75l-4.2-3.15a1.125 1.125 0 1 0-1.35 1.8l4.8 3.6-4.8 3.6a1.125 1.125 0 1 0 1.35 1.8l4.2-3.15V21a1.125 1.125 0 0 0 1.8.9l6-4.5a1.125 1.125 0 0 0 0-1.8m-5.55-10.35 3 2.25-3 2.25zm0 13.5v-4.5l3 2.25zM5.25 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "BluetoothConnected";
export {
  s as BluetoothConnected
};
//# sourceMappingURL=BluetoothConnected.js.map
