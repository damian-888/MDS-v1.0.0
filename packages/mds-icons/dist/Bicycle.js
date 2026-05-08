import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, o) => {
  const c = n(), i = a ? d ?? c : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: i, children: a }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.125 10.125c-.48 0-.959.07-1.419.21l-1.873-3.21H18a.375.375 0 0 1 .375.375 1.125 1.125 0 0 0 2.25 0A2.625 2.625 0 0 0 18 4.875h-4.125a1.125 1.125 0 0 0-.972 1.688l.763 1.312H10.27L8.847 5.438a1.13 1.13 0 0 0-.972-.563h-3a1.125 1.125 0 0 0 0 2.25h2.354l1.038 1.781-1.33 1.677a4.891 4.891 0 1 0 1.763 1.4l.785-.992 1.577 2.701a1.125 1.125 0 1 0 1.941-1.13l-1.42-2.437h3.395l.787 1.348a4.875 4.875 0 1 0 3.36-1.348M7.5 15a2.625 2.625 0 1 1-2.035-2.557l-1.472 1.859a1.125 1.125 0 1 0 1.764 1.396l1.472-1.859c.179.361.271.758.27 1.161m11.625 2.625a2.625 2.625 0 0 1-2.167-4.105l1.195 2.047a1.125 1.125 0 0 0 1.944-1.13l-1.195-2.047q.11-.01.223-.01a2.625 2.625 0 1 1 0 5.25z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "Bicycle";
export {
  s as Bicycle
};
//# sourceMappingURL=Bicycle.js.map
