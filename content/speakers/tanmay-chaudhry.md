---
title: "Tanmay Chaudhry"
aliases: 
    - /speakers/tanmay/
topic : "Efficient Docker Images"
date: 2018-07-16T22:49:37+05:45
twitter : "https://twitter.com/Tuxybuzz13"
github : "https://github.com/tchaudhry91"
# website : ""
from : "india"
layout : "speakers"
img : "/img/speakers/tanmaya.jpg"

about : "Nerd. I like computers, games, pop culture and everything else nerdy. I'm working as a Site Reliability Engineer at Adobe. I spend most of my time staring at terminals and writing some Python/Go. I'm no expert but I like to enthuse about containers, orchestration, the internet, home-labs..what have you."
---
Writing Dockerfiles is not a hard task. You can quickly dockerize a service and deploy it. While this is great, it can lead to some inefficient and bloated images. The talk aims to show a handful of best practices when writing Dockerfiles which lead to smaller images. This in turns speeds up deployments (specifically on cluster nodes) and provides a smaller footprint for vulnerabilities as well. Here are some of the things I’ll cover:

 - Docker image layers 
 - Smaller base images 
 - How to properly remove intermediates 
 - Multi-stage builds 
 - Dockerignore 
 - Language-specific tips 
 - OnBuild triggers
 
This will include a quick live demonstration by reducing a bloated image from 700+MB to a single digit MB.