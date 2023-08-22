import '@/styles/globals.css';
import BioStorybookWidget from 'bio-storybook-widget';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <BioStorybookWidget projectSource={'monzo'} />
        </>
    );
}
