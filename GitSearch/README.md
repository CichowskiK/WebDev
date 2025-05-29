🔍 Random GitHub Repository Finder
This is a simple web app that allows users to select a programming language and discover a random GitHub repository that primarily uses that language.

🔧 How It Works
The app fetches repositories from GitHub in two steps:

    1.Initial Fetch: It first queries GitHub to get the total number of repositories written in the selected language. This helps calculate how many pages of repositories exist.

    2.Random Selection: It then fetches a random page and selects a random repository from that page.

📦 Displayed Repository Info
Once a repository is selected, the app displays:

    -Repository Name

    -Description

    -Number of Forks

    -Number of Stars

    -Number of Open Issues

    -Direct Link to the repository on GitHub