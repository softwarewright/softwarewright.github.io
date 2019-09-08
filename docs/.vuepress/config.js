module.exports = {
    title: "Software Wright",
    description: "Let's Learn Together",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['script', {
            src:
                "//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js",
            type: "text/javascript",
            ["data-dojo-config"]: "usePlainJson: true, isDebug: false"
        }],
        ['script', { type: 'text/javascript', src: '/js/mailchimp.js' }]
    ],
    themeConfig: {
        sidebar: {
            '/blog/posts/learn-js-through-testing/': [
                '00-getting-started',
                '01-variables',
                '02-basic-arithmetic-operators',
                '03-basic-assignment-operators',
                '04-equality-operators'
            ]
        },
        nav: [
            // { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Learn', link: '/learn/' },
            { text: 'Contact', link: '/contact/' },
            { text: 'Support', link: 'https://www.patreon.com/softwarewright' },
            {
                text: 'Social',
                items: [
                    { text: 'GitHub', link: 'https://github.com/softwarewright' },
                    { text: 'Twitter', link: 'https://twitter.com/softwarewright' },
                    { text: 'Facebook', link: 'https://www.facebook.com/softwarewright' },
                    { text: 'Instagram', link: 'https://www.instagram.com/softwarewright/' },
                    { text: 'YouTube', link: 'https://www.youtube.com/channel/UCl_Aa4mKPKspKyBm8JnHYKQ' },
                    { text: 'LinkedIn', link: 'https://www.linkedin.com/in/darrius-wright' },
                ]
            }
        ],
        logo: '/small-logo.png',

        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'softwarewright/softwarewright.github.io',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: '',

        // Optional options for generating "Edit this page" link

        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'vuepress',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Notice any issues? Help by contributing!'
    },
    markdown: {
        lineNumbers: true
    },
    ga: 'UA-139419580-4',
    plugins: [
        ['@vuepress/google-analytics', { 'ga': 'UA-139419580-4' }],
        // 'vuepress-plugin-disqus',
        [
            'feed',
            {
                enable: true,
                canonical_base: "https://softwarewright.dev/",
                feeds: {
                    rss2: {
                        enable: true,
                        file_name: 'rss.xml',
                        head_link: {
                            enable: true,
                            type: 'application/rss+xml',
                            title: '%%site_title%% RSS Feed',
                        }
                    }
                }
            }
        ]
    ]
}