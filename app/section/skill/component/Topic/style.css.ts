import { style } from "@vanilla-extract/css"

export const TopicWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
})

export const TopicTitleStyle = style({
    fontWeight: 600,
    fontSize: "16px",
    marginBottom: "6px"
})

export const SkillLineWrapperStyle = style({
    display: "flex",
    gap: "5px",
    alignItems: "center"
})

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