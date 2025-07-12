import { RepositoryItem } from "./RepositoryItem";

const repositoryName = "unform2";

export function RepositoryList() {
  return (
    <section className="repository-List">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository="DC Comics" />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
