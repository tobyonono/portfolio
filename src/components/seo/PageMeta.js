
const PageMeta = () => {

    return (
        <Head>
            <title key="title">{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={SEO.DESCRIPTION} />
            <meta property="og:description" content={SEO.DESCRIPTION} />

            <meta property="og:image" content={photo.url} />
            <meta property="og:image:width" content="1000" />
            <meta property="og:image:height" content="1000" />
            <meta property="og:image:alt" content={photo.title} />

            {path && <meta property="og:url" content={`${SEO.ROOT}/${path}`} />}

            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@refugeworldwide" />
        </Head>
    )
}