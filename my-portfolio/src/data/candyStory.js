// Content for the Halloween candy data story page (/projects/halloween-candy).
// The story text is Elle's write-up, kept word for word.

// Google Sheets chart (Chart 1). In the Sheet: click the chart, the ⋮ menu → Publish chart →
// Embed tab → Interactive → Publish, then copy only the link inside src="..." and paste it here.
// Leave it empty and the page shows a placeholder instead.
export const sheetsChartUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_CaG6WDOzeashhwEf4eumPt6yBcUDX_YtlpNyzrG1QWXfGs2pT165wW8cd8N0idxUUCksK2_Vk9EY/pubchart?oid=1179267375&format=interactive";

export const candyStory = {
  path: "/projects/halloween-candy",
  title: "What Makes a Halloween Candy Desirable?",
  subtitle: "a remix of Walt Hickey’s “The Ultimate Halloween Candy Power Ranking” (FiveThirtyEight, 2017)",
  byline: "By Elle Miller - October 2026",

  // Each block is a heading, paragraph, list, or chart slot, in reading order.
  // A paragraph uses `text`, or `parts` (text and link pieces) when it has a citation link.
  blocks: [
    { type: "h2", text: "Introduction" },
    {
      type: "p",
      text: "Every Halloween, I search the store pondering what Halloween candy to buy for trick or treaters. Not only is it hard to please everyone, I also have a peanut allergy so a lot of the candy aisle is off limits for me. In 2017, FiveThirtyEight ran an online survey where people picked between two random halloween candies. 8,371 different participants voted on roughly 269,000 candy matchups and FiveThirtyEight used the results to rank 85 candies (and a dime and a quarter they added in there for fun!). The original story showed the results in a ranked table and used a regression to figure out what ingredients mattered the most. They also said there wasn’t a clear link between a candy’s price or sugar content and how often it won.",
    },
    {
      type: "p",
      text: "My question with this is, what makes a Halloween candy popular and does the answer change depending on how you look at the data? To look at this, I will present three different visualizations:",
    },
    {
      type: "list",
      items: [
        "Ingredients: which ones benefit or hurt a candy?",
        "Flavor and form: how do candies compare?",
        "Price and sugar: do they really matter?",
      ],
    },

    { type: "h2", text: "The original story" },
    {
      type: "p",
      parts: [
        "The original article and study (",
        { href: "https://web.archive.org/web/20191208172321/https://fivethirtyeight.com/features/the-ultimate-halloween-candy-power-ranking/", text: "Hickey, 2017" },
        ") was written by Walt Hickey. It shows the data as a ranked list, a screenshot of the regression output, and a small table of how much each ingredient adds. There aren’t any charts and readers aren’t really able to explore the data on their own. For my remix, I used the same data and regression numbers but made three visualizations instead, aiding in audience understanding of the data.",
      ],
    },

    { type: "h2", text: "The data" },
    {
      type: "p",
      parts: [
        "The dataset is candy-data.csv from FiveThirtyEight’s public repository (",
        { href: "https://github.com/fivethirtyeight/data/tree/master/candy-power-ranking", text: "FiveThirtyEight, 2017" },
        "). There are 85 rows (83 candies plus the two coins). The columns are:",
      ],
    },
    {
      type: "list",
      items: [
        "winpercent: the share of head to head matchups a candy won (0 to 100).",
        "9 yes/no traits: chocolate, fruity, caramel, peanutyalmondy, nougat, crispedricewafer, hard, bar, and pluribus (1 is yes and 0 is no).",
        "sugar percent and pricepercent: where the candy falls compared with the rest of the set for sugar and unit price (scale from 0 to 1).",
      ],
    },
    {
      type: "p",
      text: "I added two columns of my own, family (chocolate, fruity, or other) and form (bar, many pieces, or single piece). This wasn’t necessarily a scientific survey since anyone could vote as many times as they wanted but the matchups were random, so it’d be hard for someone to skew the results.",
    },

    { type: "h2", text: "Ingredients" },
    { type: "chart", chart: "sheets" },
    {
      type: "p",
      text: "For this chart, I compared the average win percentage of candies with each ingredient to those without it. I put those numbers next to the values from FiveThirtyEight’s regression which looks at all the ingredients all at once.",
    },
    {
      type: "p",
      text: "Either way, chocolate came out on top. Chocolate candies won 60.9% of their matchups compared to 42.1% for everything else, a gap of 18.8 points. The regression gave chocolate 19.9 points, so the two methods mostly agree there. Peanuts and almonds also did well with 16.0 points from the simple comparison and 10.1 from the regression. This was a little disappointing for me since 7 of the 10 top candies have nuts in them and I will have to avoid them.",
    },
    {
      type: "p",
      text: "The other ingredients didn’t line up as well. Fruity candies won 11.2 points less than the non fruity ones but the regression says fruit adds 10.3 points. Candy bars were 14.6 points higher on their own but slightly negative (-0.7) in the regression. I believe this is because almost every candy bar in the data is chocolate (20 of 21) and almost none of the fruity candies are (1 of 38). So the simple averages are mostly picking up chocolate. This is a good example of what we discussed in class where showing the same data in two different ways can lead to different conclusions. It also made me wonder if chocolate was behind some of the other results, so that is what I looked at next.",
    },

    { type: "h2", text: "Flavor and Form" },
    { type: "chart", chart: "swarm" },
    {
      type: "p",
      text: "To see if chocolate was behind the results in the first chart, I made a chart where every candy is its own dot placed by its win percentage and colored by flavor. The buttons at the top will regroup the dots by form or by flavor, with averages visible by a dashed line.",
    },
    {
      type: "p",
      text: "When you group by form, candy bars look like the clear winners with an average of 61.3%. However, the colors give it all away since almost every bar is pink, meaning chocolate. When you switch to grouping by flavor the dots slide into three noticeable groups. Chocolate averages 60.9%, fruity 44%, and other candy 35.9%. This supported what I suspected. Flavor matters a lot more than form, and chocolate is behind most of the results.",
    },
    {
      type: "p",
      text: "I like this chart since you can see every single candy instead of just an average. For example, there are only 11 candies in the Other group, so it’s easy to see that its average is being based upon only a few candies.",
    },

    { type: "h2", text: "Price and Sugar" },
    { type: "chart", chart: "altair" },
    {
      type: "p",
      text: "Since chocolate seemed to explain so much, I wanted to see if it also explained FiveThirtyEight's claim about price and sugar. They said price and sugar didn’t really affect how often a candy won. When I checked, price did have a small correlation with win percentage (0.35) and sugar had a smaller one (0.23). However, price was also tied to chocolate (0.50) since chocolate candies tend to cost more than non chocolate ones.",
    },
    {
      type: "p",
      text: "This chart lets you look at that yourself. Each dot is a candy, colored by family. The bars on the right show how many candies fall in each price range and if you drag across some of the bars then the scatterplot will show the candies in that price range. I also added a checkbox that fades out every candy with peanuts, since that’s how myself and others with allergies have to shop.",
    },
    {
      type: "p",
      text: "When I only looked at chocolate candies, the correlation between price and winning dropped to 0.21, whereas for non chocolate candies it was slightly negative (-0.13). Some of the cheaper candies like Reese’s Miniatures still did really well (82%) and some expensive ones like Nik L Nip did poorly (22%). So I think FiveThirtyEight was mostly right and price only seems to matter since chocolate candies cost more.",
    },

    { type: "h2", text: "What this adds to the original" },
    {
      type: "p",
      text: "At first glance, it might seem like I ended up in the same place as FiveThirtyEight since chocolate wins either way. However, the visualizations I created showed things the original tables did not. The fruity candy number is easy to misread. The original table says fruit adds about 10 points, which sounds like a good thing, but candies like pixy stix lost to a coin (not even a candy, a quarter). Only 11 of 38 fruity candies won more than half of their matchups, compared to 28 of the 37 chocolate candies.",
    },
    {
      type: "p",
      text: "There is a gap in the data since there aren’t any fruity candy bars, so there is no way to tell if being a bar helps a candy on its own. The original regression still gives bars a score but the second chart shows there isn’t really enough data to back it up. The original also doesn’t look at allergies at all, which is important to me and many others with allergies. If you take out everything with peanuts, chocolate still takes over. 9 of the top 10 peanut free candies are chocolate (Starburst is the only one that isn’t) and Twix, Kit Kat, and Milky Way are the top peanut free picks. You can see this visualized by checking the peanut box in the third chart.",
    },

    { type: "h2", text: "Conclusion" },
    {
      type: "p",
      text: "Overall, chocolate is the biggest factor in whether a candy wins. Peanut butter and crispy wafers help too which is why Reese’s, Twix, and Kit Kat are all top five ranking candies. Fruity candies aren’t necessarily bad, they were still being chosen but they just aren’t chocolate, and price and sugar don’t seem to influence much on their own.",
    },
    {
      type: "p",
      text: "The bigger takeaway for me is that looking at just one thing at a time can be misleading. If I had only made the first chart, I would have thought fruit flavor hurts a candy and candy bars help, when really it was all about chocolate. Looking at the data a few different ways gave a much clearer answer.",
    },
    {
      type: "p",
      text: "So if you want to be the most popular house this Halloween, peanut butter cups are the way to go. I’ll be sticking with the more allergy friendly Twix and Kit Kat, which came in at #3 and #4 respectively.",
    },
  ],

  // Each source is a list of text and link pieces so links can sit mid-sentence.
  // "pageLink" is replaced with this page's own live URL.
  sources: [
    [
      "Data: FiveThirtyEight. (2017). candy-power-ranking [Data set]. GitHub. ",
      { href: "https://github.com/fivethirtyeight/data/tree/master/candy-power-ranking" },
      " (CC BY 4.0)",
    ],
    [
      "Original story: Hickey, W. (2017, October 27). The ultimate Halloween candy power ranking. FiveThirtyEight. Archived at ",
      { href: "https://web.archive.org/web/20191208172321/https://fivethirtyeight.com/features/the-ultimate-halloween-candy-power-ranking/" },
    ],
    [
      "Chart 1 built in Google Sheets: ",
      { href: "https://docs.google.com/spreadsheets/d/1AOnei9z10lpmrxsEo0F8vvIsR7WM9OcNbvJJRLhMqK4/edit", text: "Candy Data sheet" },
      "; Chart 2 built with D3 (JavaScript) in Google Colab: ",
      { href: "https://colab.research.google.com/drive/1Q9ba1keyoHMmTJlm5vYtAfYqQA6uD2ta", text: "D3 notebook" },
      "; Chart 3 built with Altair (Python) in Google Colab: ",
      { href: "https://colab.research.google.com/drive/1QLWX1g2OlUJwc8ibQ0Ry2RG5CffMwTdO", text: "Altair notebook" },
      ".",
    ],
    [
      "Altair code adapted from the Altair gallery examples “Scatter Plot and Histogram with Interval Selection” (",
      { href: "https://altair-viz.github.io/gallery/scatter_with_histogram.html" },
      ") and “Multiple Interactions” (",
      { href: "https://altair-viz.github.io/gallery/multiple_interactions.html" },
      "). D3 beeswarm layout adapted from the D3 gallery “Beeswarm” examples (",
      { href: "https://observablehq.com/@d3/beeswarm" },
      ") and the d3-force docs (",
      { href: "https://d3js.org/d3-force" },
      ").",
    ],
    ["Live portfolio version: ", "pageLink"],
    ["Claude - provided dataset and aided in the development of D3 (Visualization 2 - Flavor and Form) visualization"],
  ],
};
