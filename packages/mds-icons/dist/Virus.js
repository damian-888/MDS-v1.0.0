import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...e
}, o) => {
  const h = c(), i = l ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": i, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: i, children: l }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.125 12a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75m5.625-1.875a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75M12 13.875a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75M23.625 12a1.125 1.125 0 0 1-1.125 1.125h-1.192a9.34 9.34 0 0 1-1.934 4.658l.922.921a1.127 1.127 0 1 1-1.594 1.594l-.92-.922a9.34 9.34 0 0 1-4.657 1.931V22.5a1.125 1.125 0 1 1-2.25 0v-1.192a9.34 9.34 0 0 1-4.658-1.934l-.921.922a1.126 1.126 0 0 1-1.838-1.228q.087-.207.244-.366l.922-.92a9.34 9.34 0 0 1-1.931-4.657H1.5a1.125 1.125 0 1 1 0-2.25h1.193a9.34 9.34 0 0 1 1.933-4.658l-.922-.921a1.127 1.127 0 0 1 1.594-1.594l.92.922a9.34 9.34 0 0 1 4.657-1.931V1.5a1.125 1.125 0 1 1 2.25 0v1.193a9.34 9.34 0 0 1 4.658 1.933l.921-.922a1.127 1.127 0 1 1 1.594 1.594l-.922.92a9.34 9.34 0 0 1 1.931 4.657H22.5A1.125 1.125 0 0 1 23.625 12m-4.5 0A7.125 7.125 0 1 0 12 19.125 7.13 7.13 0 0 0 19.125 12" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "Virus";
export {
  s as Virus
};
//# sourceMappingURL=Virus.js.map
