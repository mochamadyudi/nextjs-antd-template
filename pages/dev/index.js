export default function index(){
    return (
        <div className="w-full">

        </div>
    )
}


export async function getServerSideProps(ctx){
    return {
        props: {
            query:ctx.query
        }
    }
}
