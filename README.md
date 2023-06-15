# Oh My GitHub Circles

`oh-my-github-circles` is an open-source repository that generates GitHub user circles for any given user by leveraging a GitHub Action to run the script. It is based on the [oh-my-github-pipeline](https://github.com/hooopo/oh-my-github-pipeline) repo and provides an easy way to sync data from a database, then generate a beautiful circle.png file.

![](/circle.png)


## Features
* Automatically generates user circles based on GitHub details
* Syncs data with a specified database
* Requires only minimal configuration
* Uses GitHub Actions to run the script

## Getting Started

### Prerequisites

To use `oh-my-github-circles`, you will need the following:

* GitHub account
* Database URL for syncing and retrieving data

### Setup

1. **Fork the repo**: Click the "Fork" button in the top-right corner of the `oh-my-github-circles` repo on GitHub.
2. **Enable GitHub Actions**: Navigate to the "Actions" tab on your forked repo and enable GitHub Actions if it's not already enabled.
3. **Configure Secrets**: In your forked repo, go to "Settings" > "Secrets" and click "New repository secret". Add the following secret:

   ```
   Name: DATABASE_URL
   Value: your_database_url
   ```

   Replace `your_database_url` with the actual URL of your database.

4. **Test the Action**: The GitHub Action should run automatically on every push to the repository. You can check the "Actions" tab to see the progress and view detailed logs.

5. **Access the circle.png file**: After the script has completed, you will find the generated `circle.png` file in the repository. To see the GitHub user circle, simply open the file.

## Contributing

Contributions are always welcome! Feel free to fork the repo, make changes, and create pull requests.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
