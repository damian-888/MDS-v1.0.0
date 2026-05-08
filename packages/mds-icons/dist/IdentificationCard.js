import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const m = c(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...e
}, t) => {
  const n = h(), r = a ? o ?? n : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.875 10.125A1.125 1.125 0 0 1 15 9h2.625a1.125 1.125 0 0 1 0 2.25H15a1.125 1.125 0 0 1-1.125-1.125m3.75 2.625H15.75a1.125 1.125 0 1 0 0 2.25h1.875a1.125 1.125 0 1 0 0-2.25m4.5-7.5v13.5a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v12.75h15.75zM5.464 14.941c.27-.639.697-1.2 1.242-1.629a3.375 3.375 0 1 1 5.338 0c.545.43.973.99 1.243 1.629a1.125 1.125 0 0 1-2.076.868c-.291-.697-1.047-1.184-1.836-1.184s-1.544.488-1.837 1.184a1.125 1.125 0 1 1-2.074-.868M8.25 11.25a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0" })
  ] });
});
m.displayName = "IdentificationCard";
export {
  m as IdentificationCard
};
//# sourceMappingURL=IdentificationCard.js.map
