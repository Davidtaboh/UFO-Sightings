// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");
function buildTable(ufos) {
  tbody.html("");
  ufos.forEach(dataRow => {
    const row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
  });
}
function handleClick(){
    // filter
    // buildTable(filtereddate);
}
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);