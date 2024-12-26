# Import necessary modules
import os

# Function to generate HTML content
def generate_html(sport_name, content, index):
    file_name = f"sport{index}.html"
    html_content = f'''

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{sport_name} | playbook</title>
    <link rel="stylesheet" href="../css/styles.css">
    <script src="../js/app.js"></script>
    <script src="https://kit.fontawesome.com/b0f29e9bfe.js" crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <img src="../assets/logowithtext.png" alt="logowithtext" class="logo">
        <a href="#" class="login">Log in</a>
        <a href="#" class="login">Settings</a>
    </header>
    <nav>
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../explore.html">Explore</a></li>
            <li><a href="../gallery.html">Gallery</a></li>
            <li><a href="../about.html">About us</a></li>
            <li><a href="../contact.html">Contact</a></li>
            <li><a href="../quiz.html">Quiz</a></li>
            <li><a href="../news.html">News</a></li>
        </ul>
        <a href="#">another option</a>
    </nav>
    <div class="main2">
        <div class="top">
            <h1>Explore -> <span>{sport_name}</span> -> </h1>
        </div>
        <div class="content">
            <p>{content}</p>
            <div class="sportimage" style="background-image: url('../assets/sports/img{index}.jpg');"></div>
        </div>
    </div>

    <footer>
        <p>
            Thank you for visiting playbook!
        </p>
    </footer>
</body>

</html>
'''
    # Write the HTML content to the file
    with open(file_name, 'w') as html_file:
        html_file.write(html_content)

    print(f"Created file: {file_name} for sport: {sport_name}")

# Read sports and content
with open('splist.txt', 'r') as sports_file:
    sports = sports_file.readlines()

with open('content.txt', 'r') as content_file:
    contents = content_file.readlines()

# Generate HTML files
for i, (sport, content) in enumerate(zip(sports, contents), start=1):
    sport_name = sport.strip()
    content_text = content.strip()
    
    # Generate HTML for each sport
    generate_html(sport_name, content_text, i)
