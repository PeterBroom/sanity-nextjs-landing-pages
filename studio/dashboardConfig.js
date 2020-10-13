export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f84f0652a62ca29564f0a21',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3qb8pk8o',
                  apiId: 'b7855712-f051-464f-b088-a66772926333'
                },
                {
                  buildHookId: '5f84f06533cc662feedb0ab2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w8dwe89z',
                  apiId: 'd8902e53-e455-439c-b677-cdb4c42ce45e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBroom/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w8dwe89z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
