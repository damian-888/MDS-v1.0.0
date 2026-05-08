import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const h = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = v(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v2.25H4.125v-2.25zm-15.75 12.75v-8.25h15.75v8.25z" })
  ] });
});
h.displayName = "Browser";
export {
  h as Browser
};
//# sourceMappingURL=Browser.js.map
