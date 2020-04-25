export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ea44d26d0093bf4132f0b5b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolioo-studio',
                  apiId: 'be1bf960-91d0-42bd-95a9-a9f7b7e6c2c8'
                },
                {
                  buildHookId: '5ea44d2603d6d4a77f0829bc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolioo',
                  apiId: '9e311e83-2dca-4caf-83a6-3540cf955f95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tedmosby77/sanity-gatsby-portfolioo',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolioo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
