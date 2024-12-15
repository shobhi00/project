# Load necessary library
if (!require("htmlTable")) install.packages("htmlTable", dependencies = TRUE)
library(htmlTable)

# Generate a simple dataset
data <- data.frame(
  Name = c("Alice", "Bob", "Charlie"),
  Age = c(25, 30, 35),
  Score = c(88, 92, 95)
)

# Create an HTML table
html_content <- htmlTable(data, 
                          rnames = FALSE, 
                          css.cell = "padding: 10px; border: 1px solid #ddd;")

# Save the HTML content to a file
html_file <- "table.html"
write(html_content, file = html_file)

cat("HTML table saved as", html_file)
