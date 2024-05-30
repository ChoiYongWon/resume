import { globalStyle } from "@vanilla-extract/css";
import "./layers.css";
import "./reset.css";

globalStyle("html, body", {
  fontFamily: `var(--font-pretendard)`,
  backgroundColor: "#F9FAFB",
  fontSynthesis: "none !important",
  padding: 0,
  margin: 0,
});
