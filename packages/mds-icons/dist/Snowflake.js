import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const w = s(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...d
}, i) => {
  const n = v(), o = l ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.342 13.982a1.125 1.125 0 0 1-.824 1.36l-1.937.476.506 1.89a1.125 1.125 0 1 1-2.173.584l-.684-2.55-3.105-1.794v3.583l1.92 1.92a1.127 1.127 0 0 1-1.594 1.594l-1.45-1.451-1.455 1.455a1.129 1.129 0 0 1-1.924-.797 1.13 1.13 0 0 1 .33-.797l1.923-1.924v-3.583L7.77 15.741l-.683 2.55a1.125 1.125 0 1 1-2.173-.583l.506-1.89-1.938-.476a1.124 1.124 0 1 1 .536-2.184l2.615.642L9.75 12l-3.117-1.8-2.615.642a1.125 1.125 0 0 1-.535-2.184l1.938-.477-.506-1.89a1.125 1.125 0 1 1 2.173-.583l.683 2.55 3.104 1.793V6.469l-1.92-1.924A1.127 1.127 0 0 1 10.55 2.95L12 4.406l1.454-1.455a1.128 1.128 0 0 1 1.594 1.594l-1.923 1.924v3.585L16.23 8.26l.684-2.55a1.125 1.125 0 0 1 2.173.583l-.506 1.89 1.937.477a1.125 1.125 0 0 1-.268 2.214q-.135 0-.269-.033l-2.615-.642L14.25 12l3.117 1.8 2.615-.642a1.125 1.125 0 0 1 1.36.824" })
  ] });
});
w.displayName = "Snowflake";
export {
  w as Snowflake
};
//# sourceMappingURL=Snowflake.js.map
