---
title: "Oliver Szimmetat"
aliases:
  - /speakers/oliver/
topic: "Securing the Continuous Delivery Pipeline"
date: "2018-07-16T22:49:37+05:45"
# twitter : "https://twitter.com/amdsouza92"
# github : "https://github.com/gkcs"
website : "https://www.linkedin.com/in/oliversz/"
layout: "speakers"
from: "united-states"
img: "/img/speakers/oliversz.jpeg"

about: "Born and raised in Hamburg, Germany, Oliver currently lives in Seattle, Washington, USA, where he just joined UBER as a Cloud Security Engineering Manager.

Prior to that, he spent 18 years at Microsoft, where he worked in various engineering and engineering management roles contributing to Windows client security (developing and releasing security updates), anti-piracy, cloud security best practices, security testing (Windows and Office), and continuous integration/delivery for all the company’s commercial online services. 

In his spare time he also volunteers to deliver (security) engineering training to schools and start-up companies in Ethiopia, Kenya, and Tanzania."
---

In the world of Continuous Delivery (CD), products and services are build using distributed source code repositories and various artifacts such as binary packages. This presentation will provide an overview of ways to mitigate resulting risks such as cross-build injection (XBI) attacks.

While security engineering traditionally aims to protect applications and services that are running in production or on a user's device, a new class of attacks targets the engineering system that builds, delivers, and deploys the binaries to their target environment. Furthermore, the Continuous Integration/Continuous Delivery (CI/CD) model leaves little to no time for dedicated security testing and requires a new approach towards secure engineering.

This talk will give an overview of:

- known supply-chain attacks, such as cross-build injection (XBI), and ways to protect against them
- integrated security testing and validation in the CI/CD pipeline,
- security-related quality gates, and
- ways to respond to security incidents
