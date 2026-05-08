import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as f } from "react";
const m = n(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, h) => {
  const i = f(), r = a ? o ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.546 16.455a1.125 1.125 0 0 1 0 1.594l-2.25 2.25a1.127 1.127 0 1 1-1.594-1.594l.33-.329h-.197a7.14 7.14 0 0 1-5.798-2.984L9.129 9.918a4.88 4.88 0 0 0-3.967-2.042H3a1.125 1.125 0 1 1 0-2.25h2.162A7.14 7.14 0 0 1 10.96 8.61l3.91 5.474a4.88 4.88 0 0 0 3.968 2.042h.193l-.33-.329a1.127 1.127 0 1 1 1.594-1.594zm-8.964-6.808a1.125 1.125 0 0 0 1.587-.106 4.87 4.87 0 0 1 3.67-1.665h.192l-.33.33a1.127 1.127 0 1 0 1.594 1.593l2.25-2.25a1.125 1.125 0 0 0 0-1.594l-2.25-2.25A1.127 1.127 0 1 0 18.701 5.3l.33.327h-.196a7.13 7.13 0 0 0-5.362 2.438 1.125 1.125 0 0 0 .109 1.583m-3.164 4.708a1.125 1.125 0 0 0-1.587.106 4.88 4.88 0 0 1-3.67 1.665H3a1.125 1.125 0 1 0 0 2.25h2.162a7.13 7.13 0 0 0 5.362-2.438 1.125 1.125 0 0 0-.106-1.583" })
  ] });
});
m.displayName = "Shuffle";
export {
  m as Shuffle
};
//# sourceMappingURL=Shuffle.js.map
