# Shorten URL

## Table of Contents

- [About](#about)
- [Getting Started on Development Environment](#getting_started_de)
- [Prerequisites](#prerequisites)

## About <a name = "about"></a>

This API is to generate a short URL

## Getting Started on Development Environment <a name = "getting_started_de"></a>

1. Create a docker imagem with postgres 12.6 - Example: (docker run --name challenge_shorten_url -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres:12.6)
2. Create a database called: shorten_urls
2. Fork this project github
3. Run yarn install or npm install
4. Execute comand: yarn typeorm migration:run
5. Execute comand: yarn dev:server
6. [Use routes](#routes)

### Prerequisites <a name = "prerequisites"></a>

Docker
Node.js v14.15.5
Image Docker Run with Postgres 12.6

### Examples usage routes <a name = "routes"></a>

***On route: localhost:3333/encurtador***
  **request:** 
    
    {
      "url": "https://wisereducacao.com/"
    }
    

  **response**
    
    {
      "shorten_url": 
      {
        "urlOrigin": "https://wisereducacao.com/",
        "keyShortenURL": "DgsiJXQ",
        "id": "519c079a-3dbb-4d87-a7ee-d7ee6f388cab"
      }
    }
    
  
***On route: localhost:3333/pegar_url_original***
  **request:** 
    
    {
      "url": "Lfd54"
    }
    

  **response**
    
    {
      "origin_url": "https://wisereducacao.com/"
    }
    
