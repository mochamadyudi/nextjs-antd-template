import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThemesWrapper from "../src/components/shared-layouts/ThemesWrapper";

export default function Home(props) {
    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}


export async function getServerSideProps(ctx) {
    return {
        props: {}
    }
}
