import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as l, useId as v } from "react";
const m = l(({
  size: a = "1em",
  title: i,
  titleId: e,
  ...d
}, h) => {
  const n = v(), o = i ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: h, "aria-labelledby": o, ...d, children: [
    i ? /* @__PURE__ */ r("title", { id: o, children: i }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16.875 6.375h-2.25A1.125 1.125 0 0 0 13.5 7.5v9a1.125 1.125 0 0 0 1.125 1.125h2.25a5.625 5.625 0 1 0 0-11.25m0 9H15.75v-6.75h1.125a3.375 3.375 0 0 1 0 6.75M9.75 16.5v-3.375h-4.5V16.5a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 0 1 2.25 0v3.375h4.5V7.5a1.125 1.125 0 0 1 2.25 0v9a1.125 1.125 0 1 1-2.25 0M1.875 4.125A1.125 1.125 0 0 1 3 3h18a1.125 1.125 0 0 1 0 2.25H3a1.125 1.125 0 0 1-1.125-1.125m20.25 15.75A1.125 1.125 0 0 1 21 21H3a1.125 1.125 0 1 1 0-2.25h18a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "HighDefinition";
export {
  m as HighDefinition
};
//# sourceMappingURL=HighDefinition.js.map
