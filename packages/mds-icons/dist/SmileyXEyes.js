import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const m = s(), e = l ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m5.296-8.67a1.127 1.127 0 1 1-1.594 1.593l-.514-.517-.517.518a1.126 1.126 0 1 1-1.594-1.594l.517-.518-.518-.516a1.127 1.127 0 1 1 1.594-1.594l.518.517.516-.518a1.127 1.127 0 1 1 1.594 1.594l-.517.518zm-6.375 1.593a1.125 1.125 0 0 1-1.594 0l-.514-.517-.517.518a1.127 1.127 0 1 1-1.594-1.594l.517-.518-.518-.516a1.127 1.127 0 1 1 1.594-1.594l.518.517.516-.518a1.127 1.127 0 1 1 1.594 1.594l-.517.518.518.516a1.125 1.125 0 0 1-.003 1.592zm2.579 4.077a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "SmileyXEyes";
export {
  h as SmileyXEyes
};
//# sourceMappingURL=SmileyXEyes.js.map
