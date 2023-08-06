export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001").then(x => x.json());
    return {
        props: {
            status: res.status,
        }
    }
}


export default function Home() {
    return (
        <div className={"home-container"}>
            <head>
                <title>The JAYRONATOR</title>
                <link rel="icon" href="/public/favicon.ico" />
            </head>

            <main className="main-container">
                <h1 className="main-title">
                    Welcome to the Jayronator Project
                </h1>
                <div>Status is: </div>
            </main>
        </div>
    )

}