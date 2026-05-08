import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...e
}, o) => {
  const h = c(), a = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.671 10.078a1.125 1.125 0 0 0-1.594 0L18 14.155 10.594 6.75l4.08-4.08a1.127 1.127 0 1 0-1.594-1.593L8.735 5.423a1.88 1.88 0 0 0-.443 1.943L6.485 9.173a1.875 1.875 0 0 0 0 2.652l.172.174-5.203 5.204a1.126 1.126 0 0 0 .44 1.863l6.75 2.25a1.1 1.1 0 0 0 .787-.028c.137-.056.26-.14.365-.244l2.954-2.951.175.174a1.875 1.875 0 0 0 2.65 0l1.807-1.806q.302.104.618.106a1.86 1.86 0 0 0 1.326-.55l4.345-4.344a1.124 1.124 0 0 0 0-1.595M8.697 18.962l-4.365-1.454 3.918-3.915 2.906 2.906zm5.553-2.557-5.204-5.201-.702-.705L9.75 9.093l5.906 5.906z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "Highlighter";
export {
  s as Highlighter
};
//# sourceMappingURL=Highlighter.js.map
