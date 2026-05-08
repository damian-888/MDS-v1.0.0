import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: e = "1em",
  title: a,
  titleId: o,
  ...i
}, t) => {
  const l = s(), r = a ? o ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.193 4.861a10.131 10.131 0 0 0-17.318 7.14v5.25A2.625 2.625 0 0 0 4.5 19.874H6a2.625 2.625 0 0 0 2.625-2.625V13.5A2.625 2.625 0 0 0 6 10.877H4.204A7.88 7.88 0 0 1 12 4.126h.06a7.85 7.85 0 0 1 7.736 6.75H18a2.625 2.625 0 0 0-2.625 2.625v3.75A2.625 2.625 0 0 0 18 19.874h1.837a1.875 1.875 0 0 1-1.837 1.5h-5.25a1.125 1.125 0 1 0 0 2.25H18a4.13 4.13 0 0 0 4.125-4.125V12a10.06 10.06 0 0 0-2.932-7.139M6 13.126a.375.375 0 0 1 .375.375v3.75a.375.375 0 0 1-.375.374H4.5a.375.375 0 0 1-.375-.375v-4.124zm11.625 4.124V13.5a.375.375 0 0 1 .375-.374h1.875v4.5H18a.375.375 0 0 1-.375-.376" })
  ] });
});
v.displayName = "Headset";
export {
  v as Headset
};
//# sourceMappingURL=Headset.js.map
