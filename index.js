require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const githubData = {
    
        "login": "Kishangaur01",
        "id": 115882272,
        "node_id": "U_kgDOBug5IA",
        "avatar_url": "https://avatars.githubusercontent.com/u/115882272?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Kishangaur01",
        "html_url": "https://github.com/Kishangaur01",
        "followers_url": "https://api.github.com/users/Kishangaur01/followers",
        "following_url": "https://api.github.com/users/Kishangaur01/following{/other_user}",
        "gists_url": "https://api.github.com/users/Kishangaur01/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Kishangaur01/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Kishangaur01/subscriptions",
        "organizations_url": "https://api.github.com/users/Kishangaur01/orgs",
        "repos_url": "https://api.github.com/users/Kishangaur01/repos",
        "events_url": "https://api.github.com/users/Kishangaur01/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Kishangaur01/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 4,
        "public_gists": 0,
        "followers": 1,
        "following": 0,
        "created_at": "2022-10-15T13:45:25Z",
        "updated_at": "2024-06-09T11:39:22Z"
      }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/learn', (req,res) => {
    res.send("Learn with Kishan")
})

app.get('/login', (req,res)=> {
    res.send('<h1>Hello you have successfully logged in!</h1>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})