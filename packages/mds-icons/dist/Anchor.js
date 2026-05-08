import { jsxs as c, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as t } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const n = t(), a = r ? e ?? n : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 12.375a1.125 1.125 0 0 0-1.125 1.125c0 2.05-1.07 2.433-3.296 3.04-.855.233-1.839.502-2.704 1.002v-5.167h2.625a1.125 1.125 0 1 0 0-2.25h-2.625V8.432a3.375 3.375 0 1 0-2.25 0v1.693H8.25a1.125 1.125 0 1 0 0 2.25h2.625v5.167c-.865-.5-1.849-.77-2.704-1.003-2.226-.601-3.296-.99-3.296-3.039a1.125 1.125 0 0 0-2.25 0c0 3.86 2.863 4.64 4.954 5.21 2.226.607 3.296.99 3.296 3.04a1.125 1.125 0 1 0 2.25 0c0-2.05 1.07-2.433 3.296-3.04 2.09-.57 4.954-1.35 4.954-5.21a1.125 1.125 0 0 0-1.125-1.125M12 4.125a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25" })
  ] });
});
s.displayName = "Anchor";
export {
  s as Anchor
};
//# sourceMappingURL=Anchor.js.map
