// Define an array of objects to hold the data for each panel
const panelData = [
  { category: "category1", title: "Panel 1", value: "Value 1", tooltip: "Tooltip 1" },
  { category: "category2", title: "Panel 2", value: "Value 2", tooltip: "Tooltip 2" },
  { category: "category3", title: "Panel 3", value: "Value 3", tooltip: "Tooltip 3" },
  { category: "category1", title: "Panel 4", value: "Value 4", tooltip: "Tooltip 4" },
  { category: "category2", title: "Panel 5", value: "Value 5", tooltip: "Tooltip 5" },
  { category: "category3", title: "Panel 6", value: "Value 6", tooltip: "Tooltip 6" },
  { category: "category1", title: "Panel 7", value: "Value 7", tooltip: "Tooltip 7" },
  { category: "category2", title: "Panel 8", value: "Value 8", tooltip: "Tooltip 8" },
  { category: "category3", title: "Panel 9", value: "Value 9", tooltip: "Tooltip 9" },
  { category: "category1", title: "Panel 10", value: "Value 10", tooltip: "Tooltip 10" },
  { category: "category2", title: "Panel 11", value: "Value 11", tooltip: "Tooltip 11" },
  { category: "category3", title: "Panel 12", value: "Value 12", tooltip: "Tooltip 12" },
  { category: "category1", title: "Panel 13", value: "Value 13", tooltip: "Tooltip 13" },
  { category: "category2", title: "Panel 14", value: "Value 14", tooltip: "Tooltip 14" },
  { category: "category3", title: "Panel 15", value: "Value 15", tooltip: "Tooltip 15" },
  { category: "category1", title: "Panel 16", value: "Value 16", tooltip: "Tooltip 16" },
  { category: "category2", title: "Panel 17", value: "Value 17", tooltip: "Tooltip 17" },
  { category: "category3", title: "Panel 18", value: "Value 18", tooltip: "Tooltip 18" },
  { category: "category1", title: "Panel 19", value: "Value 19", tooltip: "Tooltip 19" },
  { category: "category2", title: "Panel 20", value: "Value 20", tooltip: "Tooltip 20" }
];

// Define a function to create a panel element
function createPanel(data) {
  const panel = $("<div>").addClass("panel").addClass(data.category);
  const content = $("<div>").addClass("panel-content");
  const title = $("<span>").addClass("panel-title").text(data.title);
  const value = $("<span>").addClass("panel-value").text(data.value);
  content.append(title, value);
  panel.append(content);
  panel.attr("title", data.tooltip);
  return panel;
}

// Define a function to filter the panels by category
function filterPanels(category) {
  if (category === "all") {
    $(".panel").show();
  } else {
    $(".panel").hide();
    $(`.${category}`).show();
  }
}

// Attach click event listeners to the filter buttons
$(".filter-btn").click(function() {
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
  const category = $(this).data("filter");
  filterPanels(category);
});

// Create the panels and add them to the dashboard
for (let i = 0; i < panelData.length; i++) {
  const panel = createPanel(panelData[i]);
  $(".dashboard").append(panel);
}

// Add functionality to the filters
$(".filter-btn").hover(function() {
  $(this).addClass("hover");
}, function() {
  $(this).removeClass("hover");
});

$(".filter-btn").focus(function() {
  $(this).addClass("focus");
});

$(".filter-btn").blur(function() {
  $(this).removeClass("focus");
});
