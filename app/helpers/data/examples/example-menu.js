module.exports = {
    data: [
        {
            type: 'page',
            pageId: 'copyright',
            title: 'Page Link'
        },
        {
            type: 'anchor',
            anchor: '#example1',
            title: 'Anchor Link'
        },
        {
            type: 'external',
            url: 'http://url',
            title: 'External Link 1',
            target: '_blank'
        },
        {
            type: 'external',
            url: 'http://url',
            title: 'External Link 2'
        },
        {
            type: 'download',
            file: 'examples/test.zip',
            title: 'Download link'
        }
    ]
}