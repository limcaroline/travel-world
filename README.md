# The Travel World Website

## Table of Contents:
- Project Overview
- Purpose
  - Business Goals
  - Target Users
  - User Needs
- User Stories Overview
- Website Structure
  - Menu
  - Wireframes
- Features
- Technologies Used
- Deployment & Local Development
- Testing
- Stretch Goals
- Future Enhancements
- Credits

#### Travel World is a travel website that allows potential customers to combine stays at hotels within the Scandia Hotel Chain* with available tour packages and add-ons to create a travel package that gives convenience and accessibility to potential customers. This removes the stress of planning and coordinating so that the hotel guests can simply enjoy their time at their place of choice and make the most of their trip. 


##### *Note: Please note that the Scandia Hotel Chain shown in this website and project is fictional and is loosely based but not in any way affiliated with the Scandic Hotels. 

### Project Overview


### Purpose
#### - Business Goals
- Provide a platform for users to plan and book holiday packages.
- Curate travel components to offer exclusive bundled deals.

#### - Target Users
- Solo travelers, couples, and families seeking a hassle-free travel and booking experience.
- Business travelers opting to conveniently extend work trips into leisure getaways.
- Digital nomads looking for localized experiences with accommodation and transport options.


#### - User Needs
- Easily find destinations that match specific interests and travel styles.
- Book ready-made packages and/or additionally customize components (hotel, experience, transport).
- Access relevant destination details, maps, and curated local highlights.


### User Stories Overview

