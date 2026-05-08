import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: e = "1em",
  title: a,
  titleId: r,
  ...d
}, l) => {
  const v = m(), i = a ? r ?? v : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m20.296 7.454-5.25-5.25a1.12 1.12 0 0 0-.796-.329h-9A1.875 1.875 0 0 0 3.375 3.75v6.375a1.125 1.125 0 0 0 2.25 0v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125a1.125 1.125 0 1 0 0 2.25h.375a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796M15 5.344 17.156 7.5H15zm-.18 7.94a1.13 1.13 0 0 0-1.117-.015l-1.844 1.022a1.875 1.875 0 0 0-1.734-1.166H4.5A1.875 1.875 0 0 0 2.625 15v4.5A1.875 1.875 0 0 0 4.5 21.375h5.625a1.875 1.875 0 0 0 1.734-1.166l1.844 1.024a1.125 1.125 0 0 0 1.672-.983v-6a1.13 1.13 0 0 0-.554-.97zm-5.07 5.841H4.875v-3.75H9.75zm3.375-.787L12 17.713v-.926l1.125-.625z" })
  ] });
});
n.displayName = "FileVideo";
export {
  n as FileVideo
};
//# sourceMappingURL=FileVideo.js.map
