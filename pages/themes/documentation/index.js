export default function index(props){
    return (
        <div className="w-full">
            <h1>Documentation</h1>
        </div>
    )
}

export async function getServerSideProps(ctx){
    return {
        props: {}
    }
}
