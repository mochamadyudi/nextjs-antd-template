import "../src/styles/app.scss"
import 'antd/dist/antd.css';
import {ConfigProvider} from 'antd';
import {IntlProvider} from "react-intl";
import ThemesWrapper from "../src/components/shared-layouts/ThemesWrapper";
import ja_JP from "antd/lib/locale/ja_JP";
import en_US from "antd/lib/locale/en_US";
import {useState} from "react";
import enMsg from "../src/lang/locales/en_US.json";
import jaMsg from "../src/lang/locales/ja_JP.json";

const AppLocale = {
    en: {
        antd: en_US,
        locale: 'en-US',
        messages: {
            ...enMsg
        },
    },
    ja: {
        antd: ja_JP,
        locale: 'ja-JP',
        messages: {
            ...jaMsg
        },
    }
};


function MyApp({Component, pageProps}) {
    const [direction, setDirection] = useState('ltr')
    const [locale, setLocale] = useState('en')

    return (
        <IntlProvider
            locale={AppLocale[locale].locale}
            messages={AppLocale[locale].messages}>
            <ConfigProvider locale={AppLocale[locale].antd} direction={direction}>
                <ThemesWrapper
                    {...pageProps}
                    themes={{
                        locale,
                        direction,
                        setLocale,
                        setDirection
                    }}
                >

                    <Component
                        {...pageProps}
                        themes={{
                            locale,
                            direction,
                            setLocale,
                            setDirection
                        }}
                    />

                </ThemesWrapper>

            </ConfigProvider>
        </IntlProvider>
    )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};

}
export default MyApp
