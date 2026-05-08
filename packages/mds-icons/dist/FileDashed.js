import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const n = v(({
  size: e = "1em",
  title: a,
  titleId: i,
  ...o
}, h) => {
  const l = m(), r = a ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.875 21a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.875 1.875 0 0 1-1.875-1.875v-3a1.125 1.125 0 0 1 2.25 0v2.625H6.75A1.125 1.125 0 0 1 7.875 21m12.75-12.75v4.5a1.125 1.125 0 1 1-2.25 0v-3h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5h-1.5a1.125 1.125 0 0 1 0-2.25h3a1.13 1.13 0 0 1 .796.33l5.25 5.25a1.13 1.13 0 0 1 .329.795M15 7.5h2.156L15 5.344zM7.5 1.875H5.25A1.875 1.875 0 0 0 3.375 3.75V6a1.125 1.125 0 0 0 2.25 0V4.125H7.5a1.125 1.125 0 0 0 0-2.25m12 13.5a1.125 1.125 0 0 0-1.125 1.125v3.375H18a1.125 1.125 0 1 0 0 2.25h.75a1.875 1.875 0 0 0 1.875-1.875V16.5a1.125 1.125 0 0 0-1.125-1.125m-15-.75A1.125 1.125 0 0 0 5.625 13.5V9.75a1.125 1.125 0 0 0-2.25 0v3.75A1.125 1.125 0 0 0 4.5 14.625m9.75 5.25H10.5a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
n.displayName = "FileDashed";
export {
  n as FileDashed
};
//# sourceMappingURL=FileDashed.js.map
