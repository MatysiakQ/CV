
import type { GitHubRepo } from "@/types/github";

interface RawGitHubRepo {
  id?: number;
  name?: string;
  description?: string | null;
  html_url?: string;
  language?: string | null;
  topics?: unknown;
  created_at?: string;
  updated_at?: string;
  stargazers_count?: number;
  forks_count?: number;
}

const GITHUB_HEADERS = {
  Accept: "application/vnd.github.mercy-preview+json",
};

const normalizeRepo = (repo: RawGitHubRepo): GitHubRepo | null => {
  if (!repo || typeof repo.name !== "string" || typeof repo.html_url !== "string") {
    return null;
  }

  return {
    id: repo.id ?? 0,
    name: repo.name,
    description: repo.description ?? null,
    html_url: repo.html_url,
    language: repo.language ?? null,
    topics: Array.isArray(repo.topics) ? repo.topics.filter((topic): topic is string => typeof topic === "string") : [],
    created_at: repo.created_at ?? "",
    updated_at: repo.updated_at ?? "",
    stargazers_count: repo.stargazers_count ?? 0,
    forks_count: repo.forks_count ?? 0,
  };
};

const fetchGitHubData = async (url: string, username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(url, { headers: GITHUB_HEADERS });

    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub data: ${response.status}`);
    }

    const repos = await response.json();

    return (Array.isArray(repos) ? repos : [])
      .map((repo: RawGitHubRepo) => normalizeRepo(repo))
      .filter((repo): repo is GitHubRepo => repo !== null)
      .filter((repo) => !repo.name.includes(".github.io") && repo.name !== username);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return [];
  }
};

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> =>
  fetchGitHubData(
    `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
    username
  );

export const fetchStarredRepos = async (username: string): Promise<GitHubRepo[]> =>
  fetchGitHubData(`https://api.github.com/users/${username}/starred?per_page=100`, username);

