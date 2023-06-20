#!/bin/bash

read -p "Enter the name of your project: " project_name

# Create the project directory
mkdir "$project_name"
cd "$project_name"

# Create the directories
mkdir img css js

# Create the HTML file
touch index.html

# Add the HTML boilerplate code
echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>$project_name</title>
  <link rel=\"stylesheet\" href=\"css/style.css\">
</head>
<body>
  <header>
    <h1>$project_name</h1>
  </header>

  <main>
    <h2>Welcome to your project!</h2>
    <p>Replace this content with your own.</p>
  </main>

  <script src=\"js/script.js\"></script>
</body>
</html>" > index.html

# Create the CSS file
touch css/style.css

# Create the JavaScript file
touch js/script.js

# Create the README file
echo "# $project_name" > README.md

# Create the .gitignore file
echo "img/
css/
js/
.vscode/
.idea/
node_modules/" > .gitignore

echo "Project $project_name setup completed successfully."
