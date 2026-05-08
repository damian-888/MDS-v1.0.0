import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as v } from "react";
const h = m(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, l) => {
  const t = v(), a = e ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: a, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18 1.875H6A2.625 2.625 0 0 0 3.375 4.5v15A2.625 2.625 0 0 0 6 22.125h12a2.625 2.625 0 0 0 2.625-2.625v-15A2.625 2.625 0 0 0 18 1.875m.375 17.625a.375.375 0 0 1-.375.375H6a.375.375 0 0 1-.375-.375v-15A.375.375 0 0 1 6 4.125h12a.375.375 0 0 1 .375.375zM13.5 7.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "DeviceTabletCamera";
export {
  h as DeviceTabletCamera
};
//# sourceMappingURL=DeviceTabletCamera.js.map
