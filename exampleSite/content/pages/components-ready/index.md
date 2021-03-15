---
draft: false
iscjklanguage: ''
page_sections:
  - bg_image: ''
    buttons:
      - label: Check all components
        link: /page-components/
      - label: About us
        link: /
    name: testbanner
    page_component: header-banner
    subtitle: Of course these need fine-tuning and beautification...
    title: Here are components that are almost ready
  - bg_image: ''
    buttons: []
    list: posts
    name: gallery
    page_component: gallery1
    subtitle: ''
    title: Showing the square grid gallery component with a list of posts
  - bg_image: fck
    buttons: []
    name: inpage-banner
    page_component: inpage-banner
    subtitle: ' '
    title: Discover the power of PoppyGo!
  - bg_image: ''
    buttons: []
    items:
      - bodytext: |
          ### Reusable components
          Build your pages with component that you only create once
        buttons:
          - label: See all components
            link: /page-components/
        name: item1
      - bodytext: |
          ### Completely determine your own design
          All components are using your customisable design settings
        name: item2
      - bodytext: |
          ### Building your site completely in PoppyGo
          Site building without text editor or terminal? Now you can.
        name: item3
    max_columns: 3
    name: Cards
    page_component: cards1
    subtitle: ''
    title: Showing a shortlist of benefits with cards
  - bg_image: none
    buttons: []
    name: newsletter
    page_component: newsletter
    subtitle: ''
    title: The newsletter component for growing your customer database
  - bg_image: fck
    buttons: []
    image: pageimage
    name: article
    page_component: article1
    subtitle: ''
    title: PageTitle
  - bg_image: fck
    buttons: []
    name: newsletter simple
    page_component: small-newsletter
    subtitle: This is good for you
    title: Signup for the newsletter
  - bg_image: ''
    buttons: []
    name: newsletter simple2
    page_component: small-newsletter
    subtitle: This is good for you
    title: Signup for the newsletter
  - bg_image: ''
    buttons: []
    name: explainer example
    page_component: explainer
    subtitle: This component is commonly used on a homepage
    title: This is an explainer example with switching image and text at each row
resources: []
title: Almost Finished components

---


# PoppyGo One

PoppyGo One is a Hugo Theme.

## Development

### Requirement

- npm

### Setup

```
npm install
```

### Create a new tailwind.css

To compile a new tailwind css file run the following command:

```
npm run prod
```

## Release management

### Prerequisites

- Write access to the repositoty
- [Github CLI](https://github.com/cli/cli)
- npm
- make

### New release

To create a new release set a new version in ```./VERSION``` and run ```make
release```.

### Copyright

Copyright (2021) PoppyGo B.V.

The name PoppyGo and the PoppyGo logos are protected trademarks.
