import { style } from "@vanilla-extract/css";

export const ProjectStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const HeaderStyle = style({
  display: "flex",
  gap: "8px",
});

export const NameStyle = style({
  fontSize: "16px",
  borderBottom: "1px solid #222222",
});

export const ContributorWrapperStyle = style({
  display: "flex",
  gap: "8px",
});

export const ContributorStyle = style({
  padding: "2px 8px",
  fontSize: "12px",
  color: "#EB5757",
  fontWeight: "bold",
  borderRadius: "2px",
  backgroundColor: "#EDEDEB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
});

export const DayStyle = style({
  fontSize: "12px",
});

export const IntroduceStyle = style({
  fontSize: "13px",
  opacity: 0.5,
});

export const SkillWrapperStyle = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const SkillStyle = style({
  padding: "3px 9px",
  backgroundColor: "#EDEDEB",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "2px",
  fontSize: "12px",
});
