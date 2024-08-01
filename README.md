# CineSite demo

![CineSite](/public/assets/logo/cinesite.png)

This is a demo site to accompany Marty Friedel's talk "Statamic: Getting started with Blueprints and Fields".

## Aim

This site has been built to as a playground to help demonstrate building out Blueprints, Fields and Fieldsets in
Statamic with a real-world application - a cinema - because we all love the movies, right?

This site has been built with:
- **S**tatamic 5
- **A**lpine 3
- **L**aravel 11
- **T**ailwind CSS 3.4

How great is that SALT acronym?

## Getting started

This site is incomplete - and designed for you to build along with the presentation.

1. Clone this repo locally
2. Run `composer install`
3. Copy the `.env.example` file to a `.env`, and run `php artisan key:generate`
4. Run `npm install`
5. Run `npm run dev`
6. Create a user: `php please make:user`

You can log in to the Statamic CP with your new user by visiting the site's URL on your local environment and popping 
"/cp" on the end of your site's URL. If you're using something like Herd, it may be:
http://statamic-cinesite.test/cp

## Simplified, on purpose

To keep the focus on Blueprints and Fields, areas of this site have been purposely simplified. For example, there's no
metadata for pages.

But given this site is a learning tool, this is a great opportunity for you to explore Fields and Blueprints in Statamic
to extend the site's Blueprints to add support for metadata, such as a customisable Title tag.

We've also removed unnecessary features like mobile menus and contact forms - while they're important parts of a 
website, for the purpose of this demo, simpler code is more valuable.

## Talk contents

The demo component of the talk went through a number of Blueprint, Field and Fieldset steps, including:
- creating and hooking up a Movies collection
- outputting variables from your Blueprint
- exploring Fieldtypes:
  - integer
  - date
  - asset
  - video
  - replicator
- creating and using Taxonomies and Taxonomy Terms
- creating and using Fieldsets across collections

### Demo Movies templates

If you want to have a look at more 'finished' output, you'll see two files in the `resources/views` folder:
- `_demo_movies_index.antlers.html`, and
- `_demo_movies_show.antlers.html`

While these are far from production ready (and are missing responsive styles) you can pop these in 
`resources/views/movies` as `index.antlers.html` and `show.antlers.html` respectively to get up and running fast.

There's also a `_demo_layout.antlers.html` which can replace the `_layout.antlers.html` file to see a fancier home page
and includes references to the metadata added as part of the Fieldsets demo.

## Credits

The site has been designed and built by [Marty Friedel](https://www.martyfriedel.com)
from [Mity Digital](https://www.mity.com.au).

Popcorn photography "Flat lay of popcorn for cinema concept" is
lovingly used from [Freepik](https://www.freepik.com/free-photo/flat-lay-popcorn-cinema-concept_4698766.htm#fromView=search&page=1&position=26&uuid=89125431-30d4-48be-91c8-b96afcc645e2).
