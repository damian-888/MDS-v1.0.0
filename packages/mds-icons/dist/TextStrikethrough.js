import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { forwardRef as c, useId as n } from "react";
const s = c(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...d
}, a) => {
  const h = n(), o = r ? i ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ t("title", { id: o, children: r }) : null,
    /* @__PURE__ */ t("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125h-2.826c.631.727.97 1.662.951 2.625 0 1.355-.732 2.655-2.01 3.567-1.177.844-2.73 1.308-4.365 1.308s-3.187-.464-4.366-1.308c-1.277-.912-2.009-2.212-2.009-3.567a1.125 1.125 0 0 1 2.25 0c0 1.423 1.89 2.625 4.125 2.625s4.125-1.202 4.125-2.625c0-1.196-.872-1.892-3.314-2.625H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12M7.042 9.375A1.125 1.125 0 0 0 8.167 8.25c0-1.5 1.648-2.625 3.833-2.625 1.627 0 2.94.623 3.514 1.667a1.125 1.125 0 0 0 1.969-1.084C16.513 4.434 14.46 3.375 12 3.375c-3.469 0-6.083 2.095-6.083 4.875a1.125 1.125 0 0 0 1.125 1.125" })
  ] });
});
s.displayName = "TextStrikethrough";
export {
  s as TextStrikethrough
};
//# sourceMappingURL=TextStrikethrough.js.map
