export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb9eafb1787f24354cc35c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rbfaezh7',
                  apiId: '2eea4201-3813-4f61-8889-42a3c55464ca'
                },
                {
                  buildHookId: '5eb9eafb975cef24b513dd4f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d6i78v6s',
                  apiId: 'ab2f3615-740b-4a31-ae2e-e03897589810'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3882501676/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d6i78v6s.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
