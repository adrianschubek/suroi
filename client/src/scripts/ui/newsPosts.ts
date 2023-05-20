export interface NewsPost {
    date: number
    author: string
    title: string
    bannerImage?: string
    content: string
    longContent?: string
}

export const news: NewsPost[] = [
    {
        date: 1684533600000,
        author: "Suroi Developers",
        title: "Public Beta Release",
        bannerImage: require("../../assets/img/news/beta-release.png"),
        content: "After weeks of development, we are pleased to announce that suroi is now open for playing! The game is in its beta version, so please report any bugs in the <a href=\"https://discord.gg/j8pPtMa843\" target=\"_blank\" rel=\"noopener noreferrer\">Discord</a> server. New features are added daily, so be sure to check back in!",
        "longContent": "<h2 class=\"post-header\">What is the Beta Release?</h2><div>The Beta release signifies that the game is now open for the public to play. However, many features that will be in the game in the future are currently not added as we test to ensure all current features are working correctly. Over the next few weeks, these features will gradually be added.</div><h2 class=\"post-header\">Suroi's creation</h2><div>After surviv.io shut down, we knew that thousands, if not millions, of people were looking to play a similar game. Hence, suroi was born. Inspired by surviv, suroi offers a similar style of gameplay while being more detailed and intricate. With 100% original code, assets, and gameplay, suroi is a revolutionary new game in the .io game landscape.</div><h2 class=\"post-header\">Who made suroi?</h2><div>Because suroi is open source, dozens of developers, artists, and designers have conglomerated under the leadership of Hasanger to make the game the best it could be. Because there are so many people working to build the game, this means new features will be frequent and bug fixes will be swift.</div><h2 class=\"post-header\">What's next?</h2><div>The beta release only has a few features, such as map generation and the ability to access loot from crates. You can check all of that out by playing the game on the <a href =\"./\">homepage</a>. Over the next few weeks, key parts of the game such as the ability to shoot guns, enter buildings, throw grenades, multi-player modes, seasonal events, and more will be added! All new updates will be posted on both the homepage as well as on the news page.</div>"
    },
    {
        date: 1683360000000,
        author: "Suroi Developers",
        title: "Long Live Suroi",
        bannerImage: require("../../assets/img/logos/suroi.svg"),
        content: "Welcome to the 2D battle royale game, Suroi. Totally free to play, and open-source as well! Head over and check out the <a href=\"https://wiki.suroi.io\" target=\"_blank\" rel=\"noopener noreferrer\">wiki</a>, <a href=\"/leaderboard\" target=\"_blank\" rel=\"noopener noreferrer\">leaderboards</a>, and more in the dropdown menu, or check out our socials below. Join our <a href=\"https://discord.gg/j8pPtMa843\" target=\"_blank\" rel=\"noopener noreferrer\">Discord</a> server to stay updated!"
    }
]