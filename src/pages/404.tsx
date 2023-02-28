import Layout from "@/components/Layouts/PageLayout";
import Link from "next/link";

export default function PageNotFound () {
    const pageDetails = {
        pageHeader: 'Page Not Found',
        pageTitle: 'Page Not Found',
        pageImage: ''
    }
    return <Layout pageHeader={pageDetails.pageHeader} pageImage={pageDetails.pageImage} pageTitle={pageDetails.pageTitle}>

        <p>
            Oops, I'm not sure how you ended up here but this page doesn't seem to exist!
        </p>

        <Link href="/">Go back home</Link>
    </Layout>
}