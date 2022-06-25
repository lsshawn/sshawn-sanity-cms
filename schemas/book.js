export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      dateFormat: 'YYYY-MM-DD'
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author'
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      required: false
    },
    {
      name: 'url',
      type: 'url',
      title: 'Book URL',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}
