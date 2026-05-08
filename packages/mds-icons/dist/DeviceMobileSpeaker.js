import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...d
}, l) => {
  const h = s(), i = e ? a ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.5 1.125h-9A2.625 2.625 0 0 0 4.875 3.75v16.5A2.625 2.625 0 0 0 7.5 22.875h9a2.625 2.625 0 0 0 2.625-2.625V3.75A2.625 2.625 0 0 0 16.5 1.125m.375 19.125a.375.375 0 0 1-.375.375h-9a.375.375 0 0 1-.375-.375V3.75a.375.375 0 0 1 .375-.375h9a.375.375 0 0 1 .375.375zM15.375 6a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 0 1 0-2.25h4.5A1.125 1.125 0 0 1 15.375 6" })
  ] });
});
c.displayName = "DeviceMobileSpeaker";
export {
  c as DeviceMobileSpeaker
};
//# sourceMappingURL=DeviceMobileSpeaker.js.map
