import Layout from "@/components/Layouts/PageLayout";
import Link from "next/link";

export default function PageNotFound () {
    const pageDetails = {
        pageHeader: 'Oops',
        pageTitle: 'Page Not Found',
        pageImage: ''
    }
    return <Layout pageHeader={pageDetails.pageHeader} pageImage={pageDetails.pageImage} pageTitle={pageDetails.pageTitle}>
        <p>
            Oops, I&apos;m not sure how you ended up here but this page doesn&apos;t seem to exist!
        </p>

        <Link href="/">Go back home</Link>
    </Layout>
};