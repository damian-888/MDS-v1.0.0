import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: i = "1em",
  title: e,
  titleId: d,
  ...h
}, l) => {
  const a = n(), o = e ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": o, ...h, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16.5 1.125h-9A2.625 2.625 0 0 0 4.875 3.75v16.5A2.625 2.625 0 0 0 7.5 22.875h9a2.625 2.625 0 0 0 2.625-2.625V3.75A2.625 2.625 0 0 0 16.5 1.125m-9.375 6h9.75v9.75h-9.75zm.375-3.75h9a.375.375 0 0 1 .375.375v1.125h-9.75V3.75a.375.375 0 0 1 .375-.375m9 17.25h-9a.375.375 0 0 1-.375-.375v-1.125h9.75v1.125a.375.375 0 0 1-.375.375" })
  ] });
});
m.displayName = "DeviceMobile";
export {
  m as DeviceMobile
};
//# sourceMappingURL=DeviceMobile.js.map
