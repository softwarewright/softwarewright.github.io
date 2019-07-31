module.exports = {
    title: "Software Wright",
    description: "Let's Learn Together",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            // { text: 'Learn', link: '/learn/' },
            { text: 'Contact', link: '/contact/' },
            { text: 'GitHub', link: 'https://github.com/softwarewright' }
        ],
        logo: '/small-logo.png'
    },
    markdown: {
        lineNumbers: true
    }
}