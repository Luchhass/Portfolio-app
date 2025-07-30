import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "username query param required" },
      { status: 400 }
    );
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GitHub token not configured" },
      { status: 500 }
    );
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        repositories(privacy: PUBLIC, first: 100) {
          totalCount
          nodes {
            primaryLanguage {
              name
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json({ error: text }, { status: response.status });
    }

    const json = await response.json();

    if (json.errors) {
      return NextResponse.json(
        { error: json.errors[0].message },
        { status: 400 }
      );
    }

    const repos = json.data.user.repositories;
    const repoCount = repos.totalCount;

    let commitCount = 0;
    const languages = {};

    repos.nodes.forEach((repo) => {
      commitCount += repo.defaultBranchRef?.target?.history?.totalCount || 0;

      const language = repo.primaryLanguage?.name;
      if (language) {
        languages[language] = (languages[language] || 0) + 1;
      }
    });

    let mostUsedLanguage = null;
    if (Object.keys(languages).length > 0) {
      mostUsedLanguage = Object.keys(languages).reduce((a, b) =>
        languages[a] > languages[b] ? a : b
      );
    }

    return NextResponse.json(
      {
        repoCount,
        commitCount,
        mostUsedLanguage: mostUsedLanguage || "N/A",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
