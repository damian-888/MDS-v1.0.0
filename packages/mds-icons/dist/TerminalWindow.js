import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const n = m(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M6.797 14.122 9.449 12 6.797 9.878a1.125 1.125 0 0 1 1.406-1.756l3.75 3a1.124 1.124 0 0 1 0 1.756l-3.75 3a1.125 1.125 0 1 1-1.406-1.756m6.703 2.003h3a1.125 1.125 0 1 0 0-2.25h-3a1.125 1.125 0 1 0 0 2.25M22.125 5.25v13.5a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v12.75h15.75z" })
  ] });
});
s.displayName = "TerminalWindow";
export {
  s as TerminalWindow
};
//# sourceMappingURL=TerminalWindow.js.map
