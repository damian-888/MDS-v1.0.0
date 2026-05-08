import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, l) => {
  const t = m(), a = e ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: a, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.5 1.125h-9A2.625 2.625 0 0 0 4.875 3.75v16.5A2.625 2.625 0 0 0 7.5 22.875h9a2.625 2.625 0 0 0 2.625-2.625V3.75A2.625 2.625 0 0 0 16.5 1.125m.375 19.125a.375.375 0 0 1-.375.375h-9a.375.375 0 0 1-.375-.375V3.75a.375.375 0 0 1 .375-.375h9a.375.375 0 0 1 .375.375zM13.5 6.375a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "DeviceMobileCamera";
export {
  s as DeviceMobileCamera
};
//# sourceMappingURL=DeviceMobileCamera.js.map
