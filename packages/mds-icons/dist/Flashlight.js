import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...e
}, h) => {
  const a = s(), i = l ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: h, "aria-labelledby": i, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: i, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.25 1.125H6.75A1.875 1.875 0 0 0 4.875 3v4.25c0 .405.132.8.375 1.125l1.875 2.5V21A1.875 1.875 0 0 0 9 22.875h6A1.875 1.875 0 0 0 16.875 21V10.875l1.875-2.5c.243-.325.374-.72.375-1.125V3a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v1.5h-9.75v-1.5zM15 9.625c-.243.325-.374.72-.375 1.125v9.875h-5.25V10.75c0-.405-.132-.8-.375-1.125l-1.875-2.5h9.75zm-1.875 1.625v3a1.125 1.125 0 1 1-2.25 0v-3a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
v.displayName = "Flashlight";
export {
  v as Flashlight
};
//# sourceMappingURL=Flashlight.js.map
