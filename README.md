# Oh My GitHub Circles

`Oh My GitHub Circles` is a captivating visualization tool designed to showcase a user's friends on GitHub in a creatively arranged circle layout within an image. The friends are ranked based on various interaction metrics, fostering a sense of connection and community among GitHub users. This visually appealing image can be shared on social media or incorporated into your GitHub README profile to exhibit your network and interactions.

![](/circle.png)

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

![image](https://github.com/hooopo/oh-my-github-circles/assets/63877/10461d92-67c8-492b-990d-60181ede7b0b)


2. **Fill secrets for GitHub Actions**: In the "Settings" tab of your forked repository, navigate to "Secrets" and add the following secrets:

   3.1. `USER_LOGIN`: Your target GitHub username.
   
   3.2. `DATABASE_URL`: Register for TiDB Serverless and get the connection info. You can register here: [TiDB Serverless Registration](https://tidbcloud.com/?utm_source=github_circles&utm_medium=github_circles&utm_campaign=github_circles)

   Format of the connection info: `mysql2://<username>:<password>@<host>:<port>/<database>`
   
   3.3. `ACCESS_TOKEN`: Create a GitHub Personal Access Token by following [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

![image](https://github.com/hooopo/oh-my-github-circles/assets/63877/9428a16a-a6ae-409d-8537-6cc78bf97ce2)


3. **Enable GitHub Actions**: Navigate to the "Actions" tab in your forked repository, and click on the green "I understand my workflows, go ahead and enable them" button to enable GitHub Actions.

⚠️ _Image flag: Screenshot showing how to enable GitHub Actions._

4. **Manually trigger the first GitHub Action**: Go back to the "Actions" tab in your forked repository, choose the workflow you want to run, and click the "Run workflow" button to manually trigger it for the first time.

⚠️ _Image flag: Screenshot showing how to manually trigger a GitHub Action._

5. **Get the image URL or copy the image**: Once the GitHub Action has been successfully executed, you can either get the image URL or copy the generated image directly.

⚠️ _Image flag: Screenshot illustrating how to access the image._

Follow these steps, and you'll successfully set up "Oh My GitHub Circles" for your repository.

For each _Image flag_, make sure to include a screenshot or image that clearly captures the action described in that step to help users better understand the process.

## Contributing

Contributions are always welcome! Feel free to fork the repo, make changes, and create pull requests.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
