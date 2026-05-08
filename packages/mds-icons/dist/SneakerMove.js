import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: a,
  titleId: l,
  ...d
}, i) => {
  const n = m(), r = a ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m21.838 15.287-2.683-1.342a4.1 4.1 0 0 1-2.28-3.69V7.5a1.125 1.125 0 0 0-1.125-1.125 4.13 4.13 0 0 1-4.125-4.125 1.124 1.124 0 0 0-1.805-.896L2.602 6.829l-.029.022a1.875 1.875 0 0 0-.146 2.783l10.658 10.662a1.12 1.12 0 0 0 .796.329H21a1.875 1.875 0 0 0 1.875-1.875v-1.787a1.86 1.86 0 0 0-1.037-1.676m-1.213 3.088h-6.281L4.32 8.348l1.206-.915 3.862 3.863a1.127 1.127 0 1 0 1.594-1.594L7.336 6.061l2.366-1.795a6.4 6.4 0 0 0 4.923 4.26v1.73a6.34 6.34 0 0 0 3.524 5.701l2.476 1.238zM5.202 17.25H3A1.125 1.125 0 1 1 3 15h2.202a1.125 1.125 0 1 1 0 2.25m4.5 2.25a1.125 1.125 0 0 1-1.125 1.125H4.5a1.125 1.125 0 1 1 0-2.25h4.077A1.125 1.125 0 0 1 9.702 19.5" })
  ] });
});
s.displayName = "SneakerMove";
export {
  s as SneakerMove
};
//# sourceMappingURL=SneakerMove.js.map
