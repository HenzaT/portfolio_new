export const projectsData = [
    // Gimme a Song
    {
        'articleId': 'song-site',
        'title': 'Gimme a Song',
        'taglineEn': 'song idea app for musicians',
        'taglineJa': '作曲の手伝いアプリ',
        'spliderId': 'song-slider',
        'aria-label': 'Gimme a Song website image slides',
        'spliderLi': [
            {
                'url': 'assets/gimme-a-song-1.png',
                'alt': 'gimme a song home page'
            },
            {
                'url': 'assets/gimme-a-song-2.png',
                'alt': 'gimme a song idea page'
            },
            {
                'url': 'assets/gimme-a-song-3.png',
                'alt': 'gimme a song save page'
            },
            {
                'url': 'assets/gimme-a-song-4.png',
                'alt': 'gimme a song dashboard'
            },
        ],
        'icons': [
            {
                'class': 'devicon-rails-plain ruby-icon',
                'title': 'ruby on rails icon'
            },
            {
                'class': 'devicon-javascript-plain js-icon',
                'title': 'javascript icon'
            },
            {
                'class': 'devicon-html5-plain-wordmark html-icon',
                'title': 'html5 icon'
            },
            {
                'class': 'devicon-sass-original sass-icon',
                'title': 'sass icon'
            },
            {
                'class': 'devicon-bootstrap-plain bootstrap-icon',
                'title': 'bootstrap icon'
            },
            {
                'class': 'devicon-postgresql-plain postgres-icon',
                'title': 'postgresql icon'
            },
        ],
        'description': `A self-directed project built to help musicians overcome writer's block by generating random song elements.
      I focused on database design and relationships using <span class="highlight">PostgreSQL</span>
      and using <span class="highlight">Stimulus JS</span> for interactivity and local storage.`,
        'links': [
            {
                'url': 'https://gimme-a-song-75fdbe92334c.herokuapp.com/',
                'title': 'Go to Gimme a Song Website',
                'class': 'fa-solid fa-arrow-up-right-from-square',
                'iTitle': 'url link icon',
            },
            {
                'url': 'https://github.com/HenzaT/gimme-a-song',
                'title': 'Go to Gimme a Song Github repo',
                'class': 'fa-brands fa-github',
                'iTitle': 'github icon',
            },
        ],
    },
    // aptist
    {
        'articleId': 'aptist-site',
        'title': 'aptist music',
        'taglineEn': 'music portfolio website',
        'taglineJa': '音楽ポートフォリオ',
        'spliderId': 'aptist-slider',
        'aria-label': 'aptist website image slides',
        'spliderLi': [
            {
                'url': 'assets/aptistmusic.com_1.png',
                'alt': 'aptist home'
            },
            {
                'url': 'assets/aptistmusic.com_2.png',
                'alt': 'aptist info'
            },
            {
                'url': 'assets/aptistmusic.com_3.png',
                'alt': 'aptist discs'
            },
            {
                'url': 'assets/aptistmusic.com_4.png',
                'alt': 'aptist discs reveal'
            },
        ],
        'icons': [
            {
                'class': 'devicon-react-original react-icon',
                'title': 'react js icon'
            },
            {
                'class': 'devicon-typescript-plain ts-icon',
                'title': 'typescript icon'
            },
            {
                'class': 'devicon-css3-plain-wordmark css-icon',
                'title': 'css3 icon'
            },
            {
                'class': 'devicon-vitejs-plain vite-icon', 'title': 'vite js icon'
            },
        ],
        'description': `This is a site to showcase my music. I used <span class="highlight">react router</span> for multiple pages,
      <span class="highlight">react spring</span> to explore transitions and focused on data handling through props.
      Wanting a simple contact form with no backend, I incorporated <span class="highlight">emailjs</span> and recaptcha.`,
        'links': [
            {
                'url': 'https://aptistmusic.com/',
                'title': 'Go to aptist Website',
                'class': 'fa-solid fa-arrow-up-right-from-square',
                'iTitle': 'url link icon',
            },
            {
                'url': 'https://github.com/HenzaT/music-page-copy',
                'title': 'Go to aptist Github repo',
                'class': 'fa-brands fa-github',
                'iTitle': 'github icon',
            },
        ],
    },
];
