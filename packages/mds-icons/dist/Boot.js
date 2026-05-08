import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as c, useId as n } from "react";
const s = c(({
  size: o = "1em",
  title: l,
  titleId: h,
  ...d
}, e) => {
  const i = n(), r = l ? h ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18 9.75h-2.625v-4.5A1.875 1.875 0 0 0 13.5 3.375H3a1.125 1.125 0 0 0-1.05 1.528c1.02 2.662.778 7.346-.03 10.16q-.045.154-.045.312v3.375a1.875 1.875 0 0 0 1.875 1.875h2.448c.293 0 .581-.067.844-.198l1.098-.552h1.345l1.103.552c.262.13.551.198.844.198h2.646c.29 0 .578-.068.839-.198l1.098-.552h1.345l1.103.552c.26.13.548.198.84.198h2.447a1.875 1.875 0 0 0 1.875-1.875v-3.375A5.63 5.63 0 0 0 18 9.75M4.5 5.625h8.625V9.75h-2.25a1.125 1.125 0 0 0 0 2.25H18a3.38 3.38 0 0 1 3.182 2.25H4.426c.52-2.617.658-5.962.074-8.625m16.875 12.75H19.39l-1.103-.552a1.9 1.9 0 0 0-.84-.198h-1.52a1.9 1.9 0 0 0-.839.198l-1.103.552h-2.47l-1.103-.552a1.9 1.9 0 0 0-.844-.198H8.052a1.9 1.9 0 0 0-.844.198l-1.098.552H4.125V16.5h17.25z" })
  ] });
});
s.displayName = "Boot";
export {
  s as Boot
};
//# sourceMappingURL=Boot.js.map
