import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, h) => {
  const o = n(), i = r ? d ?? o : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "m21.368 14.28-4.295-1.048L6.796 2.954a1.125 1.125 0 0 0-1.626.037c-2.125 2.323-3.295 5.26-3.295 8.26V18a1.875 1.875 0 0 0 1.875 1.874h3A1.874 1.874 0 0 0 8.625 18v-3.91l.1.066a10.17 10.17 0 0 1 3.667 4.557 1.865 1.865 0 0 0 1.738 1.162h7.995A1.875 1.875 0 0 0 24 18v-.443a3.345 3.345 0 0 0-2.632-3.278M6.375 17.624h-2.25v-5.187c.767.085 1.522.258 2.25.517zm15.375 0h-7.373A12.4 12.4 0 0 0 10 12.303a12.3 12.3 0 0 0-5.812-2.122c.207-1.723.86-3.363 1.893-4.758l9.622 9.623c.146.146.33.248.53.297l4.612 1.125.024.006a1.11 1.11 0 0 1 .88 1.087z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "HighHeel";
export {
  s as HighHeel
};
//# sourceMappingURL=HighHeel.js.map
