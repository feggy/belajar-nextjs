import Layout from "@/components/layout";
import { useRouter } from "next/router";
import styles from '../../styles/users.module.css'


interface User {
    users: Array<any>;
}

export default function Users(props: User) {
    const { users } = props;
    const router = useRouter();

    console.log(users);

    return (
        <Layout pageTitle="User">
            {users.map(
                (user) => (
                    <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                        <p>{user.name}</p>
                    </div>
                )
            )}
        </Layout>
    )
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users
        }
    }
}
