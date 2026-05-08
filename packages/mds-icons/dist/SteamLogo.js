import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...d
}, i) => {
  const t = s(), e = o ? a ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m4.703 11.458a3.749 3.749 0 1 0-5.368-5.188l-2.657 3.443-3.505-3.506a7.833 7.833 0 1 1-.88 2.302l3.071 3.071a3 3 0 0 0 4.642 3.507zm-5.734-1.026c.343.62.854 1.13 1.474 1.474l-1.821 1.406-.024.02a.743.743 0 0 1-.999-.053.75.75 0 0 1-.052-1.003l.02-.024zM14.25 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
c.displayName = "SteamLogo";
export {
  c as SteamLogo
};
//# sourceMappingURL=SteamLogo.js.map
