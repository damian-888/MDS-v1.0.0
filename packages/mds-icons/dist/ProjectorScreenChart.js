import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const c = v(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const h = n(), o = a ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M9.75 12v.75a1.125 1.125 0 0 1-2.25 0V12a1.125 1.125 0 0 1 2.25 0M12 10.5a1.125 1.125 0 0 0-1.125 1.125v1.125a1.125 1.125 0 1 0 2.25 0v-1.125A1.125 1.125 0 0 0 12 10.5m3.375-.375a1.125 1.125 0 0 0-1.125 1.125v1.5a1.125 1.125 0 1 0 2.25 0v-1.5a1.125 1.125 0 0 0-1.125-1.125m5.25-1.537v6.787H21a1.125 1.125 0 1 1 0 2.25h-7.875v2.177a2.25 2.25 0 1 1-2.25 0v-2.177H3a1.125 1.125 0 1 1 0-2.25h.375V8.588a1.875 1.875 0 0 1-1.5-1.838V4.5A1.875 1.875 0 0 1 3.75 2.625h16.5A1.875 1.875 0 0 1 22.125 4.5v2.25a1.875 1.875 0 0 1-1.5 1.838m-16.5-2.213h15.75v-1.5H4.125zm14.25 9v-6.75H5.625v6.75z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
c.displayName = "ProjectorScreenChart";
export {
  c as ProjectorScreenChart
};
//# sourceMappingURL=ProjectorScreenChart.js.map
