# `@sidebase/nuxt-auth` Starters

This repository contains a collection of [`@sidebase/nuxt-auth`](https://github.com/sidebase/nuxt-auth) starters that cover several use cases for NuxtAuth. You can use one of these templates as a starting point for your application, or to create a reproduction of an issue that you are currently encountering.

## Overview

This repository current contains the following starters:

## Local starter

The `local` starter contains a basic `@sidebase/nuxt-auth` starter with the local provider setup. `local` is best when you already have a backend that accepts username + password as a login or want to build a static application. You can read more about the `local` provider [here](https://auth.sidebase.io/guide/local/quick-start).

This starter connects to a mocked Nuxt server api that handles: `signIn`, `signOut` and `getSession`.

View the starter [here](/starters/local/).

## AuthJS starter (with GitHub)

The `authjs-github` starter contains a basic `@sidebase/nuxt-auth` starter with the `authjs` provider setup with a GitHub OAuth provider, preconfigured. `authjs` is best suited for plug-and-play OAuth for established oauth-providers or magic-url based sign-ins. You can read more about the `authjs` provider [here](https://auth.sidebase.io/guide/authjs/quick-start).

View the starter [here](/starters/authjs-github/).

## Contributing

If you would like to add another starter, please first open an issue, where you either share the idea for the starter, if it does not exist yet, or link to a public repository containing the starter. After agreeing on the implementation of the starter, you can open a new pull request to add it. 

Contributions that update any package versions of the starters are always appreciated!
