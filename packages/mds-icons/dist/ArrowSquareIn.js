import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const n = v(), a = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12.375 12.75v6a1.125 1.125 0 0 1-2.25 0v-3.281l-5.58 5.577a1.126 1.126 0 0 1-1.837-1.228q.086-.207.244-.366l5.58-5.577H5.25a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125M19.5 2.625h-12A1.875 1.875 0 0 0 5.625 4.5v4.125a1.125 1.125 0 0 0 2.25 0v-3.75h11.25v11.25h-3.75a1.125 1.125 0 1 0 0 2.25H19.5a1.875 1.875 0 0 0 1.875-1.875v-12A1.875 1.875 0 0 0 19.5 2.625" })
  ] });
});
s.displayName = "ArrowSquareIn";
export {
  s as ArrowSquareIn
};
//# sourceMappingURL=ArrowSquareIn.js.map
