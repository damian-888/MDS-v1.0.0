import { jsxs as v, jsx as r } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const t = l(({
  size: h = "1em",
  title: a,
  titleId: d,
  ...m
}, e) => {
  const i = n(), o = a ? d ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": o, ...m, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16.875 13.125h-1.5v-2.25h1.5a3.75 3.75 0 1 0-3.75-3.75v1.5h-2.25v-1.5a3.75 3.75 0 1 0-3.75 3.75h1.5v2.25h-1.5a3.75 3.75 0 1 0 3.75 3.75v-1.5h2.25v1.5a3.75 3.75 0 1 0 3.75-3.75m-1.5-6a1.5 1.5 0 1 1 1.5 1.5h-1.5zm-9.75 0a1.5 1.5 0 0 1 3 0v1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5m3 9.75a1.5 1.5 0 1 1-1.5-1.5h1.5zm2.25-6h2.25v2.25h-2.25zm6 7.5a1.5 1.5 0 0 1-1.5-1.5v-1.5h1.5a1.5 1.5 0 1 1 0 3" })
  ] });
});
t.displayName = "Command";
export {
  t as Command
};
//# sourceMappingURL=Command.js.map
