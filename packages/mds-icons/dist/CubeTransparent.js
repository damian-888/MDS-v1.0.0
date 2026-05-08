import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, h) => {
  const i = t(), a = r ? o ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m21.047 8.956-6-6a1.13 1.13 0 0 0-.797-.331H3.75A1.125 1.125 0 0 0 2.625 3.75v10.5a1.12 1.12 0 0 0 .328.796l6 6a1.12 1.12 0 0 0 .797.329h10.5a1.125 1.125 0 0 0 1.125-1.125V9.75c0-.298-.118-.583-.328-.794m-5.672-2.487 2.156 2.156h-2.156zM8.625 17.53l-2.156-2.156h2.156zm0-4.406h-3.75V6.469l3.75 3.75zm-2.156-8.25h6.656v3.75h-2.906zm6.656 6v2.25h-2.25v-2.25zm-2.25 8.25v-3.75h2.906l3.75 3.75zm8.25-1.594-3.75-3.75v-2.906h3.75z" })
  ] });
});
s.displayName = "CubeTransparent";
export {
  s as CubeTransparent
};
//# sourceMappingURL=CubeTransparent.js.map
