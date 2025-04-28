import { useRouter } from "next/router";

const Route = () => {
    const router = useRouter();
    const { id } = router.query

    return (
        <div>
            <h1>
                Route ID: {id}
            </h1>
        </div>
    )}