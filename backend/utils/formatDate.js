/** Kuwait time for email footers; safe on serverless Node (limited ICU). */
function formatKuwaitTime(date = new Date()) {
  try {
    return date.toLocaleString("en-US", { timeZone: "Asia/Kuwait" });
  } catch {
    return date.toISOString().replace("T", " ").slice(0, 19) + " UTC";
  }
}

module.exports = { formatKuwaitTime };
