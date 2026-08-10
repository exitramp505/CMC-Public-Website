# Church Multiplication Collective public website

This Next.js site is the public-facing CMC website. Its people, resources,
church models, and Discernment event content are managed by national
administrators from the **Website** area of CMC Pathway.

The public site reads only published content from CMC Pathway. Checked-in JSON
remains as a resilient fallback if the Pathway content feed is temporarily
unavailable.

The former Decap CMS and Netlify Identity admin have been retired. Visiting
`/admin/` now directs administrators to the unified CMC Pathway website editor.

Optional environment variables:

- `CMC_PATHWAY_CONTENT_URL` overrides the published content feed.
- `CMC_PATHWAY_EVENTS_URL` overrides the public events feed.
