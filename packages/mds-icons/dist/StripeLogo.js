import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...t
}, l) => {
  const a = c(), e = o ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...t, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-5.25-4.875c0-.597-.59-.874-2.25-1.352-1.513-.436-3.584-1.031-3.584-3.148 0-1.924 1.701-3.375 3.958-3.375 1.616 0 3.006.763 3.627 1.991a1.123 1.123 0 0 1-.915 1.644 1.12 1.12 0 0 1-1.092-.627c-.232-.46-.869-.758-1.619-.758-.958 0-1.708.494-1.708 1.125 0 .102 0 .207.307.39.392.233 1.032.418 1.65.596.82.236 1.67.481 2.38.925 1.236.771 1.5 1.833 1.5 2.589 0 1.893-1.812 3.375-4.125 3.375-1.993 0-3.7-1.158-4.057-2.754a1.125 1.125 0 0 1 2.196-.492c.104.48.845.996 1.857.996.885 0 1.875-.48 1.875-1.125" })
  ] });
});
m.displayName = "StripeLogo";
export {
  m as StripeLogo
};
//# sourceMappingURL=StripeLogo.js.map
