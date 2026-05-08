import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...e
}, n) => {
  const l = h(), i = o ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ r("title", { id: i, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.25 1.875H3.75A1.875 1.875 0 0 0 1.875 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875m-.375 18H4.125V4.125h15.75zM10.5 16.5v-5.25a1.125 1.125 0 0 1 2.01-.695 3.75 3.75 0 0 1 5.49 3.32V16.5a1.125 1.125 0 1 1-2.25 0v-2.625a1.5 1.5 0 1 0-3 0V16.5a1.125 1.125 0 1 1-2.25 0M9 11.25v5.25a1.125 1.125 0 0 1-2.25 0v-5.25a1.125 1.125 0 0 1 2.25 0M6.375 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
s.displayName = "LinkedinLogo";
export {
  s as LinkedinLogo
};
//# sourceMappingURL=LinkedinLogo.js.map
