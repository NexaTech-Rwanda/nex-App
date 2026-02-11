import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    image?: string;
}

const SEO = ({
    title = "NexaTech Rwanda - Building Africa's Tech Ecosystem",
    description = "Engineering Scalable, Ready-to-Market Solutions for Africa’s Future. We architect comprehensive digital ecosystems to solve complex operational challenges.",
    name = "NexaTech Rwanda",
    type = "website",
    image = "/og-image.png" // Potential future asset
}: SEOProps) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
