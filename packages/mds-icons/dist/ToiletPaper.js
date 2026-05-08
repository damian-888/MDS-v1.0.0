import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const c = s(), o = r ? a ?? c : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M7.5 11.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m15.375 0v8.25A1.875 1.875 0 0 1 21 21.375H10.5A1.875 1.875 0 0 1 8.625 19.5v-.9c-.75.813-1.644 1.275-2.625 1.275-2.78 0-4.875-3.708-4.875-8.625S3.22 2.625 6 2.625h12c2.78 0 4.875 3.708 4.875 8.625m-14.25 0c0-1.806-.357-3.555-.98-4.8C7.152 5.464 6.537 4.875 6 4.875s-1.152.589-1.645 1.575c-.623 1.245-.98 2.994-.98 4.8s.357 3.555.98 4.8c.493.986 1.108 1.575 1.645 1.575s1.152-.589 1.645-1.575c.623-1.245.98-2.994.98-4.8m12 7.875v-6.75h-.75a1.125 1.125 0 1 1 0-2.25h.703c-.115-1.392-.44-2.692-.933-3.675-.492-.983-1.108-1.575-1.645-1.575H9.35c.808 1.323 1.346 3.146 1.488 5.25h.787a1.125 1.125 0 1 1 0 2.25h-.75v6.75zm-4.5-9h-.75a1.125 1.125 0 1 0 0 2.25h.75a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "ToiletPaper";
export {
  m as ToiletPaper
};
//# sourceMappingURL=ToiletPaper.js.map