See Projects page in the travel-world Github repository for complete user stories - (https://github.com/users/limcaroline/projects/6)

- As a site visitor, I would like to have user-friendly navigation and design that I can easily access through different devices so I can easily find information.

  - The site is fully responsive across devices.
  - Site layout and navigation are intuitive across sections.

- As a user, I want to search holiday packages by city on my available dates for myself or my travel group so I can narrow my search.
  - Search option where the city, dates, and number of people is provided. 
  - This search option will generate results for applicable accommodation and experiences.

- As a user, I want to view hotels/accommodations where I could stay at.
  - A list of hotels for the selected city will be available with relevant details such as address, hotel description, room amenities, and price.

- As a user, I want to view experience tour packages to simplify planning. 
  - A list of attractions and restaurants included in the tour packages for the selected city will be available with relevant details such as description, price, and discount offered.
  - A list of tour schedule is provided.

- As a user, I want to view destinations and the hotels and experiences on an interactive map.
  - A map showing the locations of the hotels, attractions, and restaurants is provided so that users can view the options visually.

- As a user, I want to see clearly how many days/nights, prices, and other details of what each package may include given the latest information.
  - Updates to the information provided is done to reflect the latest and complete information. 

- As a user, I want to see a summary of my selection and complete my booking.
  - A booking form where users can input their details and book their selected holiday package is available.
  - A confirmation message is given that a booking is successful.

- Good-to-have (future): As a user, I want the option to include add-ons such as a rental vehicle for convenience.
  - A list of add-ons for the selected city will be available with relevant details such as description, price, and discount offered.


### Website Structure
#### - Menu
- Home 
  - includes Search option and highlighted travel packages
- Map
  - includes hotels, attractions, and restaurants with relevant information
- Book Now!
  - includes a final selection summary and allows user to book the travel package


#### - Wireframes

- Wireframe for mobile screens
![Wireframe for mobile](assets/images/wireframe-mobile.webp)

- Wireframe for tablet screens
![Wireframe for tablets](assets/images/wireframe-tablet.webp)

- Wireframe for larger screens
![Wireframe for larger](assets/images/wireframe-larger.webp)


### Features
- Responsive layout using CSS - mobile, tablets, larger screens
- Navigation bar for easy browsing

- Travel packages, hotel, experience (attractions and restaurants), and add-on listings in card format

- Interactive map powered by Google Maps and Google Places API with relevant locations pinned

- Booking form and confirmation message



### Technologies Used
#### Languages Used
- HTML  
- CSS  
- JavaScript


#### Frameworks, Libraries & Programs Used
- VS Code for local development https://code.visualstudio.com/
- Github for saving and storing files, and version control https://github.com/
- Canva for images and wireframes https://www.canva.com/
- Preview Editor app in MacBook for editing photos https://preview.app/login
- IMAGECOLORPICKER.com to choose color palette https://imagecolorpicker.com/
- Squoosh for converting image file types from png/jpg to. webp https://squoosh.app/
- Google Fonts for typography https://fonts.google.com/
- Font Awesome for icons https://fontawesome.com/
- Favicon.io for generation of favicons https://favicon.io/
- Bootstap Version 5.3 for styling/layout https://getbootstrap.com/
Autoprefixer for CSS versatility https://autoprefixer.github.io/
The W3C CSS Validation Service to review codes https://www.w3.org/
Nu Html Checker to review codes https://validator.nu/
WebAIM: Contrast Checker to verify contrast for color palette https://webaim.org/resources/contrastchecker/




### Deployment & Local Development
Github Repo: https://github.com/limcaroline/travel-world

#### How to create repo in Github for deployments
I first followed these steps from Code Institute module to create a repo in github:
1. Log into www.github.com. Click the plus icon and select New repository.
2. Name the repository accordingly - Note: I used travel-world.
3. Select Create repository.
4. Copy the commands from … or create a new repository on the command line.
5. In VS Code, use "Open folder" from the file menu to open your vscode-projects folder and create a new project directory.
6. Open a new terminal, and paste in the commands copied from GitHub.
7. You should now see the README.md file appear in the Explorer.

#### How to Deploy 
These are the steps to deploy in github that I followed, also referenced from Code Institute's module:

From VSCode, commit and push all your changes to Github.
Go to GitHub repo https://github.com/limcaroline/travel-world, select Settings, then Pages.
Select the main branch and then Save.
In the Code tab, select Deployments.
On the Deployments page, refresh until the link is provided.
Click the link to check that it is working

#### How to Fork
In Github, go to this Repository: https://github.com/limcaroline/travel-world
Click the Fork button at the top right of this page to create your own copy of the repo.

#### How to Clone
In Github, go to this Repository: https://github.com/limcaroline/travel-world
Click the green Code button.
Copy the URL under "HTTPS".
Open your terminal.
Run this command: git clone https://github.com/limcaroline/travel-world





### Testing
Manual testing
Manually tested the pages for responsiveness, functionality and user experience.

Automated testing

Validate the HTML code for all 3 pages. >> Fixed few errors such as unclosed elements and warnings such as lacking headers. See screenshots for example.

![HTML checker](assets/images/Image 2025-07-16 at 03.28.webp)

Validation testing Note: Also used autoprefixer and CSS validation >> Copy pasted from autofixer for the transition code for social links, similar to what was done in Boardwalk Games which I have followed through this project. All CSS ok.
![HTML checker](assets/images/Image 2025-07-16 at 03.31.webp)
![HTML checker](assets/images/Image 2025-07-16 at 03.32.webp)
![HTML checker](assets/images/Image 2025-07-16 at 03.46.webp)




Use Lighthouse to create automated reports that assess the performance, accessibility and best practices of the pages. I have gotten the results to green particularly on performance by changing the image file types from png/jpg to webp. Also updated the color contrast and put some styling in bold in parts like navigation menu and buttons

### Future Enhancements
- Create add-ons page for rental vehicle, insurance, airport shuttle, etc.
- Calculate and show cumulative prices in the summaries




### Credits
Content
- I wrote the content with support - see 'Acknowledgments' below.

Media
- See also Frameworks, Libraries & Programs Used for more references
- Canva for images
- Bootstap Version 5.3 for styling/layout
- Google Fonts for typography
- Font Awesome for icons

Code
- Bootstrap for cards and similar, also see comments in VSCode https://getbootstrap.com/
- Code Institute's modules, including BoardWalk Games and Love Running https://learn.codeinstitute.net/dashboard
- ChatGPT for helping with debugging, structuring, and ideas https://chatgpt.com/
- Autoprefixer for code prefix on transition


Acknowledgments
- Big thanks to Code Institute’s team as well as materials and Level 5 Diploma in Web Application Development modules and walkthrough projects, which I have used as references!
- Special thanks to ChatGPT by OpenAI for assistance in troubleshooting and debugging, as well as support in ideas and structure.
- Thank you to all the mentioned in this readme and in VScode that was helpful in making this project!