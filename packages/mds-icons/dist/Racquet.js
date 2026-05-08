import { jsxs as o, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, h) => {
  const c = n(), d = r ? e ?? c : void 0;
  return /* @__PURE__ */ o("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: d, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21.816 2.184C20.442.811 18.509.187 16.37.424c-2.045.227-4.046 1.227-5.634 2.813S8.151 6.825 7.925 8.87c-.188 1.719.177 3.304 1.04 4.573l-1.903 1.904-.174-.174a1.875 1.875 0 0 0-2.651 0L1.299 18.11a1.875 1.875 0 0 0 0 2.652l1.94 1.94a1.875 1.875 0 0 0 2.651 0l2.936-2.936a1.874 1.874 0 0 0 0-2.652l-.175-.174 1.904-1.904c1.05.714 2.315 1.089 3.695 1.089q.442 0 .88-.05c2.044-.227 4.045-1.226 5.632-2.813 1.587-1.586 2.587-3.587 2.812-5.633.239-2.138-.386-4.067-1.758-5.445M4.566 20.84l-1.407-1.406 2.405-2.405 1.406 1.407zM12 13.29A3.7 3.7 0 0 1 10.711 12h1.29zm-1.875-3.54a6.46 6.46 0 0 1 .786-3H12v3zm4.125-3h3v3h-3zm5.25 3v-3h1.875a6.44 6.44 0 0 1-.785 3zm1.29-5.25H19.5V3.21A3.7 3.7 0 0 1 20.788 4.5zm-3.557-1.875h.017V4.5h-3V3.406c.982-.517 2.014-.781 2.983-.781M14.25 13.88V12h3v1.094a6.44 6.44 0 0 1-3 .786" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "Racquet";
export {
  m as Racquet
};
//# sourceMappingURL=Racquet.js.map
