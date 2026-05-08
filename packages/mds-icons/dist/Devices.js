import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: e = "1em",
  title: a,
  titleId: o,
  ...d
}, h) => {
  const l = s(), r = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 6.75h-1.125V6a2.625 2.625 0 0 0-2.625-2.625H3.75A2.625 2.625 0 0 0 1.125 6v8.25a2.625 2.625 0 0 0 2.625 2.625h9V18a2.625 2.625 0 0 0 2.625 2.625H21A2.625 2.625 0 0 0 23.625 18V9.375A2.625 2.625 0 0 0 21 6.75M3.75 14.625a.375.375 0 0 1-.375-.375V6a.375.375 0 0 1 .375-.375h13.5a.375.375 0 0 1 .375.375v.75h-2.25a2.625 2.625 0 0 0-2.625 2.625v5.25zM21.375 18a.375.375 0 0 1-.375.375h-5.625A.375.375 0 0 1 15 18V9.375A.375.375 0 0 1 15.375 9H21a.375.375 0 0 1 .375.375zm-9.75 1.5a1.125 1.125 0 0 1-1.125 1.125H8.25a1.125 1.125 0 1 1 0-2.25h2.25a1.125 1.125 0 0 1 1.125 1.125m8.25-7.875a1.125 1.125 0 0 1-1.125 1.125h-1.125a1.125 1.125 0 1 1 0-2.25h1.125a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
v.displayName = "Devices";
export {
  v as Devices
};
//# sourceMappingURL=Devices.js.map
