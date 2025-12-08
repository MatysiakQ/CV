
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
      {
        headers: {
          // Request topics in the response
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.status}`);
    }

    const repos = await response.json();

    // Normalize repos to avoid runtime errors when fields are missing
    const normalized: GitHubRepo[] = repos
      .map((r: any) => ({
        id: r.id,
        name: r.name,
        description: r.description ?? null,
        html_url: r.html_url,
        language: r.language ?? null,
        topics: Array.isArray(r.topics) ? r.topics : [],
        created_at: r.created_at,
        updated_at: r.updated_at,
        stargazers_count: r.stargazers_count ?? 0,
        forks_count: r.forks_count ?? 0,
      }))
      .filter((repo: GitHubRepo) => !repo.name.includes('.github.io') && repo.name !== username);

    return normalized;
  } catch (error) {
    // Keep logging for debugging; caller should handle empty array case
    // eslint-disable-next-line no-console
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};
