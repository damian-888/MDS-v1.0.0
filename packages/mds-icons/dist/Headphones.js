import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const v = t(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const n = s(), o = a ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M19.193 4.861a10.131 10.131 0 0 0-17.318 7.14v5.25A2.625 2.625 0 0 0 4.5 19.874H6a2.625 2.625 0 0 0 2.625-2.625V13.5A2.625 2.625 0 0 0 6 10.877H4.204A7.88 7.88 0 0 1 12 4.126h.06a7.85 7.85 0 0 1 7.736 6.75H18a2.625 2.625 0 0 0-2.625 2.625v3.75A2.625 2.625 0 0 0 18 19.874h1.5a2.625 2.625 0 0 0 2.625-2.625V12a10.06 10.06 0 0 0-2.932-7.139M6 13.126a.375.375 0 0 1 .375.375v3.75a.375.375 0 0 1-.375.374H4.5a.375.375 0 0 1-.375-.375v-4.124zm13.875 4.124a.375.375 0 0 1-.375.375H18a.375.375 0 0 1-.375-.375V13.5a.375.375 0 0 1 .375-.374h1.875z" })
  ] });
});
v.displayName = "Headphones";
export {
  v as Headphones
};
//# sourceMappingURL=Headphones.js.map
