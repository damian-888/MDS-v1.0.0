import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: l,
  titleId: o,
  ...d
}, a) => {
  const n = s(), i = l ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: i, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.576 6.614-4.19-4.19a1.875 1.875 0 0 0-2.651 0L3.175 13.986a1.86 1.86 0 0 0-.55 1.325v4.19A1.875 1.875 0 0 0 4.5 21.376h4.19a1.86 1.86 0 0 0 1.325-.55l11.56-11.56a1.875 1.875 0 0 0 0-2.652M8.53 19.126H4.875V15.47l7.875-7.875 3.656 3.656zM18 9.657l-3.656-3.656 1.72-1.72 3.655 3.657z" })
  ] });
});
c.displayName = "PencilSimple";
export {
  c as PencilSimple
};
//# sourceMappingURL=PencilSimple.js.map
