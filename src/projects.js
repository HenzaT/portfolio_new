export function projectCards() {
    const projects = [
        {
            'articleId': 'song-site',
            'title': 'Gimme a Song',
            'taglineEn': 'song idea app for musicians',
            'taglineJa': '作曲の手伝いアプリ',
            'spliderId': 'song-slider',
            'aria-label': 'Gimme a Song website image slides',
            'spliderLi': [
                { 'img1': 'assets/gimme-a-song-1.png', 'alt1': 'gimme a song home page' },
                { 'img2': 'assets/gimme-a-song-2.png', 'alt2': 'gimme a song idea page' },
                { 'img3': 'assets/gimme-a-song-3.png', 'alt3': 'gimme a song save page' },
                { 'img4': 'assets/gimme-a-song-4.png', 'alt4': 'gimme a song dashboard' },
            ],
            'icons': [
                { 'class': 'devicon-rails-plain ruby-icon', 'title': 'ruby on rails icon' },
                { 'class': 'devicon-javascript-plain js-icon', 'title': 'javascript icon' },
                { 'class': 'devicon-html5-plain-wordmark html-icon', 'title': 'html5 icon' },
                { 'class': 'devicon-sass-original sass-icon', 'title': 'sass icon' },
                { 'class': 'devicon-bootstrap-plain bootstrap-icon', 'title': 'bootstrap icon' },
                { 'class': 'devicon-postgresql-plain postgres-icon', 'title': 'postgresql icon' },
            ],
            'description': `A self-directed project built to help musicians overcome writer's block by generating random song elements.
        I focused on database design and relationships using <span class="highlight">PostgreSQL</span>
        and using <span class="highlight">Stimulus JS</span> for interactivity and local storage.`,
            'links': [
                { 'siteHref': 'https://gimme-a-song-75fdbe92334c.herokuapp.com/', 'siteTitle': 'Go to Gimme a Song Website' },
                { 'githubHref': 'https://github.com/HenzaT/gimme-a-song', 'githubTitle': 'Go to Gimme a Song Github repo' },
            ],
        }
    ];
}
;
