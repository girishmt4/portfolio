import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the Social Platform',
      type: 'string',
    },
    {
      name: 'linkToProfile',
      title: 'LinkToProfile',
      type: 'url',
    },
  ],
})
