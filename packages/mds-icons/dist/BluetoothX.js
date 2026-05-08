import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: o = "1em",
  title: l,
  titleId: e,
  ...d
}, t) => {
  const i = h(), a = l ? e ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: t, "aria-labelledby": a, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: a, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m17.175 15.6-4.8-3.6 1.088-.817a1.125 1.125 0 1 0-1.35-1.8l-.488.367v-4.5l.488.367a1.125 1.125 0 0 0 1.35-1.8L11.175 2.1a1.125 1.125 0 0 0-1.8.9v6.75l-4.2-3.15a1.125 1.125 0 1 0-1.35 1.8l4.8 3.6-4.8 3.6a1.125 1.125 0 1 0 1.35 1.8l4.2-3.15V21a1.125 1.125 0 0 0 1.8.9l6-4.5a1.125 1.125 0 0 0 0-1.8m-5.55 3.15v-4.5l3 2.25zm10.92-9.796a1.127 1.127 0 1 1-1.593 1.594L19.5 9.094l-1.454 1.455a1.124 1.124 0 0 1-1.594 0 1.124 1.124 0 0 1 0-1.594L17.906 7.5l-1.451-1.454a1.127 1.127 0 0 1 1.594-1.594L19.5 5.906l1.454-1.455a1.127 1.127 0 1 1 1.594 1.594L21.094 7.5z" })
  ] });
});
s.displayName = "BluetoothX";
export {
  s as BluetoothX
};
//# sourceMappingURL=BluetoothX.js.map
