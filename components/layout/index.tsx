import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const { children, pageTitle} = props;

    return (
        <>
            <Head>
                <title>{`Belajar NextJS | ${pageTitle}`}</title>
                <meta name="description" content="Website NextJS Basic" />
            </Head>
            <div>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </>
    )
};
