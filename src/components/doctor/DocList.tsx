import { Loading, useGetList } from "react-admin";

export const DocList = () => {
  const { data, isLoading, error } = useGetList("doctor", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "firstname", order: "DESC" },
    filter: { password: "passer123" },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  return (
    <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
  );
};
