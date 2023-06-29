# Oh My GitHub Circles

`Oh My GitHub Circles` is a captivating visualization tool designed to showcase a user's friends on GitHub in a creatively arranged circle layout within an image. The friends are ranked based on various interaction metrics, fostering a sense of connection and community among GitHub users. This visually appealing image can be shared on social media or incorporated into your GitHub README profile to exhibit your network and interactions.


![image](https://github.com/hooopo/oh-my-github-circles/assets/63877/355f958f-b9f8-4478-8021-48d2dd7958c8)



## How it works

This tool visualizes a user's friends on GitHub in a circle arrangement within an image. Friends are ranked based on various interactions and their follower count. Assuming User A is the target user, the ranking for User B comprises the following points:

1. If B follows A, B gains 1 point.
2. If A follows B, B gains 1 point.
3. If A and B mutually follow each other, B gets an additional bonus of 1 point (totaling 3 points).

Besides the following interactions, the ranking also considers:

1. Pull request (PR) score - limited to a maximum of 1.6
2. Issue score - limited to a maximum of 1.6
3. Repository star score - limited to a maximum of 1.5

The ranking is established through these steps:

1. Calculate the sum of points obtained from following interactions, along with the PR, issue, and star scores.
2. Sort the friends in descending order using the combined score, and then by the user's follower count (also in descending order).
3. Display up to 49 friends based on this ranking in the generated image.

To summarize, `oh-my-github-cicles` organizes a user's friends on GitHub in a circle layout image. The ranking of friends takes into account following relationships, PR, issue, and star scores, and the user's follower count.

## How to setup "Oh My GitHub Circles" for youself

1. **Fork the repository**: Start by forking this repository to your own GitHub account using the "Fork" button at the top right corner of the repository page.

2. **Fill secrets for GitHub Actions**: In the "Settings" tab of your forked repository, navigate to "Secrets" and add the following secrets:

   3.1. `USER_LOGIN`: Your target GitHub username.
   
   3.2. `DATABASE_URL`: Register for TiDB Serverless and get the connection info. You can register here: [TiDB Serverless Registration](https://tidbcloud.com/?utm_source=github_circles&utm_medium=github_circles&utm_campaign=github_circles)

   Format of the connection info: `mysql2://<username>:<password>@<host>:<port>/<database>`
   
   3.3. `ACCESS_TOKEN`: Create a GitHub Personal Access Token by following [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). ⚠️ If you fork this project to your personal account, the ACCESS_TOKEN is optional. However, if you fork this project to an organization, the ACCESS_TOKEN cannot be omitted.

![image](https://github.com/hooopo/oh-my-github-circles/assets/63877/9428a16a-a6ae-409d-8537-6cc78bf97ce2)


3. **Enable GitHub Actions**: Navigate to the "Actions" tab in your forked repository, and click on the green "I understand my workflows, go ahead and enable them" button to enable GitHub Actions.

![image](https://github.com/hooopo/oh-my-github-circles/assets/63877/5b1b31b8-bfc7-416d-917c-8e6403b419ac)

Next:

![image](https://github.com/hooopo/oh-my-github-circles/assets/63877/28f90221-e463-4f44-8f35-4f4eaa2cbac1)



4. **Manually trigger the first GitHub Action**: Go back to the "Actions" tab in your forked repository, choose the workflow you want to run, and click the "Run workflow" button to manually trigger it for the first time.

![image](https://github.com/hooopo/oh-my-github-circles/assets/63877/d883ab0b-e9d6-40a7-a9a5-dd3ae87c58fc)


5. **Get the image URL or copy the image**: Once the GitHub Action has been successfully executed, you can either get the image URL or copy the generated image directly.

Follow these steps, and you'll successfully set up "Oh My GitHub Circles" for your repository.

## Special Thanks

_Oh My GitHub Circles_ was inspired by [**Chirpty**](https://chirpty.com/), a similar visualization project for Twitter profiles. We would also like to express our gratitude to the following projects and services that played a crucial role in the development and implementation of _Oh My GitHub Circles_:

1. **oh-my-github-pipeline**: Our project depends on the [oh-my-github-pipeline](https://github.com/hooopo/oh-my-github-pipeline) which is responsible for processing and transforming the GitHub user data.

2. **GitHub Actions**: [GitHub Actions](https://github.com/features/actions) automates the entire workflow of our project, making it easy to build, test, and deploy the visualizations on demand.

3. **TiDB Serverless**: We leverage [TiDB Serverless](https://tidbcloud.com/?utm_source=github_circles&utm_medium=github_circles&utm_campaign=github_circles) for seamless database management and highly efficient data handling, enabling a smooth user experience.

There is also a sister project called [repo-contributor-circles](https://github.com/hooopo/repo-contributor-circles), which is used to generate circle images of repository contributors, and is still under development):

![](https://raw.githubusercontent.com/hooopo/repo-contributor-circles/main/circle.png?vv=1)

## Related repos

* [Oh My GitHub Circles](https://github.com/hooopo/oh-my-github-circles)
* [Oh My GitHub Pipeline](https://github.com/hooopo/oh-my-github-pipeline)
* [Repo Contributor Circles](https://github.com/hooopo/repo-contributor-circles)
* [Repo Track Pipeline](https://github.com/hooopo/repo-track-pipeline)
* [OSSInsight Lite](https://github.com/pingcap/ossinsight-lite)
* [OSSInsight](https://github.com/pingcap/ossinsight)
* [Hackernews Insight](https://github.com/hooopo/hackernews-insight)
* [Oh My GitHub Dashboard](https://github.com/hooopo/oh-my-github-dashboard)

## Contributing

Contributions are always welcome! Feel free to fork the repo, make changes, and create pull requests.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
