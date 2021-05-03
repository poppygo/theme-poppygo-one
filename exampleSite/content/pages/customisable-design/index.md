---
draft: false
image: none
page_sections:
  - appearance:
      background_color: transparent
      background_image: ''
      item_background_color: white
      parallax: false
      texture: grain
    component: md-navbar
    image: ''
    name: navbar
    subtitle: ''
    texture: ''
    title: ''
  - appearance:
      background_color: old-rose
      background_image: ''
      item_background_color: old-rose
      parallax: false
      texture: ''
    bodytext: ''
    buttons: []
    component: headerbanner-poster
    image: none
    name: banner
    subtitle: '->frompage'
    title: '->frompage'
    title2: max control
  - appearance:
      background_color: davys-grey
      background_image: none
      item_background_color: old-rose
      parallax: true
      texture: grain3
    bodytext: ''
    buttons: []
    component: poster-standard
    image: ''
    name: article
    subtitle: '->frompage'
    title: '->frompage'
  - appearance:
      background_color: old-rose
      background_image: ''
      item_background_color: ''
      parallax: false
      texture: ''
    bodytext: ''
    buttons: []
    component: md-footer
    image: ''
    name: footer
    subtitle: ''
    title: ''
resources: []
subtitle: Design
title: Customisable

---


##  Components

### Full control over layout

#### All pages are built with components
See it as a kind of Lego with which you control the layout of every page.
we have banner components, list components, article components and so on.

#### Each component comes with example content.
For making is easy, the components come with some example content. So, when you add a component to your page, you immediately get to see the layout. Simply add your content to the page section and the default content will be overridden.

#### You can make reusable components
If you want some components to show the same content on all pages, for example the navbar, footer or newletter signup, you can make a copy into my-components and modify the content.
Then you can add that component to all pages, where it makes sense.

{{< image uten >}}


### Control apearrance of every component

##  Appearance

#### Background colors
For every component you define the background color and the item background color.
Itembackground color is used for background colors of individual cards or articles

#### Background image
Also every component can be given a background image. This image will be automatically processed and optimized for all screensizes. Background images will be covering the whole container.

#### Overlay texture
A nice addition to the appearance set, is the possibility to add a texture overlay. In this theme, we use a film-grain overlay to give the vintage-look. In the design settings, you can choose which blendmode and opacity you want your textures to be. Again, full control.

#### Override the design for a component 
Sometimes you want to have different buttons and typographies for a specific component than the generic site design. When you copy a component in my-components and when you modify the design there, then the general design with be overruled for that specific component.

##  Design

### Tweak your design in the design configuration.

#### Typography
In the design you can define multiple typographies, like title, menu and body.
You can choose from the fonts in your fontscheme.

#### Fontscheme
It's easy to create beautiful fonts sets. Just add the name of the google font and the theme will do the rest.

#### Buttons
You can define as many buttons as you want in terms of roundings, colors, textsize and font. The buttons that you define can be used from within components and shortcode. 

#### Colourscheme
One of the most important aspects of design are of-course colors. In the colorscheme configurator you add your colors and give them names. In the all page you now can control colors of text, borders and backgrounds with these names.
