# 1000 ~~100~~ Days Of Code - Log

`Write Record Descending date order`

## Day 15: Nov 18, 2020

#### Today's Progress

- Learn Singleton design pattern with writing JS codes.

#### Thoughts

I learned Singleton pattern is to careful being Tightly coupled codes!!

#### Link to work

- [Commit: Learn Singleton pattern](https://github.com/kk0917/javascript-design-patterns/commit/735df07136a7299e00e0d27d054156f1adaffbb3)

#### Statistics - WakaTime

![WakaTime](images/wakatime_20201118.png)

## Day 14: Nov 17, 2020

#### Today's Progress

- Refactoring existing codes.

#### Thoughts

I said "refactoring...", but I do not a big deal. tidied up codes indent, add blank lines between variables and function codes, delete unneccesery comment annexed codes that understands the intention without writing it... 

In short, I refactored codes more readable. It's important and helpful for another person maintains this code in the future to do it. I think The best thing is that it's easy to maintain.

#### Link to work

- [Commit: refactor: refactor existing files for generating dic](https://github.com/kk0917/zero-jcldic-verification/commit/99fd3cd1f5f9b83b175153e3bc462a5683a486fa)

#### Statistics - WakaTime

![WakaTime](images/wakatime_20201117.png)


## Day 13: Nov 16, 2020

#### Today's Progress

- Learn Singleton design pattern into [Learning JavaScript design patterns](https://www.amazon.co.jp/dp/1449331815/ref=cm_sw_r_tw_dp_x_CvMSFb1J3D1GB)

#### Thoughts

I often use singleton object when I write Scala codes. It's a lot of learning to write that design pattern codes at two different angles.

#### Link to work

- [Commit: Learn 2.4 Singleton Pattern](https://github.com/kk0917/javascript-design-patterns/commit/17861c5fcf96c031c7417e842ee4b1934222629c)

#### Statistics - WakaTime

![WakaTime](images/wakatime_20201116.png)

## Day 12: Nov 15, 2020

#### Today's Progress

- I tried Akka HTTP library with Scala.js by using Gitter8 Templates.

#### Thoughts

I understood the project's structure. I'd like to master Scala.jp like Akka.

#### Link to work

- [Repo: try-akka-http-scalajs](https://github.com/kk0917/try-akka-http-scalajs)

#### Statistics - WakaTime

![WakaTime](images/wakatime_20201115.png)

## Day 11: Nov 14, 2020

#### Today's Progress

- Created HTTP Routing implementetion by using Akka HTTP Scala library.

#### Thoughts

Haha! It tooks 3 hours.., slow progress.

I was able to implement it, but I was not able to internal logic of Akka HTTP yet. Anyway, I've deepen my understanding while writing code.

#### Link to work

- [Commit: Create HTTP Routing](https://github.com/kk0917/akka-http-trial/pull/1/commits/0b3f056c590340a44ad64f8b33df271e1789ba18)

#### Statistics - WakaTime

![WakaTime](images/wakatime_20201114.png)

## Day 10: Nov 13, 2020

#### Today's Progress

- Try to create api by using Akka HTTP Scala library.

#### Thoughts

I can only make base template... I'd like to master creating APIs by using Akka HTTP quickly.

#### Link to work

- [Repo: akka-http-trial](https://github.com/kk0917/akka-http-trial)

#### Statistics - WakaTime

![WakaTime](images/wakatime_20201113.png)

## Day 9: Nov 12, 2020

#### Today's Progress

- Learn how to process Scala's Thread safety, yesterday's continuation.
- Update GitHub actions settings of Scala Templates

#### Thoughts

I knew to be used synchronized block into lazy Modifier.

I separated each CI blocks into GitHub Actions settings to several files. Build, lint, test, commitlint. Because when all of them is includes one file, CI processings will stop if one processing fail.

#### Link to work

- [Commit: learn synchronized processing of check and then, long lock.](https://github.com/kk0917/n-school-scala-concurrent/commit/beb6437afa285703155ef609ff0a0b58589eae37)
- [Repo: scala-templates](https://github.com/kk0917/scala-templates)

## Day 8: Nov 11, 2020

#### Today's Progress

Learn how to process Scala's Thread safety.

#### Thoughts

I understood base concept of Thread safe. But What you know is different from what you can use.

#### Link to work

- [Commit: learn how to execute thread processing safety](https://github.com/kk0917/n-school-scala-concurrent/commit/23f52c7230b3376b1613b909bb31b3a9d6cc9315)


## Day 7: Nov 10, 2020

#### Today's Progress

Learn Thread's concept and how to execute Scala's concurrent processing by using java.lang.Thread.

#### Thoughts

"concurrent" is "並行" in Japanese. "Parallel" is "並列" in Japanese. So, I should care to read one sentences these similar words are mixed in.

#### Link to work

- [Commit: chore: learn scala's concurrent processing by using thread](https://github.com/kk0917/n-school-scala-concurrent/commit/9dc01fdab27853991d2fbe8fac42731537905fae)

## Day 6: Nov 9, 2020

#### Today's Progress

Learn Revealing Module Pattern of design patterns with writing codes

#### Thoughts

This design pattern is clear what private functions or propperties is published, readable　by using pointers. I got it.

#### Link to work

- [Commit: learn 2.3 Revealing Module Patterns](https://github.com/kk0917/javascript-design-patterns/commit/3893cbc34afacc8a3672d18fd7d620f82d4fa811)

## Day 5: Nov 8, 2020

#### Today's Progress

Learn module pattern of design patterns with writing codes

#### Thoughts

JavaScript language doesn't have namespace, but it can create module pattern using Immediately-Invoked Functions. It's so difficult for me to understand its concept when I was first year since starting programmer carrear. 

I wanna say "Haha! Don't worry. Your eyes will be used to it".

#### Link to work

- [Commit: javascript-design-patterns](https://github.com/kk0917/javascript-design-patterns/pull/9)

## Day 4: Nov 7, 2020

#### Today's Progress

Create my "Scala Project Template". With a tool called Giter8
You can generate the directory structure, definition file, etc. when starting a Scala language project with sbt. This template is packed with various useful tools. Unit test tool, test coverage tool, testing framework, code formatter, code style checker, and GitHub Actions CI workflow.

#### Thoughts

TO introduce One tool of them is easy, but it's very annoying and boring to introduce all of them at once.

I of the future will thank me of today...(Is this sentence correct?)

#### Link to work

- [GitHub Repository: scala-templates](https://github.com/kk0917/scala-templates)

## Day 3: Nov 6, 2020

#### Today's Progress

- Replace Rest API cloud functions codes
	- To prepare adding another functions
- Create Scraping cloud functions codes
	- Scrape zip file number from a target site, request HTTP POST with zip file number into request body, and fetch zip files.

#### Thoughts

It was first time to create the scraping programming. Scraping looks like E2E test automation tools. Selenium, Cypress etc. Both are sober and steady work, but it's important things to work Sincerely.

By the way, coding 100 days challenge is too short for my programming life. So, I changed 1000 days challenge.

#### Link to work

My Repository: [kk0917/google-cloud-functions-sample](https://github.com/kk0917/google-cloud-functions-sample)

- API-related
	- [commit=feat: replace rest api function ](https://github.com/kk0917/google-cloud-functions-sample/commit/89283dac246ca24be19739e666c9b4c9bd14dc46)
	- [commit=chore: add docstrings ](https://github.com/kk0917/google-cloud-functions-sample/commit/f0185a0a7f06e344c244674b337cecbb11ace2e3)
- Scraping-related
	- [commit=feat: create scraping function](https://github.com/kk0917/google-cloud-functions-sample/commit/e482152bbfff96006e86ae0422b429fbc755de06)

## Day 2: Nov 5, 2020

#### Today's Progress

Play Play Framework

#### Thoughts

I'd touched programming language framework after a long time. It was fun to touch the mature framework and touch its architecture and ideas for the first time in a while.

#### Link to work

- [commits: kk0917/scala-playframework2](https://github.com/kk0917/scala-playframework2/commit/26ae08be8e9d8ca4b1528dfadc2d0fb5073f3311)

## Day 1: Nov 4, 2020

#### Today's Progress

Learn to create parser

#### Thoughts

It was so difficult for me to understand various parser. Read text, write sample code, Read text..., I'm unconfident using today's learning as my programming skills.
Anyways, I should remember it with my body if I can't remember it with my head.

Writes As many as one line, one character everyday.

#### Link to work

- [commits: kk0917/scala-parser-combinator](https://github.com/kk0917/scala-parser-combinator/pull/7/commits/791a3c730fe75ddca8745d761232dae36e3eab51)

## Day 0: August 20, 2020

#### Today's Progress

Learn create Scala's animation, GUI

#### Thoughts

The first day of [Write Code Everyday](https://johnresig.com/blog/write-code-every-day/).
I tweet my progress it on every weekend. ([#WriteCodeEveryday](https://twitter.com/search?q=%23WriteCodeEveryday&src=typed_query))

I've definitely done #WriteCodeEveryday. So, my spirit and humanity will grow by having this experiences. 

I give this word by Richard M Nixon to myself a year later.

> "Human is not finished when That person is defeated. That person is finished when That person quits."
> 

#### Link to work

- [kk0917/n-school-scala-animation](https://github.com/kk0917/n-school-scala-animation)
- [kk0917/n-school-scala-gui](https://github.com/kk0917/n-school-scala-gui)

--
--
Templates:

### Day 0: February 30, 2016 (Example 1)
##### (delete me or comment me out)

**Today's Progress**: Fixed CSS, worked on canvas functionality for the app.

**Thoughts:** I really struggled with CSS, but, overall, I feel like I am slowly getting better at it. Canvas is still new for me, but I managed to figure out some basic functionality.

**Link to work:** [Calculator App](http://www.example.com)

### Day 0: February 30, 2016 (Example 2)
##### (delete me or comment me out)

**Today's Progress**: Fixed CSS, worked on canvas functionality for the app.

**Thoughts**: I really struggled with CSS, but, overall, I feel like I am slowly getting better at it. Canvas is still new for me, but I managed to figure out some basic functionality.

**Link(s) to work**: [Calculator App](http://www.example.com)


### Day 1: June 27, Monday

**Today's Progress**: I've gone through many exercises on FreeCodeCamp.

**Thoughts** I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.

**Link(s) to work**
1. [Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)
2. [Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence)
