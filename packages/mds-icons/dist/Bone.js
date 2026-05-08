import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...a
}, i) => {
  const n = h(), e = o ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.007 5.467a3.74 3.74 0 0 0-2.19-1.284 3.749 3.749 0 0 0-6.266-2.003 3.75 3.75 0 0 0-.752 4.428L6.612 12.8a3.75 3.75 0 1 0-2.426 7.018 3.75 3.75 0 1 0 7.019-2.424l6.192-6.193a3.75 3.75 0 0 0 4.614-5.734zM20.258 8.86a1.5 1.5 0 0 1-1.926.28 1.875 1.875 0 0 0-2.328.26l-6.6 6.6a1.875 1.875 0 0 0-.258 2.328 1.5 1.5 0 1 1-2.757.563 1.125 1.125 0 0 0-1.286-1.282 1.5 1.5 0 1 1 .563-2.756 1.875 1.875 0 0 0 2.328-.259l6.6-6.6a1.875 1.875 0 0 0 .258-2.328 1.5 1.5 0 1 1 2.757-.563 1.125 1.125 0 0 0 1.285 1.285 1.5 1.5 0 0 1 1.364 2.472" })
  ] });
});
m.displayName = "Bone";
export {
  m as Bone
};
//# sourceMappingURL=Bone.js.map
