## Portfolio Website
This is a portfolio website to showcase my projects, skills and interests. 

## Goals
My aims here were:
- to create a portfolio website that I could use to showcase my projects and skills (particularly frontend)
- to make it look modern and sleek
- to make it interactive
- to use only the 'vanilla' technologies of HTML5, CSS3 and JavaScript. This meant no frameworks or libraries

I was keen on this last point, as I believed that it would help to consolidate my skills in these three main technologies. Halfway through the project, I decided to convert to using TypeScript.

## Tech Stack
- HTML5
- CSS3
- JavaScript
- TypeScript

## Process
Before I began, I sat down and sketched out the different sections I wanted to include. During my previous project, 'Morning Burrito', I learnt about the importance of making the user experience smooth by including JavaScript methods like scrollIntoView.
I knew I wanted:
- a home section. This would be kept simple with minimal text.
- a projects section. This would have links and information about each project, with each project shown as a card.
- a skills section. This would include the technologies I use and am confident with.
- an about section. This would give more information about me, my interests and education.
- a music section. As a musician, I wanted to include the music I have written and released as it is a passion of mine.
- a contact section
- a navbar for easy navigation

I looked up lots of portfolios online to find ones I liked, and made notes of any features I wanted to include. I also had to decide what kind of background I wanted - would I have a static colour or an interactive background with floating shapes etc? Inspired by a developer friend, I opted for a dynamic background. I loved the idea of pulsating, flowing colours and so used css keyframes to gradually cycle through colours. 

## Reflections
I really enjoyed making this portfolio, and there were many 'lightbulb' moments. One early idea that I wanted to implement and that I'm particularly proud of is the toggling icon functionality in the skills section. I wanted to allow the user to bring certain skills into focus, whilst fading out the others. I also wanted the skills to reset when the user scrolled to a different part of the portfolio; I used the intersection observer API for this, and later used this same API for any scroll-based event. 

https://github.com/user-attachments/assets/de68c5a0-a569-4ae3-82ca-fe4c124073d7


## Future Additions
- I am currently working on building a burger menu for the navbar when viewing on mobile and smaller devices.
- I would also like to implement a music player widget, that appears when the user starts playing one of my songs in the 'music' section. This would allow the user to pause/play at any time, instead of needing to go back to the 'music' section.
- When the overlay comes over the cards, the underlying content is actually darkened (as if roller blinds are being closed over it). I found it hard to implement the reverse, ie as the overlay is closed the content is brightened, and so this is something I'd like to add too.
