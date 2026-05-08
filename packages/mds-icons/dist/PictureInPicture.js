import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const v = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, l) => {
  const n = c(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 4.125H3.75A1.875 1.875 0 0 0 1.875 6v12a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V6a1.875 1.875 0 0 0-1.875-1.875M4.125 6.375h15.75v4.5H12.75A1.125 1.125 0 0 0 11.625 12v5.625h-7.5zm9.75 11.25v-4.5h6v4.5z" })
  ] });
});
v.displayName = "PictureInPicture";
export {
  v as PictureInPicture
};
//# sourceMappingURL=PictureInPicture.js.map
