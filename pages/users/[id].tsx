import Layout from "@/components/layout";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailsProps {
    user: User;
}

export default function UserDetails(props: UserDetailsProps) {
    const { user } = props;

    return (
        <Layout pageTitle="User Details">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    )

};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    }));

    return {
        paths,
        fallback: false,
    }
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}
