import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const n = s(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, l) => {
  const h = m(), e = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.124h-9.375a1.125 1.125 0 0 1 0-2.25h9.375A1.125 1.125 0 0 1 21.375 12m-10.5-4.876h9.375a1.125 1.125 0 1 0 0-2.25h-9.375a1.125 1.125 0 0 0 0 2.25m9.375 9.75h-9.375a1.125 1.125 0 0 0 0 2.25h9.375a1.125 1.125 0 1 0 0-2.25M4.125 5.56v4.19a1.125 1.125 0 1 0 2.25 0v-6a1.125 1.125 0 0 0-1.628-1.007l-1.5.75a1.125 1.125 0 0 0 .878 2.063zm3.724 9.08a2.6 2.6 0 0 0-1.05-1.746 2.71 2.71 0 0 0-3.715.512 2.6 2.6 0 0 0-.391.707 1.125 1.125 0 0 0 2.114.77.4.4 0 0 1 .054-.094.45.45 0 0 1 .61-.077.36.36 0 0 1 .15.243.34.34 0 0 1-.071.26l-.013.016-2.688 3.595a1.125 1.125 0 0 0 .9 1.798h3a1.125 1.125 0 1 0 0-2.25H6l1.34-1.791a2.58 2.58 0 0 0 .51-1.943" })
  ] });
});
n.displayName = "ListNumbers";
export {
  n as ListNumbers
};
//# sourceMappingURL=ListNumbers.js.map
