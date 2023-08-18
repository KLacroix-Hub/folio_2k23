import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(50)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover page projects',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name:'client',
      title:'Client',
      type:'string',
    }),
    defineField({
      name:'technos',
      title:'Technos',
      type:'string',
    }),
    defineField({
      name:"projectType",
      title:"Type de projet",
      type:"string",
    }),
    defineField({
      name: 'year',
      title: 'Année',
      type: 'number',
    }),
    defineField({
      name: 'imageGallery',
      title: 'Images du projet',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publié à',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Explication projet',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
