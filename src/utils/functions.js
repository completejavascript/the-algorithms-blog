export function getRobotIndexTag(index) {
  return index > 1 ? 
  [
    { name: "robots", content: "noindex" },  
    { name: "googlebot", content: "noindex" }
  ] : [];
}