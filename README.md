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

## How to setup

TODO

## Contributing

Contributions are always welcome! Feel free to fork the repo, make changes, and create pull requests.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
