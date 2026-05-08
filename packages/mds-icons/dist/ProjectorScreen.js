import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const v = n(({
  size: o = "1em",
  title: e,
  titleId: i,
  ...l
}, a) => {
  const h = c(), d = e ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    e ? /* @__PURE__ */ r("title", { id: d, children: e }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.125 6.75V4.5a1.875 1.875 0 0 0-1.875-1.875H3.75A1.875 1.875 0 0 0 1.875 4.5v2.25a1.875 1.875 0 0 0 1.5 1.838v6.787H3a1.125 1.125 0 1 0 0 2.25h7.875v2.177a2.25 2.25 0 1 0 2.25 0v-2.177H21a1.125 1.125 0 1 0 0-2.25h-.375V8.588a1.875 1.875 0 0 0 1.5-1.838m-18-1.875h15.75v1.5H4.125zm1.5 10.5v-6.75h12.75v6.75z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
v.displayName = "ProjectorScreen";
export {
  v as ProjectorScreen
};
//# sourceMappingURL=ProjectorScreen.js.map
