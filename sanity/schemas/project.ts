import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the Project',
      type: 'string',
    },
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'skill',
          },
        },
      ],
    },
    {
      name: 'linkToRepo',
      title: 'LinkToRepo',
      type: 'url',
    },
  ],
})
