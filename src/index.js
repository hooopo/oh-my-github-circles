const render = require("./image");
const {renderText} = require("./text");
const mysql = require('mysql2/promise');

function getDbConfig() {
	const url = process.env.DATABASE_URL;
	const parsedUrl = new URL(url);
	const host = parsedUrl.hostname;
	const port = parsedUrl.port;
	const user = parsedUrl.username;
	const password = parsedUrl.password;
	const database = parsedUrl.pathname.replace("/", "");
	return {
		host: host,
		port: port,
		user: user,
		password: password,
		database: database,
		ssl: {
			minVersion: 'TLSv1.2',
			rejectUnauthorized: true
		}
	}
}

async function getQueryResults(query) {
	const conn = await mysql.createConnection(getDbConfig());
	const [rows, fields] = await conn.execute(query);
	return rows;
}


function splitArray(input, groupSizes) {
  let output = [];
  for (let size of groupSizes) {
    let group = input.splice(0, size);
    output.push(group);
  }

  // If any items are left, add them to the last group
  if (input.length > 0) {
    output[output.length - 1] = output[output.length - 1].concat(input);
  }

  return output;
}

async function main() {
	const user = await getQueryResults('SELECT avatar_url as avatar, login as screen_name FROM curr_user limit 1');

	// this is how many users we will have for each layer from the inside out
	const layers = [8, 15, 26];

	// simple friends calculation based on followers and followings, todo: add more complex calculation
	const sqlQuery = `
	with follow as (
		select users.avatar_url as avatar,
		users.login as screen_name,
		1 as score
		from followings  
		join curr_user on curr_user.id = followings.user_id 
		join users on followings.target_user_id = users.id
	),
	
	follower as (
		select users.avatar_url as avatar,
		users.login as screen_name,
		1 as score
		from followers  
		join curr_user on curr_user.id = followers.user_id 
		join users on followers.target_user_id = users.id
	)
	
	select users.avatar_url as avatar, users.login as screen_name
	from users
	left join follow on follow.screen_name = users.login 
	left join follower on follower.screen_name = users.login
	order by (COALESCE(follow.score, 0) + COALESCE(follower.score, 0)) desc, users.followers_count desc
	limit 49
	`;
  const results = await getQueryResults(sqlQuery);

	const users = splitArray(results, layers);


	// render the image
	await render([
		{distance: 0, count: 1, radius: 110, users: user},
		{distance: 200, count: layers[0], radius: 64, users: users[0]},
		{distance: 330, count: layers[1], radius: 58, users: users[1]},
		{distance: 450, count: layers[2], radius: 50, users: users[2]},
	]);

}

main();
