import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: l,
  titleId: e,
  ...d
}, t) => {
  const i = s(), a = l ? e ?? i : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: t, "aria-labelledby": a, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: a, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.082 19.493-15-16.5a1.125 1.125 0 0 0-1.665 1.514l6.364 7L5.325 15.6a1.125 1.125 0 1 0 1.35 1.8l4.2-3.15V21a1.125 1.125 0 0 0 1.8.9l4.491-3.37 2.25 2.477a1.125 1.125 0 0 0 1.665-1.514zm-7.957-.743v-4.5l.469.353 2.05 2.256zM10.875 5.6V3a1.125 1.125 0 0 1 1.8-.9l6 4.5a1.125 1.125 0 0 1 0 1.8l-2.54 1.906a1.125 1.125 0 1 1-1.35-1.8l1.34-1.006-3-2.25v.35a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
m.displayName = "BluetoothSlash";
export {
  m as BluetoothSlash
};
//# sourceMappingURL=BluetoothSlash.js.map
