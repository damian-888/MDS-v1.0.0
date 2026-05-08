import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const h = m(), o = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 2.25V13.5H16.81a1.86 1.86 0 0 0-1.325.55l-1.704 1.7H10.22l-1.704-1.7a1.86 1.86 0 0 0-1.325-.55H4.875V4.875zm-14.25 14.25V15.75h2.156l1.7 1.7a1.86 1.86 0 0 0 1.33.55h3.879a1.86 1.86 0 0 0 1.325-.55l1.704-1.7h2.156v3.375z" })
  ] });
});
s.displayName = "Tray";
export {
  s as Tray
};
//# sourceMappingURL=Tray.js.map
