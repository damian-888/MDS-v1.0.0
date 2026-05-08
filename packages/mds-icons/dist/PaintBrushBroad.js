import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...l
}, e) => {
  const h = v(), o = a ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": o, ...l, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 1.875H6.75A4.13 4.13 0 0 0 2.625 6v6.75a2.625 2.625 0 0 0 2.625 2.625h3.716l-.341 4.031v.094a3.375 3.375 0 0 0 6.75 0v-.094l-.338-4.031h3.713a2.625 2.625 0 0 0 2.625-2.625V3a1.125 1.125 0 0 0-1.125-1.125m-13.5 2.25H15v2.25a1.125 1.125 0 1 0 2.25 0v-2.25h1.875V9H4.875V6A1.875 1.875 0 0 1 6.75 4.125m12 9h-4.125a1.876 1.876 0 0 0-1.86 2.1l.36 4.313a1.125 1.125 0 0 1-2.25 0l.36-4.313a1.876 1.876 0 0 0-1.86-2.1H5.25a.375.375 0 0 1-.375-.375v-1.5h14.25v1.5a.375.375 0 0 1-.375.375" })
  ] });
});
s.displayName = "PaintBrushBroad";
export {
  s as PaintBrushBroad
};
//# sourceMappingURL=PaintBrushBroad.js.map
